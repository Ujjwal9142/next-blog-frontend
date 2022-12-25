import Head from "next/head";
import React, { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="Description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
