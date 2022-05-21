import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const Form = ({ setMeal, setQuery, getData, mealTypes }) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    getData()
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput type='search' placeholder='Search'onChange={(e)=>setQuery(e.target.value)}/>
      <Button type='submit'>Search</Button>
      <Select name='mealTypes' id='mealTypes' onChange={(e) => setMeal(e.target.value)}>
        {mealTypes.map((item, index) =>
          <option key={index} value={item.toLowerCase()}>{item}</option>)}
      </Select>
    </FormContainer>
  )
}

export default Form