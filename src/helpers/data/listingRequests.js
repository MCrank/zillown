import Axios from 'axios';
import apiKeys from '../apiKeys';

const fireBaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  Axios.get(`${fireBaseUrl}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          listings.push(res.data[key]);
        });
      }
      resolve(listings);
    })
    .catch(error => reject(error));
});

const deleteListing = listingId => Axios.delete(`${fireBaseUrl}/listings/${listingId}.json`);

const postRequest = listing => Axios.post(`${fireBaseUrl}/listings.json`, listing);

export default { getRequest, deleteListing, postRequest };
