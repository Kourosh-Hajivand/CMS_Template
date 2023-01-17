import GlobalNavbar from "../../components/GlobalNavbar";
import Image from "next/image";
import blogbg from "../../public/blog/Blogbg.jpg";
import Footer from "../../app/Footer";
export default function BlogLayout({ children }) {
  return (
    <body className="font-IransansMD">
      <header>
        <GlobalNavbar />
      </header>
      <main>
        <div className="w-full h-[50vh] flex items-center px-10 justify-center relative Blogimagewraper">
          <div className="fixed top-0 left-0 w-full h-full">
            <Image
              src={blogbg}
              fill
              className="object-cover object-center"
              priority={true}
              placeholder="blur"
              sizes="(max-width: 1780px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              alt="Hero background"
            />
          </div>
          <div className="bg-black/60 fixed top-0 left-0 right-0 bottom-0 z-[2]" />
          <div className="z-10 flex space-y-7 flex-col justify-start items-start ">
            <h1 className="text-4xl md:text-6xl  text-neutral-50 font-Iransansblack">
              بلاگ
            </h1>
          </div>
        </div>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}
