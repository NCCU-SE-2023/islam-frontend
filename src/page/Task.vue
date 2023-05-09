<template>
  <div>
    <v-card class="pa-4 mb-4" :loading="loading" :disabled="loading">
      <v-card-title>Tasks</v-card-title>
      <v-card-text>
        <v-list>
          <v-divider />
          <template v-for="task in tasks" :key="task.task_id">
            <v-list-item>
              {{ task }}
            </v-list-item>
            <v-divider />
          </template>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card
      class="pa-4"
      tag="form"
      @submit.prevent="handleCreate"
      :loading="loading"
      :disabled="loading"
    >
      <v-card-title>Create Task</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-select
              label="Type"
              :items="[
                'BASIC',
                'FOLLOWERS',
                'FOLLOWING',
                'LIKES',
                'COMMENTS',
                'TAG_ME',
                'I_TAG',
                'TEST',
              ]"
              v-model="createTask.type"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Account"
              v-model="createTask.task_detail.account"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Password"
              type="password"
              v-model="createTask.task_detail.password"
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-care-actions>
        <v-btn variant="elevated" color="primary" @click="handleCreate">
          Create
        </v-btn>
      </v-care-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useUserStore } from "../store/user";
import { fetchApi } from "../utils/api";

const user = useUserStore();

const loading = ref(false);
const createTask = reactive<TaskRequest>({
  type: "BASIC",
  task_detail: {
    account: "ig_account",
    password: "ig_password",
  },
});
const tasks = ref<Task[]>([]);

const init = async () => {
  loading.value = true;
  const response = await fetchApi("/islam/task", "get", {
    headers: {
      user_id: user.userId,
    },
  });
  loading.value = false;
  tasks.value = response.data.tasks;
};

const handleCreate = async () => {
  loading.value = true;
  const response = await fetchApi("/islam/task", "post", {
    data: {
      task_info: createTask,
    },
    headers: {
      user_id: user.userId,
    },
  });
  loading.value = false;
  init();
};

onMounted(() => {
  init();
});
</script>
