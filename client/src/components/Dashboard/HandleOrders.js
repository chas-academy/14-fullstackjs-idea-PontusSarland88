import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllActiveOrders } from '../../actions/orderActions';
import HandleOrder from './HandleOrder';

class HandleOrders extends Component {
  constructor() {
    super();
    this.state = {
      allActiveOrders: [],
      allInactiveOrders: [],
      errors: {},
    };
  }

  componentWillMount() {
    this.props.getAllActiveOrders();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allActiveOrders: nextProps.orders.orders
    });
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <h2 className="title is-2">Ordrar</h2>
        </div>
        <div>
          {this.state.allActiveOrders.length > 0 ? 
            this.state.allActiveOrders.map((val, i) => {
              return <HandleOrder key={i} orderData={val} />
            })
        :
            <p>Inga ordrar hittades</p>
          } 
        </div>
      </div>
    )
  }
}

HandleOrders.propTypes = {
  getAllActiveOrders: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    orders: state.orders,
})

export default connect(mapStateToProps, { getAllActiveOrders })(withRouter(HandleOrders));