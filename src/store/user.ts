import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { fetchApi } from "../utils/api";

export const useUserStore = defineStore("user", () => {
  const account = ref("");
  const userId = ref("");

  /**
   * user login
   * @returns Promise object
   */
  const login = async () => {
    const response = await fetchApi("/islam/user/login", "GET");
    if (response.status !== 200) {
      const { error_code, error_message } = response.data as ErrorResponse;
      // error sections
      return;
    }
    const { user_id } = response.data as UserResponse;
    userId.value = user_id;
  };

  /**
   * user register
   * @returns Promise object
   */
  const register = async () => {
    const response = await fetchApi("/islam/user/register", "POST");
    if (response.status !== 200) {
      const { error_code, error_message } = response.data as ErrorResponse;
      // error sections
      return;
    }
    const { user_id } = response.data as UserResponse;
    userId.value = user_id;
  };

  return { account, userId, login, register };
});
