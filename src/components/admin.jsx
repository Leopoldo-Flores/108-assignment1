  
import React, { Component } from 'react'; 
import "./admin.css"

class Admin extends Component { 
    
    constructor(props){
        super(props);
        this.state = {  
            title : "", 
            price: 0,
            description: "",
            image: "",
            category: "",
            discount: ""
        };
       
        this.initialState = this.state;
    }

    render() { 
        return (    
            <div className="admin-page">
                <div className="capture-form">
                    
                    <div className="my-control">
                        <label> Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </div>  
                    
                    <div className="my-control">
                        <label> Description</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </div>
                 
                    <div className="my-control">
                        <label> Image</label>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </div>
                    
                    <div className="my-control">
                        <label> Price $</label>
                        <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
                    </div>   
                
                    <div className="my-control">
                        <label>Category</label>
                        <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange} />
                    </div>  

                    <div className="my-control">
                        <label> Discount</label>
                        <input type="number" name="discount" value={this.state.discount} onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-dark" onClick={this.handleSave}>Save Product</button>      
                </div>
            </div>

         );
    }

    handleInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = () => {
        console.log("Saving product");
        console.log( {...this.state} );
        // clear the capture form 
        this.setState(this.initialState);
    };
}
 
export default Admin;