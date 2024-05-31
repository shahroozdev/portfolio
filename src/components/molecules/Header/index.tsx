import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
   <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90x]">
    <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row">
    <Link href={'/'}/>
    <Image src={'/logo.png'}
    width={220}
    height={48}
    alt=""
    priority={true}/>
    </div>
    </div>
   </header>
  );
};

export default Header;
