import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

function getValidationsErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach((err: any) => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}

export default getValidationsErrors;
