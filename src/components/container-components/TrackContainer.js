import React from 'react'
import { LargeText } from '../styled-components/Text/LargeText'
import { Dashboard } from '../base-components/Dashboard/Dashboard'
import { getAudioAnalysis } from '../../services/getAudioAnalysis'
import {
  determineKeySignature,
  determineMode,
  organizeDataToPassToChart,
  isLive
} from '../../audioAnalysis'
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
    getAudioAnalysis(this.setAudioAnalysisOnState)
  }

  setAudioAnalysisOnState = (
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
  ) => {
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
      mode,
      data: organizeDataToPassToChart(
        acousticness,
        danceability,
        energy,
        instrumentalness
      )
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
          keySignature={determineKeySignature(keySignature, mode)}
          loudness={loudness}
          mode={determineMode(mode)}
          liveness={isLive(liveness)}
        />
      )
    }
  }
}
