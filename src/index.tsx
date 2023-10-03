import { Elysia } from "elysia";
import { Layout } from "./components/layout";
import { LandingPage } from "./components/landing-page";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
  // type Setup passed to the rest of modules for inference
  .use(html())
  .use(staticPlugin());
app
  .get("/", () => (
    <Layout>
      <LandingPage />
    </Layout>
  ))
  .get("/styles.css", () => Bun.file("./src/output.css"))
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
