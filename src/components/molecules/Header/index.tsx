import Icon from "@/components/icons/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
   <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90x]">
    <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-center">
    <Link href={'/'}>
    <Image src={'/logo.png'}
    width={220}
    height={48}
    alt=""
    priority={true}/>
    </Link>
    <div className="flex gap-3">
      <i className="cursor-pointer"><Icon name="youtubeIcon" color="#fff" fontSize="20px"/></i>
      <i className="cursor-pointer"><Icon name="AxeIcon" color="#fff"/></i>
      <i className="cursor-pointer"><Icon name="faceBookicon" color="#fff"/></i>
      <i className="cursor-pointer"><Icon name="linkedInIcon" color="#fff"/></i>
      <i className="cursor-pointer"><Icon name="instaIcon" color="#fff"/></i>
    </div>
    </div>
    </div>
   </header>
  );
};

export default Header;
