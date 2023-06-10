import { describe, test, expect } from "vitest";

describe("RelationMap test", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../RelationMap.vue");
    expect(cmp).toBeDefined();
  });
});
