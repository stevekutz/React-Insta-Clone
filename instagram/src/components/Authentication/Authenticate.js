import React from 'react';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        logged_IN: false

      }

    }

    componentDidMount() {
      console.log("Authenticate CDM called");
    }

    render() {

      return(

        <App/>

      )

    }

  };

export default Authenticate;



