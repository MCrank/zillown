import React from 'react';
import './ListingForm.scss';

class ListingForm extends React.Component {
  render() {
    return (
      <div className="ListingForm col">
        <h2>Add New Listing</h2>
        <form>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="123 United Way, Hollywood, CA 90210"
            />
          </div>
          <button className="btn btn-secondary">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
