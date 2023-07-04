import React, { useState } from "react";
import {Link} from 'react-router-dom'



const ItemSearched = (props)=>{

    const SearchResult = (search,drop)=>{
        console.log(props.item)
    
        const result = props.item.filter((e)=>{
            
            return e[drop].toLowerCase().includes(search.toLowerCase())
           
        });
        console.log(result)
    
        return result
    }

    const products = props.searchvalue=="" ? props.item : SearchResult(props.searchvalue,props.dropvalue)


    console.log(products)
    
    return(
        <div>   
            <table className="table">
                <thead className= "table-light">
                    <tr>
                    <th scope="col">Item Id</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Product Code</th>
                    <th scope="col">CAS Number</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        products?.map((product) => {
                            return(
                                <tr>
                                    <Link to='/analysis' style={{ textDecoration: 'none'}}>
                                    <th scope="row">{product.item_id}</th>
                                    <td>{product.item_name}</td>
                                    <td>{product.part_number}</td>
                                    <td>{product.cas_number}</td>  
                                    </Link>
                                </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>


    )

}

export default ItemSearched;