import React from 'react'
import { Input } from '../../styled-components/Input/Input'
import { SearchButton } from '../../styled-components/Button/SearchButton'
import { Link } from 'react-router-dom'

export const SearchBar = ({ value, handleChange, handleSubmit }) => {
  return (
    <div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <Input
          placeholder='Search for an artist'
          type='text'
          value={value}
          onChange={handleChange}
        />
        <SearchButton onClick={handleSubmit}>
          <Link to='/search'>Search</Link>
        </SearchButton>
      </div>
    </div>
  )
}
