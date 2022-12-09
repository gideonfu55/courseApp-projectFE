import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelect = () => {
  const [value, setValue] = useState('')
  
  const defaultValue = 'Please select a country';
  const options = useMemo(() => countryList().setEmpty(defaultValue).getData(), [])

  const textChangeHandler = e => {
    if (value.length <= 1) {
      setValue(defaultValue)
    }
    setValue(e)
  }

  return (
    <Select 
      name={defaultValue}
      defaultValue={defaultValue}
      options={options}
      value={value}
      onChange={textChangeHandler}
    />
  )
}

export default CountrySelect