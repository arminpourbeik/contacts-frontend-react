import { Header } from '../components'
import {
  Grid,
  Form,
  Button,
  Segment,
  Header as SemanticUIHeader,
  Icon,
} from 'semantic-ui-react'

function Register({ form }) {
  const [formState, setFormState, registerFormValid] = form({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
  })

  return (
    <>
      <Header />
      <Grid columns={2} centered container>
        <Grid.Column>
          <Segment>
            <Grid columns={2} centered>
              <Grid.Column textAlign='center'>
                <Icon name='signup' size='huge' circular></Icon>
                <SemanticUIHeader textAlign='center' as='h1'>
                  Register
                </SemanticUIHeader>
              </Grid.Column>
            </Grid>
            <Form>
              <Form.Field>
                <Form.Input
                  label='First name'
                  placeholder='First Name'
                  name='first_name'
                  value={formState.first_name}
                  onChange={setFormState}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Last name'
                  placeholder='Last Name'
                  name='last_name'
                  value={formState.last_name}
                  onChange={setFormState}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type='email'
                  label='Email'
                  placeholder='Email'
                  name='email'
                  value={formState.email}
                  onChange={setFormState}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Username'
                  placeholder='Username'
                  name='username'
                  value={formState.username}
                  onChange={setFormState}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type='password'
                  label='Password'
                  placeholder='Password'
                  name='password'
                  value={formState.password}
                  onChange={setFormState}
                />
              </Form.Field>
              <Button disabled={registerFormValid} fluid primary type='submit'>
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Register
