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
  default: () => _layout
});
var import_index_310c2c62 = __toModule(require("../../chunks/index-310c2c62.js"));
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');.svelte-2cpbay{font-family:'Comfortaa', cursive;font-weight:bold}nav.svelte-2cpbay{display:flex;min-height:1vh;align-items:center;justify-content:center}a.svelte-2cpbay{font-size:2rem;font-family:'Poppins', sans-serif;margin-bottom:2rem;color:black;text-decoration:none}",
  map: null
};
const Nav = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-2cpbay"}"><a href="${"/"}" class="${"svelte-2cpbay"}">Movie Search Engine</a>
</nav>`;
});
const _layout = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie Database</title>`, ""}`, ""}


${(0, import_index_310c2c62.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}

`;
});
