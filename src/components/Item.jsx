import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({prod}) => {
    console.log(prod)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          $ {prod.price}.00
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item
