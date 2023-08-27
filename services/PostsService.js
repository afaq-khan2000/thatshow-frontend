import GenericService from "./GenericService";
class PostsService extends GenericService {
  constructor() {
    super();
  }
  createPost = ({
    title,
    metaTitle,
    metaDescription,
    categoryId,
    // subCategoryId,
    content,
    image,
  }) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("categoryId", categoryId);
      // formData.append("subCategoryId", subCategoryId);
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);
      formData.append("content", content);

      this.post("/api/posts", formData)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getAllPosts = () =>
    new Promise((resolve, reject) => {
      this.get("/api/posts")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getPostsByCategoryName = (categoryName) =>
    new Promise((resolve, reject) => {
      this.get("/api/posts/by-category-name/" + categoryName)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getPostsByClicks = () =>
    new Promise((resolve, reject) => {
      this.get("/api/posts/by-clicks")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getSinglePost = (_id) =>
    new Promise((resolve, reject) => {
      this.get("/api/posts/" + _id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  deletePost = (_id) =>
    new Promise((resolve, reject) => {
      this.delete("/api/posts/" + _id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  updatePost = (
    id,
    { title, metaTitle, metaDescription, categoryId, content }
  ) =>
    new Promise((resolve, reject) => {
      this.put("/api/posts/" + id, {
        title,
        metaTitle,
        metaDescription,
        categoryId,
        // subCategoryId,
        content,
      })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  clickPost = (id) =>
    new Promise((resolve, reject) => {
      this.post("/api/posts/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

let postService = new PostsService();
export default postService;
