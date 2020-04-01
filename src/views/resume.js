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
    this.props.updateLanguageDS('es')
      .then(x => this.setState({loaded: true}))
      .catch(console.error);    
  }

  render() {
    const { bio, experience } = this.props.language_ds;
    return (
      (this.state.loaded ?
      <div className="container"> 
        <Header bio={bio} onClick={(lang) => this.props.updateLanguageDS(lang)} />
        <Stack />
        <Experience experiences={experience} />
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

function mapDispatchToProps() {
  return {
    updateLanguageDS
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Resume);