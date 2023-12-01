import { Link } from "react-router-dom";

export default function Root(props) {
  return <section>{props.name} is mounted!
  <Link to='/home' >Home</Link>
  <Link to='/about' >About</Link>
  </section>;
}
