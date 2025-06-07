import React from 'react'
import Nav_bar from "../Componentes/Nav_bar.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
        <Nav_bar/>
 return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
              variant="top" 
              src="https://m.media-amazon.com/images/I/81h4CdNxdgL.jpg" 
              style={{ display: "inline-block",
              alignItems: "center", 
              border: "20px",
              }} />
              {/* width: '120%', */}
      <Card.Body>
        <Card.Title>Livro teste </Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Livro</Button>
      </Card.Body>
    </Card>
  );
    </>
  )
}

export default Home