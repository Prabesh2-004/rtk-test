// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`
    }),
    getProductByCat: builder.query({
      query: (cat) => `/products/category/${cat}`
    }),
    searchProduct: builder.query({
      query: (search) => `products/search/${search}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useGetProductQuery, useSearchProductQuery, useGetProductByCatQuery } = productAPI;