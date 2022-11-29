export const baseQuery = {
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
