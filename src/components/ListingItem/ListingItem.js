import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';
import './ListingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render() {
    const { listing } = this.props;
    return (
      <div className="ListingItem">
        <h2>{listing.address}</h2>
      </div>
    );
  }
}

export default ListingItem;
