import React from "react";
import { Card, CardDeck } from 'react-bootstrap';

class Experience extends React.Component<props,State> {

  render() {
    const experiences = this.props.experiences;

    const listItems = experiences.map((experience) =>
      <Card key={experience.name}>
        <Card.Body>
          <Card.Title>{experience.name} - {experience.country}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted h6">{experience.role}</Card.Subtitle>
          <Card.Text>{experience.type} - {experience.date}</Card.Text>
          <p className="headline">Stack</p>
          <Card.Text>{experience.stack}</Card.Text>
          <p className="headline">Responsabilities</p>
          <Card.Text>{experience.responsabilities.map((resp) => {
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