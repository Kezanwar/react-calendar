import { ErrorObject } from '../../types/error';

export type FetchErrorHandlerOptions = {
  error: unknown;
  onError: (errorObj: ErrorObject) => void;
};

const genericErrMsg = 'Something went wrong';

export const fetchErrorHandler = (
  errorHandlerOptions: FetchErrorHandlerOptions
): void => {
  const { error, onError } = errorHandlerOptions;
  const apiErr = error as ErrorObject;

  console.error(error);

  if (typeof error === 'string') {
    onError({ message: error || genericErrMsg, statusCode: 500 });
  } else if (apiErr?.message && apiErr?.statusCode) {
    onError(apiErr);
  } else {
    onError({ message: genericErrMsg, statusCode: 500 });
  }
};
