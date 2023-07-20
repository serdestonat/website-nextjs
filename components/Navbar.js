import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/hinterland.png" height={90} width={180}></Image>
        </Link>
      </div>
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="/about" className="link">
        About Us
      </Link>
      <Link href="/projects" className="link">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
