import { genericErrorHandler } from "./generic";
import { notFoundHandler } from "./not-found";
import {validationErrorHandler} from "./validation";
import {alreadyexistHandler} from "./already-exist";

export const errorHandlers = [
  notFoundHandler,
  validationErrorHandler,
  genericErrorHandler,
  alreadyexistHandler
];