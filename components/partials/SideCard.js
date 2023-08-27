import { Base_URL } from "@/config";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SideCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  return (
    <div
      className="mb-3 pl-0 pl-md-4 pointer"
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
      <div className="row w-100 mx-auto side-card">
        <div className="col-7 m-0 p-0">
          <img
            src={
              post?.image
                ? `${Base_URL}public/posts/${post?.image}`
                : `/assets/images/placeholder.jpg`
            }
            className="side-card-img"
            alt="..."
          />
        </div>
        <div className="col-5 m-0 p-0 pl-3 pt-2">
          <p className="text-red fs-14 fw-700">{post?.categoryId?.name}</p>
          <h5 className={`fs-13 fw-700 ${isHovered && "text-red"}`}>
            {post?.title}
          </h5>
          <p className="fs-13 fw-500 font-secondary">
            by{" "}
            <span className={`${isHovered && "text-red"}`}>
              {post?.userId?.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideCard;
