// worker.ts
import handle from "hono-remix-adapter/cloudflare-workers";
import * as build from "./build/server";
import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.json({ message: "Hello Remix!" });
});

export default handle(build, app);
