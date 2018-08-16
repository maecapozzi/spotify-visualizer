import React from 'react'
import { Input } from '../../styled-components/Input/Input'
import { SearchButton } from '../../styled-components/Button/SearchButton'
import { LargeText } from '../../styled-components/Text/LargeText'
import { MediumText } from '../../styled-components/Text/MediumText'

export const SearchBar = ({ value, handleChange, handleSubmit }) => {
  return (
    <div>
      <LargeText>Get Started</LargeText>
      <MediumText>Search for your favorite artists</MediumText>
      <div style={{ display: 'flex', padding: '20px' }}>
        <Input
          placeholder='Search for an artist'
          type='text'
          value={value}
          onChange={handleChange}
        />
        <SearchButton onClick={handleSubmit}>Search</SearchButton>
      </div>
    </div>
  )
}
