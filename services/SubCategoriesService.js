import GenericService from "./GenericService";
class SubCategoriesService extends GenericService {
    constructor() {
        super();
    }

    createSubCategory = ({ name, image, parentCategoryId }) => new Promise((resolve, reject) => {
        this.post("/api/subCategories/", { name, image, parentCategoryId }).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });
    getSubCategories = () => new Promise((resolve, reject) => {
        this.get("/api/subCategories/").then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    getSubCategoriesByCategoryName = (categoryName) => new Promise((resolve, reject) => {
        this.get("/api/subCategories/by-category-name/" + categoryName).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    getSingleSubCategory = (id) => new Promise((resolve, reject) => {
        this.get("/api/subCategories/single/" + id).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });
    getSubCategoriesByCategory = (categoryId) => new Promise((resolve, reject) => {
        this.get("/api/subCategories/" + categoryId).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    updateSubCategory = (id, formData) => new Promise((resolve, reject) => {
        this.put("/api/subCategories/" + id, formData).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    deleteSubCategoriesByCategory = (parentCategoryId) => new Promise((resolve, reject) => {
        this.delete("/api/subCategories/byCategory/" + parentCategoryId).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });
}

let subCategoryService = new SubCategoriesService();
export default subCategoryService;