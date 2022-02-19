import React, {useState, ReactNode, createContext} from 'react';
import AlertScreen from './AlertScreen';
import LoadingScreen from './LoadingScreen';

interface Props {
  children: ReactNode;
}

export type MakeRequest = (callAPI: callAPI) => void;

export type callAPI = (
  resultHandler: () => void,
  errorHandler: (err: {message: string}) => void,
) => void;

export type GenericRequestType = {
  onMakeRequest: MakeRequest;
  loading: boolean;
  errorMessage: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setError: (message: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const GenericRequestContext = createContext<any | undefined>(undefined);
GenericRequestContext.displayName = 'GenericRequest';

const GenericRequestHandlerHOC = ({children}: Props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('ERROR');

  const setError = (message: string) => {
    setTitle('ERROR');
    setMessage(message);
  };

  const onMakeRequest = (callAPI: callAPI) => {
    setLoading(true);
    callAPI(
      () => {
        setError('');
        setLoading(false);
      },
      ({message}) => {
        setLoading(false);
        setError(message);
      },
    );
  };

  return (
    <GenericRequestContext.Provider
      value={{
        onMakeRequest,
        loading,
        setLoading,
        setMessage,
        setError,
        setTitle,
      }}>
      {children}
      <LoadingScreen isVisible={loading} />
      {!loading && (
        <AlertScreen
          title={title}
          isVisible={!!message}
          onOkPressed={() => setMessage('')}
          message={message}
        />
      )}
    </GenericRequestContext.Provider>
  );
};

const genericRequestHandler =
  (Component: any) =>
  ({...props}) =>
    (
      <GenericRequestHandlerHOC>
        <Component {...props} />
      </GenericRequestHandlerHOC>
    );

export default genericRequestHandler;
