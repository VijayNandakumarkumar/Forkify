import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        const key = 'ecfbb1ee69923b9983ebae76f345a829';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const ret = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = ret.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}