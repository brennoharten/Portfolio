"use client"

import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useState } from "react";
import setLanguageValue from "@/actions/set-language-action";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import { useTranslations } from 'next-intl';


export default function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const t = useTranslations('navbar');

    // Function to handle language change
    const handleLanguageChange = (newValue: string) => {
        setSelectedLanguage(newValue);
        setLanguageValue(newValue);
    };
    return (
        <header className="py-8 xl:py-12 text-white  ">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Brenno<span className="text-accent">.</span>Code
                    </h1>
                </Link>
                {/* desketop nav */}
                <div className="flex flex-row gap-4 justify-between items-center">
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>{t('hire')}</Button>
                        </Link>
                    </div>

                    {/* mobile nav */}
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                    {/* Language Dropdown using select */}
                    <div className="relative">
                        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                            <SelectTrigger className="w-full gap-1 items-center text-accent hover:border-accent rounded-full">
                                <SelectValue>{selectedLanguage}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="pt">Portuguese</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>


                    </div>
                </div>

            </div>
        </header>
    )
}
