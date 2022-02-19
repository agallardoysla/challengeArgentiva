import {createStore, createHook} from 'react-sweet-state';

export type UserInfo = {
  id: number;
  firstName?: string;
  lastName?: string;
  birthDay?: string;
  birthMonth?: string;
  birthYear?: string;
  phoneNumber?: string;
  email?: string;
  descrition?: string;
  address?: string;
  dateAt?: Date;
  points?: number;
};

const initialUserInfo: UserInfo = {
  id: -1,
  firstName: '',
};

const Store = createStore({
  initialState: {
    user: initialUserInfo,
  },
  actions: {
    setUser:
      (user: UserInfo) =>
      ({setState, getState}) =>
        setState({
          user: {...getState().user, ...user},
        }),
  },
  name: 'useUserSweet',
});

export const useUserSweet = createHook(Store);
