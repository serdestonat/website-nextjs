import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Layout from "@/components/Layout";

const location = () => {
  const address = "375 Water St Suite 605, Vancouver, BC V6B 5C6, Canada";
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/hatchet.jpg" />
          <title>Location</title>
        </Head>
        <div className="main">
          <div className="location">
            <Image src="/location.png" width={17} height={25}></Image>
            <span> OUR LOCATION</span>
            <p> 375 Water St Suite 605,</p>
            <p> Vancouver, BC V6B 5C6, Canada</p>
            <p> 1st Floor</p>
          </div>
          <div className="mapitself">
            <span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4472.725918075703!2d-123.11324124000724!3d49.28565822847058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719454e663b3%3A0x733ba682ff7126ce!2sHinterland!5e0!3m2!1str!2str!4v1689753455481!5m2!1str!2str"
                width={800}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default location;
