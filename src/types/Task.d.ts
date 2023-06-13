type TaskType =
  | "BASIC"
  | "FOLLOWERS"
  | "FOLLOWING"
  | "LIKES"
  | "COMMENTS"
  | "TAG_ME"
  | "I_TAG"
  | "FOLLOWING_AND_FOLLOWER"
  | "TEST";

type TaskStatus = "NEW" | "RUNNING" | "FINISHED" | "ERROR";

interface Task {
  create_at: number;
  create_user: string;
  error_msg: any;
  priority: number;
  retry_times: number;
  status: TaskStatus;
  task_detail: {
    account: string;
    password: string;
    target_ig_id: string;
  };
  task_id: string;
  type: TaskType;
  update_at: number;
}

interface TaskRequest {
  type: TaskType;
  task_detail: {
    account: string;
    password: string;
    target_ig_id: string;
  };
}
