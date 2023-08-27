import { useRouter } from "next/router";
import React, { useState } from "react";
import { Base_URL } from "@/config.js";

function SmallCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  return (
    <div
      className="card pointer"
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
        className="side-card-img"
        alt="..."
      />
      <div className="card-body p-0 card-body-sm">
        <p className="text-red fs-14 fw-700 my-2">{post?.categoryId?.name}</p>
        <h5 className={`fs-23 fw-700 ${isHovered && "text-red"}`}>
          {post?.title.slice(0, 38) + "..."}
        </h5>
        <p className="fs-14 fw-500 font-secondary">
          by{" "}
          <span className={`${isHovered && "text-red"}`}>
            {post?.userId?.name}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SmallCard;
