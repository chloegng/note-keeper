import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3 py-1">
      <div className="container">
        <a href="/" className="navbar-brand">
          Note Keeper
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item text-white">
              <i className="fas fa-plus" /> Add Note
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
