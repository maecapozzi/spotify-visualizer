export const organizeDataToPassToChart = (
  acousticness,
  danceability,
  energy,
  instrumentalness
) => {
  return [
    {
      name: 'acousticness',
      highestPossibleValue: 1.0,
      actualValue: acousticness
    },
    {
      name: 'danceability',
      highestPossibleValue: 1.0,
      actualValue: danceability
    },
    { name: 'energy', highestPossibleValue: 1.0, actualValue: energy },
    {
      name: 'instrumentalness',
      highestPossibleValue: 1.0,
      actualValue: instrumentalness
    }
  ]
}
