import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/Ujjwal.jpeg" height={300} width={300} />
      </div>
      <h1>Hi, I'm Ujjwal</h1>
      <p>
        I blog about web development especially frameworks like angular and
        react.
      </p>
    </section>
  );
};

export default Hero;
