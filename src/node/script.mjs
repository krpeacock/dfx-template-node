import { hello } from "./actor.mjs";

hello.greet("kyle").then((result) => {
  console.log(result);
});
