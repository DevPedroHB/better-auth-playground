import { toast } from "sonner";

type ActionErrorHandler = {
  serverError?: string | undefined;
  validationErrors?:
    | {
        formErrors: string[];
        fieldErrors: Record<string, string[] | undefined>;
      }
    | undefined;
} & {
  thrownError?: Error;
};

/**
 * Use a hook to handle errors from a safe action.
 *
 * @param {ActionErrorHandler} error - The error object returned from a safe action.
 * @returns {string[]} - An array of error messages.
 */
export function onActionErrorHandler(error: ActionErrorHandler) {
  const errors: string[] = [];

  if (error.serverError) {
    errors.push(error.serverError);
  }

  if (error.validationErrors) {
    const { formErrors, fieldErrors } = error.validationErrors;

    errors.push(...formErrors);

    for (const fieldError of Object.values(fieldErrors)) {
      if (fieldError) {
        errors.push(...fieldError);
      }
    }
  }

  if (error.thrownError) {
    errors.push(error.thrownError.message);
  }

  for (const error of errors) {
    toast.error(error);
  }

  return {
    errors,
  };
}
