import React from 'react'
import './Logo.css'
import coffee from '../../assets/img/coffee.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={coffee} alt="logo" />
        </Link>
    </aside>