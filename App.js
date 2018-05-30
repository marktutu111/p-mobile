import React, { Component } from 'react';


import { HomeComponent, LoginComponent } from "./src/pages";
import { AuthService } from "./src/services/auth.service";



export default class App extends Component {

        constructor (props) {
              super(props);
              this.state = {
                    loggedIn: false
              }   
        }


        componentDidMount () {

              AuthService.auth$.subscribe(() => this.setState({ loggedIn: true }));

        }

        renderView () {

              if (this.state.loggedIn) {
                  return <HomeComponent />
              } else {
                  return <LoginComponent />
              }

        }


        render() {
          return this.renderView();
        }


}
