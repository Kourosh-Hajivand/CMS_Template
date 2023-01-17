import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="font-IransansMD overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="خانه">
          <Hero />
        </section>
        <section id="درباره ما">
          <About />
        </section>
        <section id="منو">
          <Menu />
        </section>
        <section id="وبلاگ">
          <Blog />
        </section>
      </main>
      <footer id="ارتباط با ما">
        <Footer />
      </footer>
    </div>
  );
}
