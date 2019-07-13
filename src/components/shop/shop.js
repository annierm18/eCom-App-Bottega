import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    conponentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
         // set the header links
       
        // fetch navbar links
             // set the navbar links
             // filter products with links

         //fetch shop products action creator
    }
    render() {
        // console.log(headerLinks);
       return (
            <div className='shop'>
                {/* shop search bar */}
                {/* shop product */}
                {/* shop cart button */}
            </div>
       )
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;