"use cliente"

import { Description } from "@radix-ui/react-dialog";
import { FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa"
import { SiDocker, SiDotnet, SiTailwindcss, SiNextdotjs, SiOpenai } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc";

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sapiente cum numquam nihil temporibus cupiditate, itaque fugit, maxime magnam repellendus esse aspernatur iste corporis',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Brenno Harten'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+55) 85 99832 7174'
        },
        {
            fieldName: 'Experience',
            fieldValue: '+5 years'
        },
        {
            fieldName: 'Email',
            fieldValue: 'brennoharten@gmail.com'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Brazilian'
        },
        {
            fieldName: 'LinkedIn',
            fieldValue: 'https://www.linkedin.com/in/brennoflorencio/'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Inglish, Portuguese'
        },
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "AeC - Contact Center",
            position: "Software developer",
            duration: "2021 - Present"
        },
        {
            company: "AeC - Contact Center",
            position: "Software developer",
            duration: "2021 - Present"
        }
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "University of Fortaleza",
            degree: "Computer Ciensce",
            conclusion: "2023"
        },
        {
            institution: "University of Fortaleza",
            degree: "Computer Ciensce",
            conclusion: "2023"
        },
        {
            institution: "University of Fortaleza",
            degree: "Computer Ciensce",
            conclusion: "2023"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    skillist: [
        {
            icon: <FaJs />,
            name: "Java script"
        },
        {
            icon: <FaJs />,
            name: "Java script"
        },
        {
            icon: <FaJs />,
            name: "Java script"
        },
        {
            icon: <FaJs />,
            name: "Java script"
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

export default function page() {
    return (
        <motion.div initial={{opacity: 0}}>

        </motion.div>
    )
}
