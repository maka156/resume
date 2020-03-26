import React from "react";
import { Card, CardDeck } from 'react-bootstrap';

class Experience extends React.Component<props,State> {

  render() {
    const values = this.props.dataExperience.experience;

    const listItems = values.map((value) =>
      <Card key={value.name}>
        <Card.Body>
          <Card.Title>{value.name} - {value.country}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted h6">{value.role}</Card.Subtitle>
          <Card.Text>{value.type} - {value.date}</Card.Text>
          <p className="headline">Stack</p>
          <Card.Text>{value.stack}</Card.Text>
          <p className="headline">Responsabilities</p>
          <Card.Text>{value.responsabilities.map((resp) => {
              return (<li key={resp}>{resp}</li>)
          })}</Card.Text> 
        </Card.Body>
      </Card>
    );

    return (
      <CardDeck style={{ marginTop: '10px' }}>
        {listItems}
      </CardDeck>
    )
  }
}

export default Experience;