import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const networks = {
  GitHub: 'https://github.com/GavinThomas1192',
  LinkedIn: 'https://www.linkedin.com/in/gavinthomas1192/',
}

const Footer = () =>
  <footer>
    <section className="container">
      <aside>
        <Link to="/">© {new Date().getFullYear()} Gavin Thomas</Link>
      </aside>
      <aside>
        <Link className='btn' to="https://github.com/GavinThomas1192" target="_blank" >Github</Link>
        <Link className='btn' to="https://www.linkedin.com/in/gavinthomas1192/" target="_blank" >LinkedIn</Link>
        <NavLink to="/privacy" className="btn">Privacy</NavLink>
      </aside>
    </section>
  </footer>

export default Footer
