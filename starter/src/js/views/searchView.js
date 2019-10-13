import { elements } from './base';
export const getInput = () => elements.searchInput.value;
const renderRecipe = recipe => {
    const markUp = `
    <li>
        <a class="results__link results__link--active" href="${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.imgage_url}" alt="${limitTitle(recipe.title)}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markUp);
}

const limitTitle = (title, limit = 17) => {
    if (title.length > limit) {
        const newTitle = [];
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

export const clearSearch = () => {
    elements.searchInput.value = "";
}
export const clearResultList = () => {
    elements.searchResList.innerHTML = "";
}

export const renderResult = (recipes) => {
    recipes.forEach(renderRecipe);
};