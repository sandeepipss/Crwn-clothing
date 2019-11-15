import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import './cart.icon.styles.scss'

import {selectCartItemCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className= 'item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())

});


const mapStatesToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(CartIcon);
