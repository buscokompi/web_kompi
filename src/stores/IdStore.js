import { defineStore } from "pinia";

export const IdStore = defineStore({
  id: "idstore",
  state: () => ({
    _id: ""
  }),
  actions: {
    setId(id, nombre) {
      this._id = id;
    }
  }
});
