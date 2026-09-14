import { NextResponse } from "next/server";
import sharp from "sharp";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { favoritePersonRateLimit } from "@/lib/rate-limit";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const MAX_NAME_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

export async function POST(request) {
    try {
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            "unknown";

        const { success } =
            await favoritePersonRateLimit.limit(
                `favorite-person:${ip}`
            );

        if (!success) {
            return NextResponse.json(
                { error: "Sabar Co, Banyak yang ngirim ini ke Server gw" },
                { status: 429 }
            );
        }

        const formData = await request.formData();

        const name = formData.get("name");
        const description = formData.get("description");
        const file = formData.get("file");

        if (
            typeof name !== "string" ||
            typeof description !== "string" ||
            !(file instanceof File)
        ) {
            return NextResponse.json(
                { error: "Kaga lengkap itu, Lengkapin pliss" },
                { status: 400 }
            );
        }

        const cleanName = name.trim();
        const cleanDescription = description.trim();

        if (!cleanName || !cleanDescription) {
            return NextResponse.json(
                { error: "Nama dan deskripsi kudu bet diisi." },
                { status: 400 }
            );
        }

        if (cleanName.length > MAX_NAME_LENGTH) {
            return NextResponse.json(
                { error: "Nama Lu panjang banget." },
                { status: 400 }
            );
        }

        if (
            cleanDescription.length >
            MAX_DESCRIPTION_LENGTH
        ) {
            return NextResponse.json(
                { error: "Deskripsi Lu panjang banget." },
                { status: 400 }
            );
        }

        if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
                { error: "Kudu JPG, PNG, atau WebP." },
                { status: 400 }
            );
        }

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { error: "Max 2MB Maap" },
                { status: 400 }
            );
        }

        const inputBuffer = Buffer.from(
            await file.arrayBuffer()
        );

        const image = sharp(inputBuffer);

        const metadata = await image.metadata();

        if (
            !metadata.format ||
            !["jpeg", "png", "webp"].includes(metadata.format)
        ) {
            return NextResponse.json(
                { error: "Kaga bisa, Kudu Jpeg, Png, sama Webp" },
                { status: 400 }
            );
        }

        const outputBuffer = await image
            .rotate()
            .resize(1200, 1200, {
                fit: "inside",
                withoutEnlargement: true,
            })
            .webp({
                quality: 80,
            })
            .toBuffer();

        const fileName = `${crypto.randomUUID()}.webp`;

        const { error: uploadError } =
            await supabaseAdmin.storage
                .from("favorite-person")
                .upload(fileName, outputBuffer, {
                    contentType: "image/webp",
                    cacheControl: "31536000",
                    upsert: false,
                });

        if (uploadError) {
            throw uploadError;
        }

        const { data: publicData } =
            supabaseAdmin.storage
                .from("favorite-person")
                .getPublicUrl(fileName);

        const publicUrl = publicData?.publicUrl;

        if (!publicUrl) {
            await supabaseAdmin.storage
                .from("favorite-person")
                .remove([fileName]);

            throw new Error("PublicURL Ga tersedia");
        }

        const { error: insertError } =
            await supabaseAdmin
                .from("favorite_people")
                .insert({
                    name: cleanName,
                    description: cleanDescription,
                    photo_url: publicUrl,
                    status: "pending",
                });

        if (insertError) {
            await supabaseAdmin.storage
                .from("favorite-person")
                .remove([fileName]);

            throw insertError;
        }

        return NextResponse.json(
            { success: true, message: "Mantap!, Terkirim Coy" },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Servernya kayanya Error dah, Maap deh ya." },
            { status: 500 }
        );
    }
}
