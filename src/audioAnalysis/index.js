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

export const determineKeySignature = (key, mode) => {
  const possibleKeys = [
    'C',
    'C#/D♭',
    'D',
    'D#/E♭',
    'E',
    'F',
    'F#/G♭',
    'G',
    'G#/A♭',
    'A',
    'A#/B♭',
    'B'
  ]

  if (mode === 0) {
    if (typeof possibleKeys[key + 9] !== 'undefined') {
      return possibleKeys[key + 9]
    } else {
      return possibleKeys[key - 3]
    }
  } else {
    return possibleKeys[key]
  }
}

export const determineMode = mode => {
  return mode === 0 ? 'Minor key' : 'Major key'
}

export const isLive = liveness => {
  return liveness >= 0.8 ? 'Live' : 'Not live'
}
