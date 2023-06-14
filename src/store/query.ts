import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { fetchApi } from "../utils/api";

export const useQueryStore = defineStore("query", () => {
    const allAccounts = ref([]);
    const specAccounts = ref([]);

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
            const { error_code, error_message } = response.data as ErrorResponse;
            // error sections
            return;
        };
        const user_accounts = response.data;
        allAccounts.value = user_accounts;
    };

    return { allAccounts, specAccounts, queryAll, querySpec };
})
