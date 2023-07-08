import React, { useState } from "react";
import {Link , useNavigate} from 'react-router-dom'

const ItemSearched = (props)=>{
    const navigate = useNavigate()
    const SearchResult = (search,drop)=>{
    
        const result = props.item.filter((e)=>{
            
            return e[drop].toLowerCase().includes(search.toLowerCase())
           
        });
        console.log(result)
    
        return result
    }

    const handleClick = (product)=>{
        props.setProduct(product)
        navigate('/analysis')
        
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
                                    <th scope="row">{product.item_id}</th>
                                    <td><span onClick={()=>{handleClick(product)}} style={{color : "blue" , cursor : 'pointer'}} >{product.item_name}</span></td>
                                    <td>{product.part_number}</td>
                                    <td>{product.cas_number}</td>  
                                </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>

    )

}

export default ItemSearched;