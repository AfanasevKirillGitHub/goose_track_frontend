import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

// interface IData {
//   lang: string;
// }

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/tasks',
    baseUrl: 'https://your-tasks-hv5t.onrender.com/api/reviews',
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
  tagTypes: ['reviews'],
  endpoints: builder => ({
    fetchReviews: builder.query<any | [], null>({
      query: () => ({
        method: 'GET',
        url: `/`,
      }),
      //   transformResponse: (response: ITaskApi) => response.tasks,
      providesTags: ['reviews'],
    }),
    addReview: builder.mutation<any, any>({
      query: review => ({
        method: 'POST',
        url: '/',
        body: review,
      }),

      invalidatesTags: ['reviews'],
    }),
  }),
});

export const { useAddReviewMutation, useFetchReviewsQuery } = reviewsApi;
