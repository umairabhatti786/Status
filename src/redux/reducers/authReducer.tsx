import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface AuthState {
  user: any;
  token:string;
  notificationAlert:boolean,
  remember:boolean;


}
export const initialState: AuthState = {
  user: null,
  token:"",
  notificationAlert:false,
  remember:true,
   

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
    setRemember: (state, { payload }: PayloadAction<SignupState>) => {
      state.remember = payload;
    }
   
  
   
  
  
    
  
   
   
  },
});

export const { setUserData,setRemember,setToken } = authSlice.actions;
export default authSlice.reducer;
export const getRemember = (state: RootState) => state?.auth.remember;
export const getUserData = (state: RootState) => state?.auth.user;
export const getNotificationAlert = (state: RootState) => state?.auth.notificationAlert;

export const getToken = (state: RootState) => state?.auth.token;





