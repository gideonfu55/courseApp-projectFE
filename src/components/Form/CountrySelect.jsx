import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelect = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = selectedOption => {
    setValue(selectedOption)
  }

  return (
    <Select option={options} value={value} onChange={changeHandler} />
  )
}

export default CountrySelect