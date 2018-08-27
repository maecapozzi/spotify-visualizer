import React from 'react'
import axios from 'axios'
import { LargeText } from '../styled-components/Text/LargeText'

export class TrackContainer extends React.Component {
  state = {
    acousticness: null,
    danceability: null,
    energy: null,
    instrumentalness: null,
    key: null,
    liveness: null,
    loudness: null,
    speechiness: null,
    tempo: null,
    timeSignature: null,
    name: null
  }
  componentDidMount () {
    this.getAudioAnalysis()
  }

  getAudioAnalysis = () => {
    const id = sessionStorage.getItem('trackId')
    const uri = `https://api.spotify.com/v1/audio-features/${id}`

    axios
      .get(uri, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
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
          timeSignature
        } = response.data

        this.setState({
          acousticness,
          danceability,
          energy,
          instrumentalness,
          key,
          liveness,
          loudness,
          speechiness,
          tempo,
          timeSignature,
          name: sessionStorage.getItem('trackName')
        })
      })
      .catch(error => {
        throw new Error('Something went wrong. Please try searching again.')
      })
  }
  render () {
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
      timeSignature,
      name
    } = this.state

    if (acousticness === null) {
      return <LargeText>Loading</LargeText>
    } else {
      return <LargeText>{name}</LargeText>
    }
  }
}
