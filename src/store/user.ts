import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchApi } from "../utils/api";

export const useUserStore = defineStore("user", () => {
  const account = ref("");
  const userId = ref("");

  /**
   * user login
   * @returns Promise object
   */
  const login = async (account: string, password: string) => {
    const response = await fetchApi("/islam/user/get", "POST", {
      data: {
        account,
        password,
      },
    });
    if (response.status !== 200) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { error_code, error_message } = response.data as ErrorResponse;
      // error sections
      return;
    }
    const { user_id } = response.headers;
    userId.value = user_id;
  };

  /**
   * user register
   * @returns Promise object
   */
  const register = async (account: string, password: string) => {
    const response = await fetchApi("/islam/user", "POST", {
      data: {
        account,
        password,
      },
    });
    if (response.status !== 200) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { error_code, error_message } = response.data as ErrorResponse;
      // error sections
      return;
    }
    const { user_id } = response.data as UserResponse;
    userId.value = user_id;
  };

  return { account, userId, login, register };
});
