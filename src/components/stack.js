import React from "react";
import { Card } from 'react-bootstrap';

class Stack extends React.Component<props,State> {

  render() {
    return (
      <Card style={{ marginTop: '10px' }}>
        <Card.Body>
          <div className="d-flex flex-row bd-highlight justify-content-around">
            <div className="p-2 bd-highlight"><img  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="" class="hw-custom"/></div>
            <div className="p-2 bd-highlight"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="" class="hw-custom" /></div>
            <div className="p-2 bd-highlight"><img  src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" class="hw-custom" /></div>
            <div className="p-2 bd-highlight"><img  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="" class="hw-custom" /></div>
            <div className="p-2 bd-highlight"><img  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg" alt="" class="hw-custom" /></div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default Stack;