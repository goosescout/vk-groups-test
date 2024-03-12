import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { FiltersSlice } from "./types"

const initialState: FiltersSlice = {
  privacy: "all",
  avatarColor: "all",
  hasFriends: "all",
}

const filtersSlice = createSlice({
  initialState,
  name: "filters",
  reducers: {
    setPrivacy: (
      state,
      { payload }: PayloadAction<FiltersSlice["privacy"]>
    ) => {
      state.privacy = payload
    },
    setAvatarColor: (
      state,
      { payload }: PayloadAction<FiltersSlice["avatarColor"]>
    ) => {
      state.avatarColor = payload
    },
    setHasFriends: (
      state,
      { payload }: PayloadAction<FiltersSlice["hasFriends"]>
    ) => {
      state.hasFriends = payload
    },
  },
})

export const { setPrivacy, setAvatarColor, setHasFriends } =
  filtersSlice.actions

export default filtersSlice.reducer
