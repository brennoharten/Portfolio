"use client"

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StairTransition() {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 rigth-0">satirs</div>
            </div>
        </AnimatePresence>
    )
}
