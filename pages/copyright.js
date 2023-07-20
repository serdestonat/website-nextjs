import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Work_Sans } from "@next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

const copyright = () => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/hatchet.jpg" />
          <title>Copyrights</title>
        </Head>
        <div className="copyright-container">
          <Image src="/copyrights.png" height={864} width={1536}></Image>

          <div className="copyright">
            <Link href="https://hinterlandgames.com/">
              <button class="btn five">Hinterland Studio Inc.</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default copyright;
