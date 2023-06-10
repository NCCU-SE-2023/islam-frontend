import {
  describe,
  test,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../user";
import { setupServer } from "msw/node";

describe("User store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("test user login", async () => {
    const user = useUserStore();
    await user.login("abc@gmail.com", "123456")
    expect(user.userId).toBe("user-id-123-456")
  });

  test("test user register", async () => {
    const user = useUserStore();
    await user.register("abc@gmail.com", "123456")
    expect(user.userId).toBe("user-id-123-456")
  });
});
