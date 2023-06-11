import { describe, test, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import vuetify from "../../plugins/vuetify";
import router from "../../router";
import LoginCard from "../LoginCard.vue";

describe("LoginCard test", () => {
  beforeEach(async () => {
    setActivePinia(createPinia());
  });

  test("normal imports as expected", async () => {
    const cmp = await import("../LoginCard.vue");
    expect(cmp).toBeDefined();
  });

  test("testing account input", async () => {
    const wrapper = mount(LoginCard, {
      global: {
        plugins: [vuetify, router],
      },
    });

    const accountInput = wrapper.get("#account");
    await accountInput.setValue("my@mail.com");
    expect((accountInput.element as HTMLInputElement).value).toBe(
      "my@mail.com"
    );
  });

  test("testing password input", async () => {
    const wrapper = mount(LoginCard, {
      global: {
        plugins: [vuetify, router],
      },
    });

    const passwordInput = wrapper.get("#password");
    await passwordInput.setValue("123456");
    expect((passwordInput.element as HTMLInputElement).value).toBe("123456");
  });

  test("testing error text display", async () => {
    const wrapper = mount(LoginCard, {
      global: {
        plugins: [vuetify, router],
      },
    });

    const passwordInput = wrapper.get("#password");
    await passwordInput.setValue("123456");
    await wrapper.find("form").trigger("submit.prevent");
    const passwordErrorText = wrapper
      .get("#password-messages")
      .get(".v-messages__message");
    expect(passwordErrorText.text()).toEqual(
      "Password must be greater than 8 characters"
    );
  });

  test("testing form submit event", async () => {
    const wrapper = mount(LoginCard, {
      global: {
        plugins: [vuetify, router],
      },
    });

    const accountInput = wrapper.get("#account");
    await accountInput.setValue("abc@gmail.com");
    const passwordInput = wrapper.get("#password");
    await passwordInput.setValue("12345678");
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted()).toHaveProperty("submit");
  });
});
