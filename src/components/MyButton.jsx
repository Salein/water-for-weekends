import React from 'react'
import './button.css'


const MyButton = ({ value }) => {
    return (
        <div class="container">
            <button class="neon-btn neon-btn--green">{value}</button>
        </div>
    )
}

export default MyButton