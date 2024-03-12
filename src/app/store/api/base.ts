import { createApi } from "@reduxjs/toolkit/query/react"

import VKBaseQuery from "@/store/api/helpers"

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: VKBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
})

export default baseApi
