import UserExamplesLayout from 'src/layouts/UserExamplesLayout'
import EditUserExampleCell from 'src/components/EditUserExampleCell'

const EditUserExamplePage = ({ id }) => {
  return (
    <UserExamplesLayout>
      <EditUserExampleCell id={id} />
    </UserExamplesLayout>
  )
}

export default EditUserExamplePage
