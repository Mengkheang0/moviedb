var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  M: () => MovieCard
});
var import_index_310c2c62 = __toModule(require("./index-310c2c62.js"));
var MovieCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-tg1ayl{width:100%;height:30vh;object-fit:cover;border-radius:1rem;border-bottom:1rem}h2.svelte-tg1ayl{font-size:.9rem}.description.svelte-tg1ayl{height:5vh}p.svelte-tg1ayl{font-size:0.8rem}.movie-card.svelte-tg1ayl{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-tg1ayl"}">
    
    <a sveltekit:prefetch sveltekit:noscroll${(0, import_index_310c2c62.b)("href", "/movie/" + movie.id, 0)}><img${(0, import_index_310c2c62.b)("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${(0, import_index_310c2c62.b)("alt", movie.title, 0)} class="${"svelte-tg1ayl"}"></a>
    <div class="${"description svelte-tg1ayl"}"><h2 class="${"svelte-tg1ayl"}">${(0, import_index_310c2c62.e)(movie.title)}</h2>
        <p class="${"svelte-tg1ayl"}">${(0, import_index_310c2c62.e)(movie.release_date)}</p></div>
</div>`;
});
