import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Participante, CardapioItem } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getParticipantes: builder.query<Participante[], void>({
      query: () => ''
    })
  })
})

export const { useGetParticipantesQuery } = api

export default api
