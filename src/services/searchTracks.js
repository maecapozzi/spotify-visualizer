import axios from 'axios'

export const searchTracks = (uri, accessToken, collectResults, tracks) => {
  axios
    .get(uri, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then(response => {
      collectResults(response.data.tracks.items)
    })
    .catch(error => {
      throw new Error('Something went wrong. Please try searching again.')
    })
}
