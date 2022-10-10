import { useState } from "react"
import { useParams, Link } from "react-router-dom"

const ComposerDetails = () => {

  const { composer_id } = useParams()
  const [composer, setComposer] = useState({})

  const loadComposerDetails = () => {
    fetch(`http://localhost:5005/api/composers/${composer_id}`)
      .then(response => response.json())
      .then(composer => setComposer(composer))
  }

  loadComposerDetails()

  return (
    <main>
      <h1>Know more about: {composer.name}</h1>
      <hr />
      <ul>
        <h3>Full name: {composer.complete_name}</h3>
        <h3>Epoch: {composer.epoch}</h3>
        <h3>Birth Date: {(composer.birth)}</h3>
        <h3>Death: {composer.death}</h3>
        {/* <h3>Popular: {composer.popular}</h3>
        <h3>Reccomended: {composer.reccomended}</h3> */}
      </ul>
      <hr />
      <Link to="/composers">Back to Composers index</Link><br></br>
      <Link to="/">Back to Homepage</Link>
    </main>
  )
}

export default ComposerDetails