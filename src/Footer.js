import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© Wayfarer by J-SKM 2017</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;