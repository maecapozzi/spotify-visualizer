import React from 'react'
import { determineMode } from '../index'

describe('determineMode', () => {
  it('has the correct exports', () => {
    expect(determineMode).toBeDefined()
  })

  it('will return major if mode === 1', () => {
    expect(determineMode(1)).toBe('Major key')
  })

  it('will return minor if mode === 0', () => {
    expect(determineMode(0)).toBe('Minor key')
  })
})
