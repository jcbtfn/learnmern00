import { useState } from "react"
import { useParams, Link } from "react-router-dom"

import './ComposerDetailscss.css'

const ComposerDetails = () => {

  const { composer_id } = useParams()
  const [composer, setComposer] = useState({})

  const loadComposerDetails = () => {
    fetch(`http://localhost:5005/api/composers/${composer_id}`)
      .then(response => response.json())
      .then(composer => setComposer(composer))
  }

  loadComposerDetails()

  const dateformat = (date) => {
    let newdate = new Date(date)
    // let datetostring = `${newdate.getDate()}/${newdate.getMonth()}/${newdate.getFullYear()}`
    let datetostring = `${newdate.getFullYear()}`
    return datetostring
  }

  console.log(composer.works)

  if (composer.works) {
    return (
      <main>
        <h1>Know more about: {composer.name}</h1>
        <hr />
        <ul>
          <h3>Full name: {composer.complete_name}</h3>
          <h3>Epoch: {composer.epoch}</h3>
          <h3>Birth Year: {dateformat(composer.birth)}</h3>
          <h3>Death Year: {dateformat(composer.death)}</h3>
        </ul>
        <hr />
        {composer.works.map (work => {
          return (
            <ul class = "workslist">
              <li class = "workslistelement"><h4>{work.title}</h4></li>
                <ul>
                  {work.subtitle != "" &&
                  <li><i>{work.subtitle}</i></li>
                  }
                  <li>{work.genre}</li>
                </ul>
            </ul>
            
            )
        })}
        <Link to="/composers">Back to Composers index</Link><br></br>
        <Link to="/">Back to Homepage</Link>
      </main>
    )
  } else {
    return(<p>Loading...</p>)
  }

}

export default ComposerDetails