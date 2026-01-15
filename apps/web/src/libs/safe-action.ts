import {
  createMiddleware,
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import z from "zod";
import { env } from "./env";

const loggingMiddleware = createMiddleware().define(
  async ({ next, clientInput, metadata }) => {
    const startTime = performance.now();

    const result = await next();

    const executionTime = (performance.now() - startTime).toFixed(2);

    if (env.NODE_ENV === "development") {
      console.log("Result ->", result);
      console.log("Client input ->", clientInput);
      console.log("Metadata ->", metadata);
      console.log("Action execution took", executionTime, "ms");
    }

    return result;
  },
);

export const actionClient = createSafeActionClient({
  defaultValidationErrorsShape: "flattened",
  defineMetadataSchema() {
    return z.object({
      actionName: z.string().min(1),
    });
  },
  handleServerError(error) {
    if (error instanceof Error) {
      return error.message ?? DEFAULT_SERVER_ERROR_MESSAGE;
    }

    console.error("Action error", error);

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(loggingMiddleware);
