import React from "react";
import Header from '../components/header';
import Stack from '../components/stack';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Loading from '../components/loading';
import { connect } from "react-redux";
import { updateLanguageDS } from "../redux/actions/index";

class Resume extends React.Component<props, state> {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.updateLanguageDS('cv-es.json')
      .then(x => this.setState({loaded: true}))
      .catch(console.error);    
  }

  render() {
    return (
      (this.state.loaded ?
      <div className="container"> 
        <Header dataHeader={this.props.language_ds} />
        <Stack />
        <Experience dataExperience={this.props.language_ds} />
        <Footer/>
      </div>
      :
      <Loading/>
      )
    )}
}

function mapStateToProps(state) {
  return {
    language_ds: state.language_ds
  };
}

export default connect(
  mapStateToProps,
  { updateLanguageDS }
)(Resume);