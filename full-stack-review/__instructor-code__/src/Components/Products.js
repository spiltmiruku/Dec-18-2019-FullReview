import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/api/products').then(res => {
            this.setState({products: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedProducts = this.state.products.map((product, i) => {
            return (
                <div key={i} className='product-container'>
                    <img src={product.product_image} alt={product.product_name} className='product-image'/>
                    <p>{product.product_name}</p>
                    <p>{product.product_description}</p>
                    <p>${product.price}</p>
                </div>
            )
        })
        return(
            <div className='product-flex'>{mappedProducts}</div>
        )
    }
}

export default Products;