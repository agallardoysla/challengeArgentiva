import {SignupForm} from '../hooks/useLoginSweet';
import {ErrorHanlder, myFetch} from './baseService';

export const signup = (
  signupForm: SignupForm,
  resultHandler: SignUpResponseHanlder,
  errorHandler: ErrorHanlder,
) =>
  myFetch<SignUpResponse>(
    'accounts/register',
    JSON.stringify(signupForm),
    resultHandler,
    errorHandler,
  );
