import { rest } from "msw";
import { getByMatch } from "./service";

export const handlers = [
  rest.get("/search", (req, res, ctx) => {
    const filter = req.url.searchParams.get("filter");

    return res(ctx.json(getByMatch(filter)));
  }),
];
