import { c as create_ssr_component, b as add_attribute, e as escape } from "./index-310c2c62.js";
var MovieCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-tg1ayl{width:100%;height:30vh;object-fit:cover;border-radius:1rem;border-bottom:1rem}h2.svelte-tg1ayl{font-size:.9rem}.description.svelte-tg1ayl{height:5vh}p.svelte-tg1ayl{font-size:0.8rem}.movie-card.svelte-tg1ayl{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-tg1ayl"}">
    
    <a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", "/movie/" + movie.id, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-tg1ayl"}"></a>
    <div class="${"description svelte-tg1ayl"}"><h2 class="${"svelte-tg1ayl"}">${escape(movie.title)}</h2>
        <p class="${"svelte-tg1ayl"}">${escape(movie.release_date)}</p></div>
</div>`;
});
export { MovieCard as M };
