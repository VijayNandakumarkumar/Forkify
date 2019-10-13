import axios from 'axios';
import { key, proxy } from '../config.js';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {

        try {
            const ret = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = ret.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}