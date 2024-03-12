import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const BASE_URL = import.meta.env.BASE_URL // For demo purposes

const VKBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  mode: "cors",
})

export default VKBaseQuery
