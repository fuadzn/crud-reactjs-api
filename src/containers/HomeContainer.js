import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { connect } from 'react-redux'
import { deleteDataUser, getUsersList } from '../action/userAction'

class HomeContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <Container>
        <TableComponent />
      </Container>
    );
  }
}

export default connect()(HomeContainer);
