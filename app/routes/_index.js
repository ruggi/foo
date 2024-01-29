import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      Hello index
      <Link to='/something'>Link me</Link>
    </div>
  )
}
