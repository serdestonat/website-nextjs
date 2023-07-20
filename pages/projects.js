import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "@next/font/google";
import Layout from "@/components/Layout";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

const projects = () => {
  return (
    <>
      <Layout>
        <main className={workSans.className}>
          <Head>
            <title>Projects</title>
          </Head>
          <div class="container">
            <Image
              src="/greyprojects.png"
              alt="tld"
              height={864}
              width={1536}
            ></Image>

            <div className="projects">
              <Link href="/gamedev">
                <button class="btn one">Game Development</button>
              </Link>
              <Link href="/worldbuild">
                <button class="btn two">World Building</button>
              </Link>
              <Link href="/storytell">
                <button class="btn three">Storytelling</button>
              </Link>
              <Link href="/care">
                <button class="btn four">Taking Care Of Our World</button>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default projects;
