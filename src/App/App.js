import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Listings from '../components/Listings/Listings';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import listingRequests from '../helpers/data/listingRequests';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authed: false,
    listings: [],
  };

  componentDidMount() {
    connection();

    listingRequests
      .getRequest()
      .then((listings) => {
        this.setState({ listings });
      })
      .catch((error) => {
        console.error('There was an error in the Get Reques', error);
      });

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  };

  deleteOne = (listingId) => {
    listingRequests
      .deleteListing(listingId)
      .then(() => {
        listingRequests.getRequest().then((listings) => {
          this.setState({ listings });
        });
      })
      .catch(error => console.error('Error with the Delete single', error));
  };

  formSubmitEvent = (newListing) => {
    listingRequests
      .postRequest(newListing)
      .then(() => {
        listingRequests.getRequest().then((listings) => {
          this.setState({ listings });
        });
      })
      .catch(err => console.error('Error with posting new Listing', err));
  };

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
          <Listings listings={this.state.listings} deleteSingleListing={this.deleteOne} />
          <Building />
        </div>
        <div className="row">
          <ListingForm onSubmit={this.formSubmitEvent} />
        </div>
      </div>
    );
  }
}

export default App;
