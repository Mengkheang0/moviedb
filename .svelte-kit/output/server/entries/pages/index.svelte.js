import { c as create_ssr_component, a as each, v as validate_component, e as escape, n as null_to_empty, b as add_attribute } from "../../chunks/index-310c2c62.js";
import { M as MovieCard } from "../../chunks/MovieCard-2ed6d18e.js";
/* empty css                            */var PopularMovie_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');.svelte-vec09k{font-family:'Poppins', sans-serif}h3.svelte-vec09k{padding:0 1rem}.popular-movies.svelte-vec09k{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies } = $$props;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-vec09k"}">Popular Movie</h3>
<div class="${"popular-movies svelte-vec09k"}">
    ${each(movies, (movie) => {
    return ` 
        ${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}


</div>`;
});
var SearchMovie_svelte_svelte_type_style_lang = "";
const css = {
  code: "label.svelte-11kbzdb{font-family:'Poppins', sans-serif;font-weight:bold;font-size:0.8rem;top:50%;left:0;position:absolute;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}.search.svelte-11kbzdb{position:relative;width:30%;margin:1rem}button.svelte-11kbzdb{font-size:0.7rem;padding:0rem 1rem;background-color:rgb(96, 110, 201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(50%, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-11kbzdb{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;color:rgb(255, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63, 63, 63);border-radius:10px;padding:0.8rem}input.selected.svelte-11kbzdb{background:rgb(27, 25, 25)}",
  map: null
};
const SearchMovie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-11kbzdb"}">${`<label for="${"search_movie"}" class="${"svelte-11kbzdb"}">Search Movie</label>`}

	<input type="${"text"}" name="${"search_movie"}" class="${escape(null_to_empty("")) + " svelte-11kbzdb"}"${add_attribute("value", inputValue, 0)}>
    ${``}
</form>`;
});
async function load({ fetch }) {
  const apikey = "544e866552b4596a5a1ffb38e0115b9f";
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  '"544e866552b4596a5a1ffb38e0115b9f";';
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `




<section>${validate_component(SearchMovie, "SearchMovie").$$render($$result, {}, {}, {})}
    ${validate_component(PopularMovie, "PopularMovie").$$render($$result, { movies: popular }, {}, {})}</section>`;
});
export { Routes as default, load };
