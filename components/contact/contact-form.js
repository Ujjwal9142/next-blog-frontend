import React, { useEffect, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "error" || requestStatus === "success") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendContactData = async (contactData) => {
    const res = await fetch(
      `https://next-blog-backend-production.up.railway.app/api/contact`,
      {
        method: "POST",
        body: contactData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const recievedData = await res.json();
    if (!res.ok) {
      throw new Error(recievedData.message || "Something went wrong.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");
    const data = JSON.stringify({
      name: nameRef.current.value,
      email: emailRef.current.value,
      content: contentRef.current.value,
    });

    try {
      await sendContactData(data);
      setRequestStatus("success");
      nameRef.current.value = "";
      emailRef.current.value = "";
      contentRef.current.value = "";
    } catch (err) {
      setRequestStatus("error");
      setRequestError(err.message);
    }
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError || "Something went wrong!",
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input id="text" type="name" ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea rows={5} id="message" ref={contentRef} />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification ? (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      ) : null}
    </section>
  );
};

export default ContactForm;
