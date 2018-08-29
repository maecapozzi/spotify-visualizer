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
import { PageContainer, Page } from '../styled-components/Page/Page'
import { SearchButton } from '../styled-components/Button/SearchButton'
import { StyledLink } from '../styled-components/Link/Link'

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
    data: null,
    mode: null
  }

  componentDidMount () {
    getAudioAnalysis(this.setAudioAnalysisOnState, this.props.location.state.id)
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
      mode,
      data
    } = this.state

    if (acousticness === null) {
      return (
        <PageContainer>
          <Page>
            <LargeText>Loading</LargeText>
          </Page>
        </PageContainer>
      )
    } else {
      return (
        <PageContainer>
          <SearchButton>
            <StyledLink to='/'>Search Again</StyledLink>
          </SearchButton>
          <Dashboard
            name={this.props.location.state.name}
            data={data}
            timeSignature={timeSignature}
            tempo={tempo}
            keySignature={determineKeySignature(keySignature, mode)}
            loudness={loudness}
            mode={determineMode(mode)}
            liveness={isLive(liveness)}
          />
        </PageContainer>
      )
    }
  }
}
