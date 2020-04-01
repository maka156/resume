import React from "react";
import PropType from "prop-types";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { updateLanguageDS } from "../redux/actions/index";

class Header extends React.Component<props,State> {

  render() {
    return (
      <Card style={{ width: '100%', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5616AQF6lsIXPUr0AQ/profile-displaybackgroundimage-shrink_200_800/0?e=1590019200&v=beta&t=LdEsGO_zGE3dYr-ybSp8HV2EEPuk88NdEyAoVS4cEKo" alt="banner"/>
        <Container>
          <Row>
            <Col>
              <div className="profile-pos">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFs5WFaBv7B4g/profile-displayphoto-shrink_200_200/0?e=1590019200&amp;v=beta&amp;t=O8pXZSQXZOxJfw1uHNgE1ZCYh-9y0PIMmxoJ7am-AOU" className="rounded-circle profile border" alt="profile"/>
              </div>
            </Col>
            <Col>
              <p className="text-right text-right mb-1 mt-1">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faLanguage}/>
                </span>
                <Button variant="link" data-testid="button-es" onClick={() => this.props.onClick('es')}>
                  es
                </Button>
                | <Button variant="link" data-testid="button-en" onClick={() => this.props.onClick('en')}>
                  en
                </Button>
              </p>
              <p className="text-right">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt}/>
                </span>
                Santiago de Chile</p>
            </Col>
          </Row>
        </Container>

        <Card.Body>
          <Card.Title className="h4 text-center mb-2">Maria José Canache Guevara</Card.Title>
          <Card.Subtitle className="mb-4 text-muted text-center h4">FullStack Developer</Card.Subtitle>
          <Card.Text data-testid="text-language">
            {this.props.bio}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

Header.propTypes = {
  onClick: PropType.func,
  bio: PropType.string
}

Header.defaultProps = {
  onClick: () => {},
  bio: ""
}

export default Header;