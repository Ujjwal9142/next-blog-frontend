import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, date, excerpt, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            height={200}
            width={300}
            alt={title}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
