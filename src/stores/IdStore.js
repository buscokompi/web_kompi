import { defineStore } from "pinia";

export const IdStore = defineStore({
  id: "idstore",
  state: () => {
    return {
      id: ""
    };
  },
  actions: {
    setId(id) {
      this._id = id;
    },
    getId() {
      return this.id;
    }
  }
});
