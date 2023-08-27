import { useRouter } from "next/router";
import React, { useState } from "react";

function Card({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  return (
    <div
      className="card pointer"
      // hover
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        router.push(`/post/${post?.slug}`);
      }}
    >
      <img
        src={
          post?.image
            ? `${Base_URL}public/posts/${post?.image}`
            : `/assets/images/placeholder.jpg`
        }
        className="card-image"
        alt="..."
      />
      <div className="card-body p-0 card-body-lg">
        <p className="text-red fs-16 fw-700 my-3">{post?.categoryId?.name}</p>
        <h5 className={`fs-44 fw-700 ${isHovered && "text-red"}`}>
          {post?.title}
        </h5>
        <p className="fs-16 fw-500 font-secondary">
          by{" "}
          <span className={`${isHovered && "text-red"}`}>
            {post?.userId?.name}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
