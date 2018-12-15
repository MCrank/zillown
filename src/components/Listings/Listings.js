import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';

import ListingItem from '../ListingItem/ListingItem';
import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render() {
    const { listings } = this.props;
    const listingItemComponents = listings.map(listing => (
      <ListingItem key={listing.id} listing={listing} />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        {listingItemComponents}
      </div>
    );
  }
}

export default Listings;
