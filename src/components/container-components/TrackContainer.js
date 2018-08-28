import React from 'react'
import axios from 'axios'
import { LargeText } from '../styled-components/Text/LargeText'
import { Dashboard } from '../base-components/Dashboard/Dashboard'

export class TrackContainer extends React.Component {
  state = {
    acousticness: null,
    danceability: null,
    energy: null,
    instrumentalness: null,
    keySignature: null,
    liveness: null,
    loudness: null,
    speechiness: null,
    tempo: null,
    timeSignature: null,
    name: null,
    data: null,
    mode: null
  }

  componentDidMount () {
    this.getAudioAnalysis()
  }

  organizeDataToPassToChart = () => {
    const { acousticness, danceability, energy, instrumentalness } = this.state

    const data = [
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

    this.setState({ data })
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
          time_signature,
          mode
        } = response.data

        this.setState({
          acousticness,
          danceability,
          energy,
          instrumentalness,
          keySignature: key,
          liveness,
          loudness,
          speechiness,
          tempo,
          timeSignature: time_signature,
          name: sessionStorage.getItem('trackName'),
          mode
        })
      })
      .then(response => {
        this.organizeDataToPassToChart()
      })
      .catch(error => {
        throw new Error('Something went wrong. Please try searching again.')
      })
  }
  render () {
    const {
      acousticness,
      keySignature,
      liveness,
      loudness,
      tempo,
      timeSignature,
      name,
      mode,
      data
    } = this.state

    if (acousticness === null) {
      return <LargeText>Loading</LargeText>
    } else {
      return (
        <Dashboard
          name={name}
          data={data}
          timeSignature={timeSignature}
          tempo={tempo}
          keySignature={keySignature}
          loudness={loudness}
          mode={mode}
          liveness={liveness}
        />
      )
    }
  }
}
