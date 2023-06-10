import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import handlers from "../../__test__/apiMock.spec";
import ajax, { fetchApi } from "../api";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => {
  server.close();
});

describe("api interface test", () => {
  test("General ajax function test", async () => {
    const response = await ajax("/api", "GET");
    expect(JSON.stringify(response.data)).toBe(JSON.stringify({ version: "v1" }));
  });

  // test("Test login using fetchApi", async () => {
  //   await expect(async () => {
  //     const response = await fetchApi("/islam/user/get", "POST", {
  //       data: {
  //         account: "abc@gmail.com",
  //         password: "123456"
  //       }
  //     });

  //     return response.data
  //   })
  // })
});
