import { describe, test, expect } from "vitest";
import { ajax } from "../api";

describe("api interface test", () => {
  test("General ajax function test", async () => {
    const response = await ajax("/api", "GET");
    expect(JSON.stringify(response.data)).toBe(
      JSON.stringify({ version: "v1" })
    );
  });
});
