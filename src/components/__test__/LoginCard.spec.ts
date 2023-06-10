import { describe, test, expect } from "vitest";

describe("LoginCard test", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../LoginCard.vue");
    expect(cmp).toBeDefined();
  });
});
