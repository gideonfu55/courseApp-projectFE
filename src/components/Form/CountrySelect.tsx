import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { string } from 'yup'

const CountrySelect: React.FC = () => {
  const [value, setValue] = useState('')
  
  const defaultValue = 'Please select a country';
  const options = useMemo(() => countryList().setEmpty(defaultValue).data, [])

  const textChangeHandler = (e: React.ChangeEvent<any>) => {
    if (value.length <= 1) {
      setValue(defaultValue)
    }
    setValue(e.target.value)
  }

  return (
    <Select 
      name={defaultValue}
      defaultValue={defaultValue}
      // options={[options]}
      // onChange={textChangeHandler}
      value={value}
    />

  )
}

export default CountrySelect