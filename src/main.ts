import { number } from "zod";
import { install, fake } from "zod-schema-faker";

const schema = number();

// enable tree shaking
if (process.env.NODE_ENV === "development") {
  install();

  const data = fake(schema);

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = data.toString(); // => -2556.9
} else {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = "production";
}
