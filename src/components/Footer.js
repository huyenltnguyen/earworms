import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = (props) => {
  const stickyFooter = {
    bottom: '0',
    position: 'absolute'
  };

  const nonStickyFooter = {
    position: 'static'
  }

  const style = props.items <= 3 && window.innerWidth > 768 ? stickyFooter : nonStickyFooter;

  return (
    <Row style ={ style } className="Footer">
      <Col xs={12}>
        <p>Photo by <a href="https://unsplash.com/photos/0lQFV7CeghM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">William Iven</a> on <a href="https://unsplash.com/photos/0lQFV7CeghM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <p>Developed by <a href="https://huyenltnguyen.com">Huyen Nguyen</a></p>
      </Col>
    </Row>
  );
};

export default Footer;