import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuthModal from './AuthModal';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }

    render(){
        return(
            <div>
                {this.props.user.email
                ? (<div>Cart</div>)
                : (<AuthModal />)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Cart);