import {Link} from 'react-router-dom'

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to composers MERN</h1>
      <hr />
      <Link to="/composers">View composers</Link>
    </main>
  )
}

export default IndexPage