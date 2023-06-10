import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import handlers from "../../test/apiMock";
import { ajax, fetchApi } from "../api";

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
});
