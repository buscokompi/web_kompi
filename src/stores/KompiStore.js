import { defineStore } from "pinia";

export const KompiStore = defineStore({
  id: "kompistore",
  state: () => ({
    data: {
      id: "",
      email: ""
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

    // GETTERS
    getId() {
      return this.data.id;
    },
    getEmail() {
      return this.data.email;
    }

  }
});
