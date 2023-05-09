type ErrorCode =
  | "DUPLICATE_REGISTRATION"
  | "INTERNAL_SERVR_ERROR"
  | "USER_NOT_FOUND"
  | "PASSWORD_NOT_MATCH"
  | "INTERNAL_SERVR_ERROR"
  | "TASK_NOT_FOUND"
  | "UNAUTHORIZED_ERROR";

interface ErrorResponse {
  error_code: ErrorCode;
  error_message: string;
}

interface UserResponse {
  user_id: string;
}
