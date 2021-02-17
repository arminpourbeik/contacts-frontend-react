import { Header } from '../../components'
// Semantic UI
import { List, Image, Placeholder, Container } from 'semantic-ui-react'

import profilePicPlaceholder from '../../assets/user.jpg'

function Contacts({ contacts }) {
  const { loading } = contacts

  return (
    <>
      <Header />
      <Container>
        {loading && (
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        )}
        {contacts.data.length > 0 && (
          <List>
            {contacts.data.map((contact, index) => (
              <List.Item key={index}>
                <List.Content floated='right'>
                  <span>{contact.phone_number}</span>
                </List.Content>
                <List.Content>
                  <Image circular avatar src={profilePicPlaceholder} />
                  <span style={{ textTransform: 'capitalize' }}>
                    {contact.first_name} {contact.last_name}
                  </span>
                </List.Content>
              </List.Item>
            ))}
          </List>
        )}
      </Container>
    </>
  )
}

export default Contacts
