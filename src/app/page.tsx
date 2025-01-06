import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Socials";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Brenno Harten</span></h1>
            <p className="max-w-[500px] mb-9 text/wuite/80">
              I exel at crafting elegant digital experiences and I am proficient in various programming languages and thecnologies.</p>
          </div>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppsercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/> 
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social/>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
