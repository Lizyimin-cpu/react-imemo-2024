// User related state management

import { createSlice } from "@reduxjs/toolkit";
import { request } from '@/utils'; // 确保 request 是一个配置好的 axios 实例


const userStore = createSlice({
  name: "user",
  initialState: {
    token: ''
  },
  // Synchronous modification method
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  }
});

// Destructure out actionCreator
const { setToken } = userStore.actions;

// Get reducer function
const userReducer = userStore.reducer;

// Asynchronously complete login and get token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    try {
      // Send async request
      const res = await request.post('/authorizations', loginForm);
      // Submit sync action to store token
      dispatch(setToken(res.data.token));
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  };
};

export { fetchLogin, setToken ,userReducer};
export default userStore;

