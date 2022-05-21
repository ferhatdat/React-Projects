import styled from 'styled-components'


function Header({setSelectItem, setInputText, submitHandle}) {
    const textHandle = (e)=>{
        setInputText(e.target.value)
    }
    const selectHandle = (e)=>{
        setSelectItem(e.target.value)
    }

  return (
    <Container>
        <h2>Food App</h2>
        <form>
            <input type="text" placeholder='Search'onChange={textHandle}/>
            <button onClick={submitHandle}>Search</button>
            <select name="" id="" onChange={selectHandle}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Teatime</option>
            </select>
        </form>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #48C3C9;
height: 12rem;
justify-content:flex-start;

h2 {
    font-size: 2rem;
}
form {
    display: flex;
    gap: 1rem;
    outline: 1px solid white;
    outline-offset: 10px;
    align-items: center;
    input {
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    border: none;
}
button {
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 2px solid black;
    cursor: pointer;
    border: none;
    font-weight: 600;
    background-color:#E0F1DD;
    &:hover {
        background-color:#48C3C9;  
        transition: all 0.3s ease-in-out;
    }
}
select {
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 2px solid black;
    cursor: pointer;
    font-weight: 600; 
    border: none;
    outline: none;
}
}
`
export default Header