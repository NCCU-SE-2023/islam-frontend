import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchApi } from "../utils/api";

export const useQueryStore = defineStore("query", () => {
    const allAccounts = ref<string[]>([]);
    const specAccounts = ref<string[]>([]);

    /**
     * query
     * @returns Promise object
     */
    const querySpec = async (result_num: number, accounts: string[]) => {
        result_num = 10;
        const response = await fetchApi("/islam/query", "POST", {
            data: {
                result_num,
                accounts,
            }
        });
        if (response.status !== 201) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { error_code, error_message } = response.data as ErrorResponse;
            // error sections
            return;
        };
        const user_accounts = response.data;
        specAccounts.value = user_accounts;
    };

    const queryAll = async (user_account: string) => {
        const response = await fetchApi("/islam/query-followers", "POST", {
            data: {
                user_account,
            }
        });
        if (response.status !== 201) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { error_code, error_message } = response.data as ErrorResponse;
            // error sections
            return;
        };
        const user_accounts = response.data;
        allAccounts.value = user_accounts;
    };

    return { allAccounts, specAccounts, queryAll, querySpec };
})
