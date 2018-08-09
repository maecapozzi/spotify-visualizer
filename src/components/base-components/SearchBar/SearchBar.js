import React from 'react'
import { render } from 'react-dom'
import Downshift from 'downshift'
import { Input } from '../../styled-components/Input/Input'
import { ListItem } from '../../styled-components/List/ListItem'
import { List } from '../../styled-components/List/List'

const items = [
  { value: 'Justin Bieber' },
  { value: 'Arianna Grande' },
  { value: 'Beyoncé' },
  { value: 'Jay Z' },
  { value: 'Lady Gaga' }
]

const SearchBar = () => {
  return (
    <Downshift
      onChange={selection => alert(`You selected ${selection.value}`)}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <Input placeholder='Search for an artist' {...getInputProps()} />
          <List {...getMenuProps()}>
            {isOpen
              ? items
                .filter(
                  item => !inputValue || item.value.includes(inputValue)
                )
                .map((item, index) => (
                  <ListItem
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal'
                      }
                    })}
                  >
                    {item.value}
                  </ListItem>
                ))
              : null}
          </List>
        </div>
      )}
    </Downshift>
  )
}

export { SearchBar }
