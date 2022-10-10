import { useState } from 'react'
import {Link} from 'react-router-dom'

import './ComposersPage.css'

const ComposersPage = () => {

  const [composers, setComposers] = useState([])

  const loadComposers = () => {
    fetch('http://localhost:5005/api/composers')
      .then(res => res.json())
      .then(allComposers => setComposers(allComposers)) //<-- server & client connected from this point
  }

  loadComposers()

  return (
    <main>
      <h1>Composers list</h1>
      <hr />
      {composers.map(eachComposer => {
        return (
          <article className='composer-card'>
            <h3>{eachComposer.name}</h3>
          </article>
        )
      })}
      <Link to="/">Back to homepage</Link>
    </main>
  )

}

export default ComposersPage