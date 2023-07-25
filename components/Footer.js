import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Newsletter</h3>
        <Link href="https://www.thelongdark.com/news/" className="link-footer">
          <div className="flex-container">
            <Image src="/devdiary.png" width={15} height={15}></Image>
            <span> Dev Diary</span>
          </div>
        </Link>
        <Link
          href="https://hinterlandforums.com/forums/"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/forum.png" width={15} height={15}></Image>
            <span> Forums</span>
          </div>
        </Link>
        <Link href="/copyright" className="link-footer">
          <div className="flex-container">
            <Image src="/copyright-logo.png" width={15} height={15}></Image>
            <span> Copyrights</span>
          </div>
        </Link>
      </div>
      <div>
        <h3>Community</h3>
        <Link
          href="https://www.reddit.com/r/thelongdark/"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/reddit.png" width={15} height={15}></Image>
            <span> Reddit</span>
          </div>
        </Link>
        <Link
          href="https://www.quora.com/topic/The-Long-Dark-1?q=the%20long%20dark"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/quora.png" width={15} height={15}></Image>
            <span> Quora</span>
          </div>
        </Link>
      </div>
      <div>
        <h3>Reach Us</h3>
        <Link href="/location" className="link-footer">
          <div className="flex-container">
            <Image src="/location.png" width={15} height={19}></Image>
            <span> Location</span>
          </div>
        </Link>
        <Link href="/contactform" className="link-footer">
          <div className="flex-container">
            <Image src="/mail.png" width={15} height={15}></Image>
            <span> E-Mail</span>
          </div>
        </Link>
        <Link
          href="https://hinterlandgames.com/contact-us"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/phone.png" width={15} height={15}></Image>
            <span> Phone</span>
          </div>
        </Link>
      </div>
      <div>
        <h3>Social Media</h3>
        <Link
          href="https://www.facebook.com/HinterlandGames/"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/face.png" width={15} height={15}></Image>
            <span> Facebook</span>
          </div>
        </Link>
        <Link
          href="https://twitter.com/HinterlandGames"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/twitter.png" width={15} height={15}></Image>
            <span> Twitter</span>
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/hinterlandgames/"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/instagram.png" width={15} height={15}></Image>
            <span> Instagram</span>
          </div>
        </Link>
        <Link
          href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=the%20long%20dark&eq=the%20long%20dark&etslf=8996"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/pinterest.png" width={15} height={15}></Image>
            <span> Pinterest</span>
          </div>
        </Link>
        <Link
          href="https://www.threads.net/@hinterlandgames"
          className="link-footer"
        >
          <div className="flex-container">
            <Image src="/threads.png" width={15} height={15}></Image>
            <span> Threads</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
