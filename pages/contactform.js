import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import "@/styles/contact.module.css";

const contactform = () => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/hatchet.jpg" />
          <title>E-Mail</title>
        </Head>
      </Layout>
      <div className="contact">
        <div>
          <h1>Tell Us What's Wrong</h1>
          <p>Please Fill The Form Below</p>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default contactform;
