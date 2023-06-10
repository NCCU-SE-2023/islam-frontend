import { describe, test, expect } from "vitest";

describe("ThemeButton test", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../ThemeButton.vue");
    expect(cmp).toBeDefined();
  });
});
