import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
            <Link to={"/"}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>

            </Col>
        </Row>
    )
}

export default BackComponent
