import React from 'react'
import { LargeText } from '../../styled-components/Text/LargeText'
import { MediumText } from '../../styled-components/Text/MediumText'
import { SimpleBarChart } from '../Chart/BarChart.js'
import { Card } from '../../styled-components/Card/Card.js'
import { Container, Row, Col } from 'react-grid-system'

export const Dashboard = props => (
  <div style={{ textAlign: 'center' }}>
    <LargeText>{props.name}</LargeText>
    <Container>
      <Row>
        <Col sm={12}>
          <Card>
            <SimpleBarChart data={props.data} />
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Time Signature: {props.timeSignature}</MediumText>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Tempo: {props.tempo}</MediumText>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Key: {props.keySignature}</MediumText>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Loudness: {props.loudness} db</MediumText>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Mode: {props.mode}</MediumText>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <MediumText>Liveness: {props.liveness}</MediumText>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
