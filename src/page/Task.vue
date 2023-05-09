<template>
  <div>
    <v-card class="pa-4 mb-4" :loading="loading" :disabled="loading">
      <v-card-title>Tasks</v-card-title>
      <v-card-text>
        <v-list>
          <v-divider />
          <template v-for="task in tasks" :key="task.task_id">
            <v-list-item>
              <v-list-item-title>
                <span>{{ task.task_id.slice(0, 6) }}</span>
              </v-list-item-title>
              <template v-slot:prepend>
                <v-chip label color="info" class="me-2">
                  {{ task.type }}
                </v-chip>
              </template>
              <template v-slot:append>
                <v-chip label :color="getStatusColor(task.status)" class="me-2">
                  {{ task.status }}
                </v-chip>
                {{ getDate(new Date(task.update_at * 1000).toISOString()) }}
              </template>
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
      <v-card-actions>
        <v-btn variant="elevated" color="primary" @click="handleCreate">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue";
import { useUserStore } from "../store/user";
import { fetchApi } from "../utils/api";
import useDate from "../hooks/useDate";

const user = useUserStore();
const { getDate } = useDate();

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

const getStatusColor = computed(() => {
  return (status: TaskStatus) => {
    switch(status) {
      case "ERROR":
        return "error";
      case "FINISHED":
        return "success";
      case "NEW":
        return "warning";
      case "RUNNING":
        return "info"
    }
  };
});

onMounted(() => {
  init();
});
</script>
