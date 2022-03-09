import sanityClient from '@sanity/client'
import { ApiError } from 'next/dist/server/api-utils'

export const client = sanityClient({
  projectId: 'qx0ojyai',
  dataset: 'production',
  ApiVersion: '2021-03-25',
  token:
    'skEjXLlxenEfqq7PCyhUIvWFJhfvzxeeSZ2TzpQaZz9WibKz1NhdCxzMAx6O7ULz0th0yQkligiIevN2sE80x9zEROWS3KuUUTwNkpTzzlYMSwM8EPT1haV2zMbbIOLvfn5E1SI1aZnK065q1yHrZP2QTUr0Qk8bjuLQMNOkZZ7JE3ttQjTK',
  useCdn: false,
})
