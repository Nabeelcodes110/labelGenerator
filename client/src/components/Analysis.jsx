import React, { useEffect, useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import Navbar2 from './Navbar2'



function Analysis(props) {
    console.log(props.product)
    const Navigate = useNavigate()
   
    const [selectedItemData , setSelectedItemData] = useState([])

    const handleClick = (obj)=>{
        props.setProduct(obj)
        Navigate('/certificate')
    }


    useEffect(()=>{
        props.setDropDown([{"value" : "batch_no" , "name" : "Batch Number"} , {"value" :"speci_number" , "name" :"Specification Number"}])
        const getSelectedItems = async (obj)=>{
            const responseData = await fetch("http://localhost:4000/api/v1/analysis?" +new URLSearchParams({         
                'item_name': obj.item_name,
                'part_number': obj.part_number,          
            }),{
                method:'GET',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                  },   
                  
              })
              .catch((err)=>console.log(err))
              
              const temp =  await responseData.json()
              setSelectedItemData(temp.data)
        }
        getSelectedItems(props.product)
    } ,[])
  return (
    <>
    <div style={{padding : 20}}>
       <table className="table">
                <thead className= "table-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Group</th>
                    <th scope="col">Part Number</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Specification Number</th>
                    <th scope="col">Batch No.</th>
                    <th scope="col">Creator</th>
                    <th scope="col">Approver</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        selectedItemData?.map((product , index) => {
                            return(
                                <tr>
                                    <tr scope="row">{index+1}</tr>
                                    <td>{product.item_group}</td>
                                    <td>{product.part_number}</td>
                                    <td>{product.item_name}</td>  
                                    <td>{product.speci_number}</td>  
                                    <td><span onClick={()=>handleClick(product)} style={{color : "blue" , cursor : 'pointer'}}>{product.batch_no}</span></td>  
                                    <td>{product.creator}</td>  
                                    <td>{product.approver}</td>  
                                </tr>
                        )})
                    }
                </tbody>
            </table>
    </div>
    </>
  )
}

export default Analysis
