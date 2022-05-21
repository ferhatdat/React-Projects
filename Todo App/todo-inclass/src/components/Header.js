import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, toggleShow }) => {

    return (
        <div className='header'>
            <h1>{title}</h1>
            {/* <Button 
            handleClick = {handleClick}
            color = 'red'
            text = 'Show Add Task Bar'
            /> */}
            <Button 
            toggleShow = {toggleShow}
            color = {showAddTask ? 'red' : "purple"}
            text = {showAddTask ? 'CloseAdd Task Bar ' : 'Show Add Task Bar'}
            />
        </div>
    )
}
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

// Header.defaultProps = {title: "Task Trackerr"}

export default Header