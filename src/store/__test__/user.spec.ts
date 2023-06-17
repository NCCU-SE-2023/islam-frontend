import { describe, test, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../user";

describe("User store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("test user login", async () => {
    const user = useUserStore();
    await user.login("abc@gmail.com", "12345678");
    expect(user.userId).toBe("user-id-123-456");
  });

  test("test user register", async () => {
    const user = useUserStore();
    await user.register("abc@gmail.com", "12345678");
    expect(user.userId).toBe("user-id-123-456");
  });
});
