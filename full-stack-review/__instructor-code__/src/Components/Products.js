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
                <div key={i}>
                    
                </div>
            )
        })
        return(
            <div>Products Component</div>
        )
    }
}

export default Products;