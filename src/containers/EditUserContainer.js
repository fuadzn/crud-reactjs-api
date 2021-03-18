import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getUsersDetail, putUsersUpdate } from "../action/userAction";
import swal from "sweetalert"

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUsersUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser) {
        swal(
          "Failed!",
            this.props.errorResponDataUser,
          "error"
        );
      }else {
        swal(
          "User Updated!",
          "Nama : " +
            this.props.getResponDataUser.nama +
            ", Umur : " +
            this.props.getResponDataUser.umur,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
