'use client'

import { useRef, useState } from "react";

interface CardProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode
    overflows?: boolean;
}

const LandingSectionCard = ({title, subtitle, children, overflows}: CardProps) => {
  
    const [isScrolledLeft, setIsScrolledLeft] = useState(true);
    const [isScrolledRight, setIsScrolledRight] = useState(false);
    const scrollableRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = () => {
      if (scrollableRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
        // Check if the element is scrolled all the way to the left
        const isLeft = scrollableRef.current.scrollLeft === 0;
        setIsScrolledLeft(isLeft);
        const isRight = scrollLeft + clientWidth >= scrollWidth;
        setIsScrolledRight(isRight);
      }
    };  

    return (
        <section className="flex flex-col items-center justify-center w-full py-6 px-6 md:py-12 sm:px-12 bg-white border rounded-2xl gap-5 md:gap-12 border-dark/10">

            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <p className="text-2xl sm:text-[30px] font-medium font-title">{title}</p>
                <p className="font-normal">{subtitle}</p>
            </div>

            <div className="w-full">
                <div className="w-full relative">
                    {overflows && (
                    <div className="block">
                        {isScrolledRight && (
                        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white from-20% to-transparent" />
                        )}
                        {!isScrolledLeft && (
                        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white from-20% to-transparent" />
                        )}

                    </div>
                    )}
                    <div
                    className="no-scrollbar overflow-x-scroll snap-mandatory snap-x"
                    ref={scrollableRef}
                    onScroll={handleScroll}
                    >
                    {children}
                    </div>
                </div>
            </div>

        </section>
  )
}

export default LandingSectionCard