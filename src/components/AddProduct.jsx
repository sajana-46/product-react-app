import React from 'react'
import NavigationBar from './NavigationBar'

const AddProduct = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h2 className="text-center">Add Product</h2>

             <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            
                    <label htmlFor="" className="form-label">Product code:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Product Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Category:</label>
                    <select  className="form-control">
                        <options>foundation</options>
                        <options>sunscreen</options>
                        <options>mosturizer</options>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Brand:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Price:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Discount:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Stock Quantity:</label>
                    <input type="number" className="form-control" />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Description:</label>
                     <textarea  className="form-control"></textarea>
                    </div>

                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Product Image URL:</label>
                     <input type="text" className="form-control" />
                    </div>

                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Rating:</label>
                    <input type="text" className="form-control" />
                    </div>

                  
             </div>
             <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <button className="btn btn-success">Submit</button>

                </div>
            </div>
        </div>
    </div>    
    </div>
  )
}

export default AddProduct