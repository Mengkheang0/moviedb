import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index-310c2c62.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');.svelte-1c076oo{font-family:'Poppins', sans-serif}h1.svelte-1c076oo{padding:1rem 0rem 2rem}p.svelte-1c076oo{padding:1rem 0rem}.movie-details.svelte-1c076oo{margin:2rem 20%}span.svelte-1c076oo{font-weight:bold}.img-container.svelte-1c076oo{width:100%}img.svelte-1c076oo{width:100%;border-radius:1rem}",
  map: null
};
async function load({ fetch, params }) {
  const apikey = "544e866552b4596a5a1ffb38e0115b9f";
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apikey}&language=en-US`);
  const movieDetail = await res.json();
  if (res.ok) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-1c076oo"}"><div class="${"img-container svelte-1c076oo"}"><img${add_attribute("src", "https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path, 0)}${add_attribute("alt", movieDetail.title, 0)} class="${"svelte-1c076oo"}"></div>
    <div class="${"txt-container svelte-1c076oo"}"><h1 class="${"svelte-1c076oo"}">${escape(movieDetail.title)}</h1>
        <p class="${"overview svelte-1c076oo"}">${escape(movieDetail.overview)}</p>
        <p class="${"svelte-1c076oo"}"><span class="${"svelte-1c076oo"}">Release date: </span>
            ${escape(movieDetail.release_date)} <br class="${"svelte-1c076oo"}">
            <span class="${"svelte-1c076oo"}">Budget: </span>
            ${escape(movieDetail.budget)} <br class="${"svelte-1c076oo"}">
            <span class="${"svelte-1c076oo"}">Rating: </span>
            ${escape(movieDetail.vote_average)} <br class="${"svelte-1c076oo"}">
            <span class="${"svelte-1c076oo"}">Runtime: </span>
            ${escape(movieDetail.runtime)}mins <br class="${"svelte-1c076oo"}"></p></div>
</div>`;
});
export { U5Bidu5D as default, load };
