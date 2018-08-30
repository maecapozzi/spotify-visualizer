export const redirectToSpotify = () => {
  const AUTH_URL = 'https://accounts.spotify.com/authorize?'
  const REDIRECT_URL = `${AUTH_URL}client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&redirect_uri=${
    process.env.REACT_APP_CALLBACK_URL_PROD
  }&scope=user-read-private%20user-read-email&response_type=token&state=123`
  window.location = REDIRECT_URL
}
