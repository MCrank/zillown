import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';

import ListingItem from '../ListingItem/ListingItem';
import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    deleteSingleListing: PropTypes.func,
  };

  render() {
    const { listings, deleteSingleListing } = this.props;
    const listingItemComponents = listings.map(listing => (
      <ListingItem key={listing.id} listing={listing} deleteSingleListing={deleteSingleListing} />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
