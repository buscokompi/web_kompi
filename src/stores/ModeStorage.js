import { defineStore } from "pinia";

export const ModeStorage = defineStore({
  id: "modestorage",
  state: () => ({
    darkMode: false
  }),
  actions: {
    setMode(mode) {
      this.darkMode = mode;
    }
  }
});
