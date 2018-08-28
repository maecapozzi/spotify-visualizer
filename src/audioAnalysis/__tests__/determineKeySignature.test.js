import React from 'react'
import { determineKeySignature } from '../index'

describe('determineKeySignature', () => {
  const possibleKeys = [
    'C',
    'C#/D♭',
    'D',
    'D#/E♭',
    'E',
    'F',
    'F#/G♭',
    'G',
    'G#/A♭',
    'A',
    'A#/B♭',
    'B'
  ]

  it('has the correct exports', () => {
    expect(determineKeySignature).toBeDefined()
  })

  it('will return C major when passed a major mode and a key of 0 (C)', () => {
    expect(determineKeySignature(0, 1)).toBe('C')
  })

  it('will return A minor when passed a minor mode and a key of 0 (C)', () => {
    expect(determineKeySignature(0, 0)).toBe('A')
  })

  it('will return G# minor when passed a minor mode and a key of 11 (B)', () => {
    expect(determineKeySignature(11, 0)).toBe('G#/A♭')
  })
})
