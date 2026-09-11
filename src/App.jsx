import Hero from "./components/section/Hero";
import About from "./components/section/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  )
}
