'use client';     //check when making the components as clienr components

import Image from "next/image";
import { useRouter } from "next/navigation";    //why not using next/router
const Logo = () => {
    const router = useRouter();
    return (
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src ="/images/logo.png" 
        />
    );
}

export default Logo;