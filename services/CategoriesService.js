import GenericService from "./GenericService";
class CategoriesService extends GenericService {
    constructor() {
        super();
    }

    getCategories = () => new Promise((resolve, reject) => {
        this.get("/api/categories").then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    getCategory = (id) => new Promise((resolve, reject) => {
        this.get("/api/categories/" + id).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });

    deleteCategory = (id) => new Promise((resolve, reject) => {
        this.delete("/api/categories/" + id).then((data) => { resolve(data); }).catch((err) => { reject(err) })
    });
}

let categoryService = new CategoriesService();
export default categoryService;