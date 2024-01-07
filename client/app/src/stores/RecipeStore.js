import axios from "axios";
import { defineStore } from "pinia";

export const useRecipestore = defineStore({
  id: "recipe",
  state: () => ({
    /** @type {string[]} */
    items: [],
    RecipeList: [],
    recommendedRecipes: [],
  }),
  getters: {
    getItems: () => {
      return this.items;
    },
  },
  actions: {
    async updateAllRecipes() {
      try {
        const res = await axios.get("/api/allRecipes");
        this.items = res.data.data;
      } catch (ex) {
        console.log(ex);
      }
    },

    async getRecommendedRecipes(igredientsList) {
      const json = {
        ingredients: igredientsList.map((ingredient) => ingredient.name),
      };

      try {
        var res = await axios.post(
          "/api/findRecipe",
          json
        );
        this.recommendedRecipes = res.data.data.recipes;
      } catch (ex) {
        console.log(ex);
      }
    },

    getHighlightedItems() {
      return this.items.filter((item) => item.highlighted === true);
    },
  },
});
