import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";

const contactOpen = "<Contact />";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(contactData);
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.contact}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          <form onSubmit={handleOnsubmit}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              value={contactData.name}
              onChange={handleOnchange}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              value={contactData.email}
              onChange={handleOnchange}
            />
            <textarea
              name='message'
              cols={30}
              rows={5}
              placeholder='Your Message'
              required
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie
            options={defaultOptions}
            height='100%'
            width='100%'
            isStopped={false}
            isPaused={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
