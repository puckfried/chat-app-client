import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: '',
  socketId: '',
  username: '',
  email: '',
  avatar: '',
  friends: [],
  rooms: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      for (let key in action.payload) {
        state[key] = action.payload[key]
      }
    },
    userLogout: (state, action) => {
      return initialState
    }
  },
  extraReducers: {}
})

export const { setUser, userLogout } = userSlice.actions

export default userSlice.reducer