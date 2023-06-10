import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { ajax, fetchApi } from "../api";

describe("api interface test", () => {
  test("General ajax function test", async () => {
    const response = await ajax("/api", "GET");
    expect(JSON.stringify(response.data)).toBe(JSON.stringify({ version: "v1" }));
  });
});
