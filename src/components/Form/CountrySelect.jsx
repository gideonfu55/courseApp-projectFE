import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelect = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().setEmpty('Please select a country').getData(), [])

  const changeHandler = value => {
    if (value.length <= 1 && value === '') {
      setValue('Please select a Country')
    }
    setValue(value)
  }

  return (
    <Select options={options} value={value} onChange={changeHandler} />
  )
}

export default CountrySelect