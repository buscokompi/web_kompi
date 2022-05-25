import { defineStore } from "pinia";

export const testStore = defineStore({
  id: "teststore",
  state: () => ({
    obj: {
      AnimalId: "",
      userEmail: ""
    }
  }),
  actions: {
    setObj(id, email) {
      this.obj.AnimalId = id;
      this.obj.userEmail = email;
    }
  }
});
