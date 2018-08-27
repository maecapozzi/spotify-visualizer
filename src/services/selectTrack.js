import axios from 'axios'

export const selectTrack = (uri, accessToken) => {
  console.log(uri)
  axios
    .get(uri, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then(response => {
      const { id, name } = response.data
      sessionStorage.setItem('trackId', id)
      sessionStorage.setItem('trackName', name)
    })
    .catch(error => {
      throw new Error('Something went wrong. Please try searching again.')
    })
}
