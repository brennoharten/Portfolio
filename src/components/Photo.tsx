'use client'

import { motion } from "framer-motion"
import Image from "next/image"


export default function Photo() {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: {
                    delay: 2, duration:
                        0.4, ease: "easeIn"
                },
            }}>
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute flex items-center justify-center"
                >
                    <div className="relative w-[200px] h-[200px] xl:w-[380px] xl:h-[380px]">
                        <div className="absolute inset-0 rounded-full bg-[#0F1A42] z-0" />
                        <Image
                            src="/assets/photo.png"
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-contain w-full h-full z-10
                            [mask-image:radial-gradient(circle,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0)_100%)] 
                            [mask-composite:exclude] mix-blend-lighten"
                        />
                    </div>
                </motion.div>
                {/* circle */}
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://ww.3.org/2000/svg"
                >
                    <motion.circle cx="253" cy="253" r="250" stroke="#FDB813" strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}
