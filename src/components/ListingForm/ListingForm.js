import React from 'react';
import PropTypes from 'prop-types';
import './ListingForm.scss';
import authRequests from '../../helpers/data/authRequests';

const defaultListing = {
  address: '',
  squareFootage: 0,
  price: 0,
  numBeds: 0,
  numBaths: 0,
  heating: '',
  cooling: '',
  imageUrl: '',
  uid: '',
};

class ListingForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    newListing: defaultListing,
  };

  formFieldStringState = (name, event) => {
    event.preventDefault();
    const tempListing = { ...this.state.newListing };
    tempListing[name] = event.target.value;
    this.setState({ newListing: tempListing });
  };

  // formFieldNumberState = (name, event) => {
  //   const tempListing = { ...this.state.newListing };
  //   tempListing[name] = event.target.value * 1;
  //   this.setState({ newListing: tempListing });
  // };

  addressChange = (event) => {
    this.formFieldStringState('address', event);
  };

  formSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const myListing = { ...this.state.newListing };
    myListing.uid = authRequests.getCurrentUid();
    onSubmit(myListing);
    this.setState({ newListing: defaultListing });
  };

  render() {
    const { newListing } = this.state;
    return (
      <div className="ListingForm col">
        <h2>Add New Listing</h2>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="123 United Way, Hollywood, CA 90210"
              value={newListing.address}
              onChange={this.addressChange}
            />
          </div>
          <button className="btn btn-secondary">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
