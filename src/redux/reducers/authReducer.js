import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  allViewIds: [],
  currentUser: {},
  isBioVerified: false,
  isFirstLogin: false,
  notificationAlert: false,
  isScroll:0,
  isVerify:false,
  verifyData:{
    lable:"",
    text:""
  },

  createPostLocation: "",
  userToken:"",
  currentLocation: "",
  positionsAndSkills: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authData: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsBioVerified: (state, action) => {
      state.isBioVerified = action.payload;
    },
    setLogOut: (state) => {
      state.currentUser = initialState.currentUser;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setNotificationAlert: (state, action) => {
      state.notificationAlert = action.payload;
    },
    setIsFirstLogin: (state, action) => {
      state.isFirstLogin = action.payload;
    },
    setIsScroll: (state, action) => {
      state.isScroll = action.payload;
    },
    setVerifyData: (state, action) => {
      state.verifyData.lable = action.payload.label;
      state.verifyData.text = action.payload.text;

    },
    setIsVerify: (state, action) => {
      state.isVerify = action.payload;
    },
    setCreatePostLocation: (state, action) => {
      state.createPostLocation = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setEmptyPostLocation: (state, action) => {
      state.createPostLocation = initialState.createPostLocation;
    },
    setPositionsAndSkills: (state, action) => {
      state.positionsAndSkills = action.payload;
    },
    setEmptyPositionsAndSkills: (state, action) => {
      state.positionsAndSkills = initialState?.positionsAndSkills;
    },
    setAllViewIds: (state, action) => {
      state.allViewIds = action?.payload;
    },
  },
});

export const {
  authData,
  setLogOut,
  setIsBioVerified,
  setNotificationAlert,
  setCreatePostLocation,
  setEmptyPostLocation,
  setCurrentLocation,
  setPositionsAndSkills,
  setEmptyPositionsAndSkills,
  setAllViewIds,
  setIsFirstLogin,
  setUserToken,
  setIsScroll,
  setVerifyData,
  setIsVerify
} = authSlice.actions;
export default authSlice.reducer;
