"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from 'next-intl';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'


const info = [
    {
        icon: <FaPhoneAlt />,
        title: "phone",
        description: '(+55) 85 99832 7174'
    },
    {
        icon: <FaEnvelope />,
        title: "email",
        description: 'brennoharten@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "address",
        description: 'Code Corner, Tech town 123456'
    },
]

import { motion } from "framer-motion"

export default function page() {
    const t = useTranslations('contact')
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 :xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="">
                            <h3 className="text-4xl text-accent">{t('workTogether')}</h3>
                            <p className="text-white/60">{t('workTogetherP')}</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder={t('firstname')} />
                                <Input type="lastname" placeholder={t('lastname')} />
                                <Input type="email" placeholder={t('emailAddress')} />
                                <Input type="phone" placeholder={t('phoneNumber')} />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={t('selectService')}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>{t('selectService')}</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea className="h-[200px]" placeholder={t('typeMessage')}/>
                            {/* btn */}
                            <Button size="sm" className="max-w-40">{t('sendMessage')}</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-cneter xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{t(item.title)}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
