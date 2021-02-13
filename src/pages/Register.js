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
  const [
    formState,
    setFormState,
    registerFormValid,
    onSubmit,
    loading,
    fieldErrors,
  ] = form({
    firstName: '',
    lastName: '',
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
                  name='firstName'
                  value={formState.firstName}
                  onChange={setFormState}
                  error={
                    fieldErrors.first_name && {
                      content: fieldErrors.username,
                      pointing: 'below',
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Last name'
                  placeholder='Last Name'
                  name='lastName'
                  value={formState.lastName}
                  onChange={setFormState}
                  error={
                    fieldErrors.last_name && {
                      content: fieldErrors.last_name,
                      pointing: 'below',
                    }
                  }
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
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: 'below',
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Username'
                  placeholder='Username'
                  name='username'
                  value={formState.username}
                  onChange={setFormState}
                  error={
                    fieldErrors.username && {
                      content: fieldErrors.username,
                      pointing: 'below',
                    }
                  }
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
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: 'below',
                    }
                  }
                />
              </Form.Field>
              <Button
                disabled={registerFormValid || loading}
                fluid
                primary
                type='submit'
                onClick={onSubmit}
                loading={loading}
              >
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
