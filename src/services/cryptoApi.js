import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '04ad6f4e29msh1433cf0d41f597fp1caef4jsn4405b624e04e',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi
