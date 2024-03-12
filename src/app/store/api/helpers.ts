import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const BASE_URL = "https://localhost:8000"

const VKBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  mode: "cors",
})

export default VKBaseQuery
