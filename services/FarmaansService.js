import GenericService from "./GenericService";
class FarmaansService extends GenericService {
  constructor() {
    super();
  }

  createFarmaan = ({ title, farmaan }) =>
    new Promise((resolve, reject) => {
      this.post("/api/farmaans", { title, farmaan })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  getFarmaans = () =>
    new Promise((resolve, reject) => {
      this.get("/api/farmaans")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getFarmaan = (id) =>
    new Promise((resolve, reject) => {
      this.get("/api/farmaans/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  updateFarmaan = (id, { title, farmaan }) =>
    new Promise((resolve, reject) => {
      this.put("/api/farmaans/" + id, { title, farmaan })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  deleteFarmaan = (id) =>
    new Promise((resolve, reject) => {
      this.delete("/api/farmaans/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

let farmaanService = new FarmaansService();
export default farmaanService;
