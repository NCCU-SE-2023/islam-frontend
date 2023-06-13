import { defineStore } from "pinia";
import { compited, ref } from "vue";
import { fetchApi } from "../utils/api";

export const useQueryStore = defineStore("query", () => {
    const allAccounts = ref([]);
    const specAccounts = ref([]);

    /**
     * query
     * @returns Promise object
     */
    const querySpec = async (result_num: number, accounts: string[]) => {
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
        const { user_accounts } = response.body;
        allAccounts.value = accounts;
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
        const { user_accounts } = response.body;
        specAccounts.value = accounts;
    };

    return { allAccounts, specAccounts, queryAll, querySpec };
})
