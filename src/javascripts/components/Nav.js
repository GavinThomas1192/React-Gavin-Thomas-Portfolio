import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () =>
  <nav>
    <section className="container">
      <aside id="navName">
        <Link to="/">Gavin Thomas</Link>
      </aside>
      <aside id="navAside">
        <NavLink to="/" exact className="btn">Me</NavLink>
        <NavLink to="/work" className="btn">My Work</NavLink>
        <NavLink to="/contact" className="btn">Contact</NavLink>
        <NavLink to="/blog" className="btn">Blog</NavLink>
      </aside>
    </section>
  </nav>

export default Nav
