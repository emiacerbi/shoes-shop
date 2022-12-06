export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const DEFAULT_QUERY = {
  filters: {
    userID: {
      id: {
        $notNull: true
      }
    },
    teamName: {
      $eq: 'ea-team'
    }
  },
  populate: '*',
  pagination: {
    page: 1,
    pageSize: 100
  }
}
