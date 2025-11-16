const form = document.querySelector("#searchForm");
const query = document.querySelector("#query");
const results = document.querySelector("#results");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const search = query.value.trim();
    if (!search) return;

    results.innerHTML = "";

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
    const data = await response.json();

    data.forEach(item => {
        const tvShow = item.show;

        const article = document.createElement("article");

        const h2 = document.createElement("h2");
        h2.textContent = tvShow.name;

        const a = document.createElement("a");
        a.href = tvShow.url;
        a.target = "_blank";
        a.textContent = "Show details";

        const img = document.createElement("img");
        img.src = tvShow.image?.medium || "";
        img.alt = tvShow.name;

        const summary = document.createElement("div");
        summary.innerHTML = tvShow.summary || "No summary available.";

        article.append(h2, a, img, summary);
        results.appendChild(article);
    });
});
