'use client'

import { motion } from "framer-motion"
import Image from "next/image"


export default function photo() {
  return (
    <div className="w-full h-full relative">
        <motion.div initial={{opacity:0}} animate={{opacity: 1,
        transition:{delay: 2, duration: 
            0.4, ease: "easeIn"
        }}}>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                <Image src="/assets/photo.jfif" priority quality={100} fill alt=""/>
            </div>
        </motion.div>
    </div>
  )
}
