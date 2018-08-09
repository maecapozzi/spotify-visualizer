import React from 'react'
import { Input } from '../../styled-components/Input/Input'

export const SearchBar = ({ value, handleChange, handleSubmit }) => {
  return (
    <div>
      <Input
        placeholder='Search for an artist'
        type='text'
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}
