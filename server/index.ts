// server/index.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.json({ foo: "bar" });
});

export default app;
