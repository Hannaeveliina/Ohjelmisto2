'use strict';

const form = document.getElementById('searchForm');
const results = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  if (!query) return;

  const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  results.innerHTML = '';

  data.result.forEach(jokeObj => {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = jokeObj.value;
    article.appendChild(p);
    results.appendChild(article);
  });
});
