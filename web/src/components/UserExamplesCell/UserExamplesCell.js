import { Link, routes } from '@redwoodjs/router'

import UserExamples from 'src/components/UserExamples'

export const QUERY = gql`
  query USER_EXAMPLES {
    userExamples {
      id
      email
      name
      birthdate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userExamples yet. '}
      <Link to={routes.newUserExample()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ userExamples }) => {
  return <UserExamples userExamples={userExamples} />
}
