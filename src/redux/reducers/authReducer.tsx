import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  user: any;
  token: string;
  notificationAlert: boolean;
  remember: boolean;
  disableBottomTab:boolean
  profileActiveBar:string
  isSuccess: boolean;
  proifleGifs: {
    gif1: string;
    gif2: string;
  };

  successResponse: {
    label: string;
    text: string;
  };
}
export const initialState: AuthState = {
  user: null,
  token: "",
  profileActiveBar:"Profile",
  notificationAlert: false,
  remember: true,
  disableBottomTab:false,
  isSuccess: false,
  successResponse: {
    label: "",
    text: "",
  },
  proifleGifs: {
    gif1: "",
    gif2: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<SignupState>) => {
      state.user = payload;
    },
    setToken: (state, { payload }: PayloadAction<SignupState>) => {
      state.token = payload;
    },
    setDisableBottomTab: (state, { payload }: PayloadAction<SignupState>) => {
      state.disableBottomTab = payload;
    },
    setProfileActiveBar: (state, { payload }: PayloadAction<SignupState>) => {
      state.profileActiveBar = payload;
    },
    setRemember: (state, { payload }: PayloadAction<SignupState>) => {
      state.remember = payload;
    },
    setSuccessResponse: (state, { payload }: PayloadAction<AuthState>) => {
      state.successResponse.label = payload?.label;
      state.successResponse.text = payload?.text;
    },
    setIsSuccess: (state, { payload }: PayloadAction<AuthState>) => {
      state.isSuccess = payload;
    },
    setProfileGif: (state, { payload }: PayloadAction<AuthState>) => {
      state.proifleGifs.gif1 = payload.gif1;
      state.proifleGifs.gif2 = payload.gif2;
    },
  },
});

export const {
  setUserData,
  setRemember,
  setToken,
  setSuccessResponse,
  setIsSuccess,
  setProfileGif,
  setDisableBottomTab,
  setProfileActiveBar
} = authSlice.actions;
export default authSlice.reducer;
export const getRemember = (state: RootState) => state?.auth.remember;
export const getProfileGifs = (state: RootState) => state?.auth.proifleGifs;
export const getUserData = (state: RootState) => state?.auth.user;
export const getNotificationAlert = (state: RootState) =>
  state?.auth.notificationAlert;
export const getSuccessResponse = (state: RootState) =>
  state?.auth.successResponse;
export const getIsSuccess = (state: RootState) => state?.auth.isSuccess;

export const getToken = (state: RootState) => state?.auth.token;
