import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealSvg from '../../assets/meal.svg'


const Login = () => {
  const user = {username: "user"}
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/home'

  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg}/>
        <Header>{'<Ferhat/>'}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type='text' placeholder='UserName' required/>
          <StyledInput type='password' placeholder='Password' required/>
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login