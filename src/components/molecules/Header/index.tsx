import Icon from "@/components/icons/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
   <header className=" xl:bg-transparent fixed z-30 w-full flex items-center px-16 xl:px-0 h-[90px] ">
    <div className="container mx-auto ">
    <div className="flex flex-col lg:flex-row justify-between items-center">
    <Link href={'/'}>
    <Image src={'/logo.png'}
    width={220}
    height={48}
    alt=""
    priority={true}/>
    </Link>
    <div className="flex gap-3 items-center">
      <Link href={'#'}><i className="cursor-pointer"><Icon name="youtubeIcon" color="#fff" fontSize="20px"/></i></Link>
      <i className="cursor-pointer"><Icon name="AxeIcon" color="#fff"/></i>
      <Link href={'https://www.facebook.com/profile.php?id=61564675637480'}><i className="cursor-pointer"><Icon name="faceBookicon" color="#fff"/></i></Link>
      <i className="cursor-pointer"><Icon name="linkedInIcon" color="#fff"/></i>
      <i className="cursor-pointer"><Icon name="instaIcon" color="#fff"/></i>
    </div>
    </div>
    </div>
   </header>
  );
};

export default Header;

// backdrop-blur-sm xl:backdrop-blur-0