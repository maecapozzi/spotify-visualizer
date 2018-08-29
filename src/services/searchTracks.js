import axios from 'axios'

export const searchTracks = (uri, collectResults) => {
  axios
    .get(uri, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    .then(response => {
      collectResults(response.data.tracks.items)
    })
    .catch(error => {
      throw new Error('Something went wrong. Please try searching again.')
    })
}
