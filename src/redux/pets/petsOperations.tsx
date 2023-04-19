import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPets } from '../../helpers/interfaces/petsApiInterface/petsApiInterface';
import { RootState } from '../store';

// interface IData {

// }

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/pets',
    baseUrl: 'https://your-pets.onrender.com/api/pets',
    prepareHeaders: (headers, { getState }) => {
      const token: string | null = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['pets'],
  endpoints: builder => ({
    fetchPets: builder.query<IPets[] | [], any>({
      query: ({ lang = 'en', page = '1', limit = '20' }) => ({
        method: 'GET',
        url: `/?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      //   transformResponse: (response: IPetsApi) => response.news,
      providesTags: ['pets'],
    }),
    addPets: builder.mutation<any, any>({
      query: pet => ({
        method: 'POST',
        url: '/',
        body: pet,
      }),

      invalidatesTags: ['pets'],
    }),
    removePets: builder.mutation<any, any>({
      query: id => ({
        method: 'DELETE',
        url: `/${id}`,
      }),

      invalidatesTags: ['pets'],
    }),
  }),
});

export const { useFetchPetsQuery, useAddPetsMutation, useRemovePetsMutation } =
  petsApi;
