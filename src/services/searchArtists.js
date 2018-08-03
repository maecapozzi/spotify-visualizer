import axios from "axios";

export const searchArtists = (uri, accessToken, collectResults, artists) => {
  axios
    .get(uri, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
    .then(response => {
      collectResults(response.data.artists.items);
    })
    .catch(error => {
      throw new Error("Something went wrong. Please try searching again.");
    });
};
