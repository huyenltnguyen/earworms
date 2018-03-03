import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <Row className="Footer">
      <Col xs={12}>
        <p>Photo by <a href="https://unsplash.com/photos/0lQFV7CeghM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">William Iven</a> on <a href="https://unsplash.com/photos/0lQFV7CeghM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <p>Developed by <a href="https://huyenltnguyen.com">Huyen Nguyen</a></p>
      </Col>
    </Row>
  );
};

export default Footer;