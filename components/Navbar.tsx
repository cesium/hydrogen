import Image from "next/image";

import logo from '@/public/cesium.png'
import Link from "next/link";

const navbar = [
    "HOME",
    "TEAM",
    "LOGS",
    "EVENTS",
    "ABOUT US",
]

export default function Navbar(){
    return(
        <div className="flex items-center justify-between px-16">
            <Image
             src={logo}
             alt=""
             width={150}
             height={200}
             priority
             unoptimized/>
            <div className="flex items-center justify-between w-[50%]">
                {navbar.map((title) => 
                    <Link key ={title} className="text-black text-sm hover:text-cesium-orange pb-4 border-b-2 border-transparent hover:border-cesium-orange" href="/">
                        {title}
                    </Link>
                )}
            </div>

            <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        </div>
    );
}