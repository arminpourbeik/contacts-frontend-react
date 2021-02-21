import { Prompt } from 'react-router-dom'
import { Header } from '../components'
import {
  Form,
  Button,
  Container,
  Select,
  Header as SemanticUIHeader,
  Segment,
  Icon,
} from 'semantic-ui-react'

import countries from '../utils/countries'

export default function CreateContact({
  form,
  onChange,
  onSubmit,
  loading,
  formIsNotValid,
  isFormHalfFilled,
}) {
  return (
    <>
      <Prompt when={isFormHalfFilled} message='Discard entered values?' />
      <Header />
      <Container>
        <SemanticUIHeader>Create Contact</SemanticUIHeader>
        <Segment>
          <Form>
            <Segment placeholder>
              <SemanticUIHeader icon>
                <Icon name='photo' />
                Select photo for your contact
              </SemanticUIHeader>
              <Button primary>Add Photo</Button>
            </Segment>
            <Form.Group widths={2}>
              <Form.Input
                label='First name'
                placeholder='First name'
                name='firstName'
                value={form.firstName}
                onChange={onChange}
              />
              <Form.Input
                label='Last name'
                placeholder='Last name'
                name='lastName'
                value={form.lastName}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                label='Country'
                control={Select}
                options={countries}
                placeholder='Country'
                name='country'
                value={form.country}
                onChange={onChange}
              />
              <Form.Input
                label='Phone Number'
                placeholder='Phone Number'
                name='phoneNumber'
                value={form.phoneNumber}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Checkbox
              label='Add to favorite'
              name='isFavorite'
              onChange={(e, data) =>
                onChange(e, { name: 'isFavorite', value: data.checked })
              }
            />
            <Button
              primary
              type='submit'
              onClick={onSubmit}
              loading={loading}
              disabled={loading || formIsNotValid}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    </>
  )
}
