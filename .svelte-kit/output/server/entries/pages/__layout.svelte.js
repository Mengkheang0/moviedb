import { c as create_ssr_component, v as validate_component } from "../../chunks/index-310c2c62.js";
/* empty css                            */var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');.svelte-2cpbay{font-family:'Comfortaa', cursive;font-weight:bold}nav.svelte-2cpbay{display:flex;min-height:1vh;align-items:center;justify-content:center}a.svelte-2cpbay{font-size:2rem;font-family:'Poppins', sans-serif;margin-bottom:2rem;color:black;text-decoration:none}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-2cpbay"}"><a href="${"/"}" class="${"svelte-2cpbay"}">Movie Search Engine</a>
</nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie Database</title>`, ""}`, ""}


${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}

`;
});
export { _layout as default };
