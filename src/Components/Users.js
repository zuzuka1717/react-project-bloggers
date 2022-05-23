import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import PersonList from './PersonList';


const Users = () => {
  return (
    <>
    <Container style={{ paddingTop: '2rem' }}>
      <Row>
        <Col>
      <Card style={{ width: '22rem' }}>
  <Card.Img style={{height: '15rem'}} variant="top" src={require ('./first.jpg')} />
  <Card.Body>
    <Card.Title>Name 1</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga necessitatibus totam harum reprehenderit commodi. Corrupti deleniti ullam, commodi labore suscipit aperiam fuga. Vitae veniam maiores explicabo. A, corporis ipsa.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
      <Card style={{ width: '22rem' }}>
  <Card.Img style={{height: '15rem'}} variant="top" src={require ('./second.jpg')} />
  <Card.Body>
    <Card.Title>Name 2</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga necessitatibus totam harum reprehenderit commodi. Corrupti deleniti ullam, commodi labore suscipit aperiam fuga. Vitae veniam maiores explicabo. A, corporis ipsa.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
      <Card style={{ width: '22rem' }}>
  <Card.Img style={{height: '15rem'}} variant="top" src={require ('./third.jpeg')} />
  <Card.Body>
    <Card.Title>Name 3</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga necessitatibus totam harum reprehenderit commodi. Corrupti deleniti ullam, commodi labore suscipit aperiam fuga. Vitae veniam maiores explicabo. A, corporis ipsa.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
<Container>
  <div style={{ padding: '2rem' }}>
    <h2>
      You can also collaborate with these popular bloggers:
    </h2>
  </div>
  <PersonList />
</Container>
    </>
  );
}


export default Users;
