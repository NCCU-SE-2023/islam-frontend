import { rest } from "msw";

export default [
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.json({
        version: "v1",
      })
    );
  }),
  rest.post("/api/v1/islam/user/get", async (req, res, ctx) => {
    const { account, password } = await req.json();

    if (account !== "abc@gmail.com") {
      return res(
        ctx.status(404),
        ctx.json({
          error_code: "USER_NOT_FOUND",
          error_message: `User ${account} not found`,
        })
      );
    } else if (account === "abc@gmail.com" && password !== "123456") {
      return res(
        ctx.status(404),
        ctx.json({
          error_code: "PASSWORD_NOT_MATCH",
          error_message: `Wrong password for user: ${account}`,
        })
      );
    }

    return res(
      ctx.set("user_id", "user-id-123-456"),
      ctx.json({
        user_id: "user-id-123-456",
      })
    );
  }),
  rest.post("/api/v1/islam/user", async (req, res, ctx) => {
    const { account, password } = await req.json();

    return res(
      ctx.json({
        user_id: "user-id-123-456",
      })
    );
  }),
];
