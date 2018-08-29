import axios from 'axios'

export const getAudioAnalysis = (callback, id) => {
  const uri = `https://api.spotify.com/v1/audio-features/${id}`

  axios
    .get(uri, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    .then(response => {
      const {
        acousticness,
        danceability,
        energy,
        instrumentalness,
        key,
        liveness,
        loudness,
        speechiness,
        tempo,
        time_signature,
        mode
      } = response.data

      callback(
        acousticness,
        danceability,
        energy,
        instrumentalness,
        key,
        liveness,
        loudness,
        speechiness,
        tempo,
        time_signature,
        mode
      )
    })
    .catch(error => {
      throw new Error('Something went wrong. Please try searching again.')
    })
}
