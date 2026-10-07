import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Favorite from "./components/section/Favorite";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Stories from "./components/section/Stories";
import Archive from "./components/section/Archive";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Favorite />
      <Stories />
      <Archive />
      <Footer />
    </>
  )
}
