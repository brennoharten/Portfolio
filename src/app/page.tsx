import { FiDownload } from "react-icons/fi"

//components
import { Button } from "@/components/ui/button";
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home')
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t('role')}</span>
            <h1 className="h1 mb-6">{t('greeting')}<br /> <span className="text-accent">Brenno Harten</span></h1>
            <p className="max-w-[500px] mb-9 text/wuite/80">
            {t('description')}</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppsercase flex items-center gap-2">
                <span>{t('downloadCV')}</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
