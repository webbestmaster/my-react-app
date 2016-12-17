import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/my-react-app/basic/dist/">Home</Link>
        {' '}
        <Link to="/my-react-app/basic/dist/foo">Foo</Link>
        {' '}
        <Link to="/my-react-app/basic/dist/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
