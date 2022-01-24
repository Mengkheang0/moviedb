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
var __reExport = (target, module3, desc) => {
  if (module3 && typeof module3 === "object" || typeof module3 === "function") {
    for (let key of __getOwnPropNames(module3))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module3[key], enumerable: !(desc = __getOwnPropDesc(module3, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module3) => {
  return __reExport(__markAsModule(__defProp(module3 != null ? __create(__getProtoOf(module3)) : {}, "default", module3 && module3.__esModule && "default" in module3 ? { get: () => module3.default, enumerable: true } : { value: module3, enumerable: true })), module3);
};
__export(exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
var module2 = __toModule(require("../entries/pages/index.svelte.js"));
const entry = "pages/index.svelte-cc2c6183.js";
const js = ["pages/index.svelte-cc2c6183.js", "chunks/vendor-1dddfd70.js", "chunks/MovieCard-5a48696f.js", "chunks/singletons-a6a7384f.js"];
const css = ["assets/pages/index.svelte-43f6c363.css", "assets/global-348e8a74.css", "assets/MovieCard-e964d074.css"];
