import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component<props,State> {

  render() {
    return (
      <Card style={{ marginBottom: '50px', marginTop: '20px' }}>
        <Card.Footer className="text-muted text-center" style={{ borderTop: '0px' }}>
        <Container>
          <Row>
            <Col>
              <Card.Link href="https://www.linkedin.com/in/maria-canache/" target="_blank">LinkedIn</Card.Link>
            </Col>
            <Col>
              <Card.Link href="https://github.com/maka156" target="_blank">GitHub</Card.Link>
            </Col>
            <Col>
             <Card.Link href="https://www.upwork.com/o/profiles/users/~01a90c4964f2d419d3/" target="_blank">UpWork</Card.Link>
            </Col>
            <Col>
              mjcanache@gmail.com
            </Col>
          </Row>
        </Container>
        </Card.Footer>
      </Card>
    )
  }
}

export default Footer;