import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="transition items-center gap-x-2 hidden md:flex">
        <Image src={"/icons/logo.svg"} alt="logo" height={38} width={112} />
        {/* <p className="text-lg text-neutral-700 pb-1">Trello</p> */}
      </div>
    </Link>
  );
}

export default Logo;
