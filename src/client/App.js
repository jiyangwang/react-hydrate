import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="app">
        <div className="user">
          <div className="name">name: {data.name}</div>
          <div className="email">email: {data.email}</div>
          <div className="phone">phone: {data.phone}</div>
          <div className="website">website: {data.website}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(App);
