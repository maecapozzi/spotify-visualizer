import PropTypes from 'prop-types'

export const SearchBar = props => {
  const searchProps = {
    value: props.value,
    handleChange: props.handleChange,
    handleSubmit: props.handleSubmit
  }
  return props.searchBarProps(searchProps)
}

SearchBar.defaultProps = {
  value: '',
  handleChange: () => {},
  handleSubmit: () => {}
}
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
