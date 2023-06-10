import { describe, test, expect } from "vitest";

describe("RegisterCard test", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../RegisterCard.vue");
    expect(cmp).toBeDefined();
  });
});
