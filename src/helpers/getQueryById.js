const qs = require('qs')

export const getQueryById = (userId) => {
  const query = qs.stringify(
    {
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 100
      },
      filters: {
        userID: {
          id: {
            $eq: userId
          }
        }
      }
    },
    {
      encodeValuesOnly: true // prettify URL
    }
  )

  return query
}
