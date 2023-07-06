import { IEvent } from '@app/types/events.d';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@app/config/config';
import { EVENTS_ENDPOINTS } from '@app/constants/events.constants';

// Define a service using a base URL and expected endpoints
export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: 60 * 1000 * 60,
  endpoints: (builder) => ({
    getAllEvents: builder.query<IEvent[], void>({
      query: () => EVENTS_ENDPOINTS.getEvents
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEventsQuery } = eventsApi;
