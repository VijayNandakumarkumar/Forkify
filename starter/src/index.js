import axios from 'axios';
async function getResults(query) {
    const key = 'ecfbb1ee69923b9983ebae76f345a829';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const ret = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(ret.data.recipes);
}
getResults('pizza');