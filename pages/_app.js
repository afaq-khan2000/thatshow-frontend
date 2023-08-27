import categoryService from "@/services/CategoriesService";
import postService from "@/services/PostsService";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [allPosts, setAllPosts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then((posts) => {
      setAllPosts(posts);
    });
    categoryService.getCategories().then((categories) => {
      setAllCategories(categories);
    });
  }, []);

  return (
    <Component
      {...pageProps}
      allPosts={allPosts}
      allCategories={allCategories}
    />
  );
}
