import { key, proxy } from '../config.js';
import axios from 'axios';
export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.image_url = res.data.recipe.image_url;
            this.pubisher = res.data.recipe.publisher;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            alert(error + this.id + proxy + key);
        }
    }

    calculateTiming() {
        // 15 minute for 3 ingredients.
        const time = ceil(this.ingredients.length / 3) * 15;
    }

    calculateServing() {
        const servings = 4
    }
}