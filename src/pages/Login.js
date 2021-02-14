import { Link } from 'react-router-dom'

import { Header } from '../components'

// Semantic UI
import {
  Grid,
  Form,
  Button,
  Segment,
  Header as SemanticUIHeader,
  Icon,
  Message,
} from 'semantic-ui-react'

function Login({ form }) {
  const [
    formState,
    setFormState,
    loginFormValid,
    onSubmit,
    loading,
    error,
  ] = form({
    username: '',
    password: '',
  })

  return (
    <>
      <Header />
      <Grid columns={2} centered container>
        <Grid.Column>
          <Segment>
            <Grid columns={3} centered>
              <Grid.Column textAlign='center'>
                <Icon name='sign in' size='huge' circular></Icon>
                <SemanticUIHeader textAlign='center' as='h1'>
                  Login
                </SemanticUIHeader>
              </Grid.Column>
            </Grid>
            <Form>
              {error && (
                <Message
                  negative
                  content='Credentials are invalid. try again.'
                />
              )}
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
              <Button
                disabled={loginFormValid || loading}
                fluid
                primary
                type='submit'
                onClick={onSubmit}
                loading={loading}
              >
                Submit
              </Button>
              <Segment>
                Need an account? <Link to='/register'>Register</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Login
