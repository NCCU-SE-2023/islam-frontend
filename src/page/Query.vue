<template>
  <v-card
    class="pa-4 mb-4"
    tag="form"
    @submit.prevent="handleQueryAll"
  >
    <v-card-title>Query Account</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="user_account"
            label="user_account"
            hide-details
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card
    class="pa-4 mb-4"
    tag="form"
    @submit.prevent="handleQuerySpec(checkedKeys)"
  >
    <v-card-title>Follower and Following List</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-list dense>
            <v-list-item v-for="item in allAccounts" :key="item">
              <v-list-item-content class="d-flex align-center">
                <v-list-item-title>{{ item }}</v-list-item-title>
                <v-checkbox
                  v-model="checkedKeys"
                  :value="item"
                  @change="handleCheckboxChange(item)"
                ></v-checkbox>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        class="align-self-center"
        color="primary"
        style="width: 15vw; max-width: 150px"
        type="submit"
        >Submit</v-btn
      >
    </v-card-actions>
  </v-card>
  <v-card class="pa-4" tag="form">
    <v-card-title>Result List</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-list dense>
            <v-list-item v-for="item in specAccounts" :key="item">
              <v-list-item v-for="(value, key) in item" :key="key">
                <v-list-item-content class="d-flex align-center">
                  <v-list-item-title>
                    <a :href="`https://www.instagram.com/${key}`" target="_blank">{{ key }}</a>: {{ value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-snackbar v-model="snackbar" vertical>
    <div class="text-subtitle-1 pb-2">System alert</div>
    <p>The chosen account cannot over 5</p>
    <template v-slot:actions>
      <v-btn color="indigo" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useQueryStore } from "../store/query";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const query = useQueryStore();
const { queryAll, querySpec } = query;
const { allAccounts, specAccounts } = storeToRefs(query);
const user_account = ref("");
const checkedKeys = ref<string[]>([]);
const snackbar = ref(false);

const handleCheckboxChange = (key: string) => {
  console.log(checkedKeys.value);
  if (checkedKeys.value.includes(key)) {
    checkedKeys.value = checkedKeys.value.filter((k) => k !== key);
  } else {
    checkedKeys.value.push(key);
  }
};

const handleQueryAll = async () => {
  console.log(user_account.value);
  await queryAll(user_account.value)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const handleQuerySpec = async (checkedKeys: string[]) => {
  console.log(checkedKeys);
  if (checkedKeys.length > 5) {
    snackbar.value = true;
  } else {
    await querySpec(checkedKeys.length, checkedKeys)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};
</script>
