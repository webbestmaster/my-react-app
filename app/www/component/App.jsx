import React from 'react'
import { Link, hashHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/about">About</Link>
      </header>
      <div>
        <button onClick={() => hashHistory.push('/about')}>Go to /about</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
