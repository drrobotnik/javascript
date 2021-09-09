const createEntry = (result) => {
    const element = document.createElement('div');
    
    element.innerHTML = 
    `
    <h2>${result.title}</h2>
    `;

return element;
};

document.addEventListener("DOMContentLoaded", async (event) => {
    console.log('DOM is ready.');

    const app = document.getElementById('app');

    const response = await fetch('/3/discover/movie?sort_by=popularity.desc');

    const json = await response.json();

    console.log(json);



    json.results.forEach((result) => {


        app.appendChild(createEntry(result));
    });
});