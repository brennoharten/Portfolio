import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xk:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1>Hello I'm <br/> <span>Brenno Harten</span></h1>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
