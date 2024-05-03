import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      Hello index SLASHES
      <Link to='/something'>Link me</Link>
    </div>
  )
}
