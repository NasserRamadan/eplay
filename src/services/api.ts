import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'categories/acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'categories/esporte'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'categories/simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'categories/luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'categories/rpg'
    }),
    getGame: builder.query({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api

export default api
