'use strict';

const form = document.getElementById('searchForm');
const query = document.getElementById('query');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const search = query.value;

  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${search}`
  );

  const data = await response.json();

  console.log(data);
});




