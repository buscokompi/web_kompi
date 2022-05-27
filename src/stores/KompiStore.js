import { defineStore } from "pinia";

export const KompiStore = defineStore({
  id: "kompistore",
  state: () => ({
    data: {
      id: "",
      email: "",
      specie: ""
    }
  }),
  actions: {
    // SETTERS
    setId(id) {
      this.data.id = id;
    },
    setEmail(email) {
      this.data.email = email;
    },
    setSpecie(specie) {
      this.data.specie = specie;
    },
    // GETTERS
    getId() {
      return this.data.id;
    },
    getEmail() {
      return this.data.email;
    },
    getSpecie() {
      return this.data.specie;
    }
  }
});
