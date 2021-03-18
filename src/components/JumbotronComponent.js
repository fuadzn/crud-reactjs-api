import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>{props.title}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p className="lead">
            <Button color="dark">
              <FontAwesomeIcon icon={faInfo} />
              Learn more
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
