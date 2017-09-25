import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';
import MenuItem from './MenuItem';

class Dashboard extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
    .then( res => {
      console.log(res)
      this.setState({ menu_items: res.data })
    })
    .catch( err => {

    })
  }

  render() {
    const { menu_items } = this.state;
    const menuCards = menu_items.map( m => <MenuItem
                                          key={m.id}
                                          {...m}
                                        /> );

    return (
      <div>
        <h3>You are logged in!</h3>
      </div>
    )
  }
} 


export default Dashboard;
