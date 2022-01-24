import { c as create_ssr_component, a as each, v as validate_component } from "../../../chunks/index-310c2c62.js";
import { M as MovieCard } from "../../../chunks/MovieCard-2ed6d18e.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movies.svelte-kru9je{margin-top:2rem;font-family:'Poppins',sans-serif;font-weight:bold;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
async function load({ fetch, params }) {
  const apikey = "544e866552b4596a5a1ffb38e0115b9f";
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${params.id}&page=1&include_adult=false`);
  const movieDetail = await res.json();
  console.log(movieDetail);
  if (res.ok) {
    return {
      props: { searchMovie: movieDetail.results }
    };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchMovie } = $$props;
  if ($$props.searchMovie === void 0 && $$bindings.searchMovie && searchMovie !== void 0)
    $$bindings.searchMovie(searchMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-kru9je"}">${each(searchMovie, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
export { U5Bidu5D as default, load };
