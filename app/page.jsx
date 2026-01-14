import AnimatedText from "@/components/AnimateText";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className='text-xl'>Product Designer</span> */}
            <AnimatedText text="Product Designer" className="text-xl" />
            <h1 className="h1 mb-6">
              Hello, {"I'm"} <br />{" "}
              <span className="text-accent">Ola Ajayi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in designing intuitive, user-centered digital products, leveraging strong UX thinking, visual design, and a deep understanding of how products are built and scaled.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1EFLLBOA3fLPVRDr0W0xFxU8iE4MmFoCG/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
      <div className="container mt-5 mx-auto w-full h-auto">
        <iframe className=""
          src="https://www.superme.ai/embed/oajayi?style=minimalistic"
          width="100%"
          height="150"
          target="_blank"
        //   style="border: none; border-radius: 16px;"
          title="Olaoluwa's SuperMe Profile"
        ></iframe>
      </div>
    </section>
  );
}
