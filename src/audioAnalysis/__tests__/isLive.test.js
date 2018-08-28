import React from 'react'
import { isLive } from '../index'

describe('isLive', () => {
  it('has the correct exports', () => {
    expect(isLive).toBeDefined()
  })

  it('will return Live if liveness is greater than 0.8', () => {
    expect(isLive(0.9)).toBe('Live')
  })

  it('will return Live if liveness is equal than 0.8', () => {
    expect(isLive(0.8)).toBe('Live')
  })

  it('will return Not live if liveness is less than than 0.8', () => {
    expect(isLive(0.7)).toBe('Not live')
  })
})
