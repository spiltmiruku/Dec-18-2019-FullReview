import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import AuthModal from './AuthModal';

class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            showModal: false
        }
    }

    componentDidMount(){
        axios.get('/api/products').then(res => {
            this.setState({products: res.data})
        })
        .catch(err => console.log(err))
    }

    addToCart = () => {
        if(this.props.user.email){
            axios.post('/api/cart', {})
        } else {
            this.handleToggle()
        }
    }

    handleToggle = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        const mappedProducts = this.state.products.map((product, i) => {
            return (
                <div key={i} className='product-container'>
                    <img src={product.product_image} alt={product.product_name} className='product-image'/>
                    <p>{product.product_name}</p>
                    <p>{product.product_description}</p>
                    <p>${product.price}</p>
                    <button onClick={this.addToCart}>Add to Cart</button>
                </div>
            )
        })
        return(
            <div className='product-flex'>
                {mappedProducts}
                {this.state.showModal
                ? (<AuthModal toggleFn={this.handleToggle}/>)
                : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default connect(mapStateToProps)(Products);