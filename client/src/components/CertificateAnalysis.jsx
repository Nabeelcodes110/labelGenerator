import React, { useEffect, useState } from "react";
import styled from "styled-components";


const CertificateAnalysis = (props) => {
  const [data, setData] = useState({
    "creator" : "",
    "approver" : "",
    "item_group" : "",
    "part_number" :"",
    "item_name" :"",
    "alternate_name" : "",
    "speci_number" : "",
    "batch_no" : "",
    "creation_date" : "",
    "approval_date" : "",
    "updation_date" : "",
    "total_quantity" : "",
    "uom" : "",
    "number_of_packs" : "",
    "quantity" : ""
  });
  const [numberPacks, setNumberPacks] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(numberPacks * quantity);

  console.log(props.product.creator)

  useEffect(() => {
    setTotal(numberPacks * quantity);
    const getCertificate = async (obj)=>{
      const responseData = await fetch("http://localhost:4000/api/v1/analysis/certificate?"+ new URLSearchParams({         
        'batch_no': obj.batch_no         
    }) ,{
          method:'GET',
          headers:{
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }, 
            
        })
        .catch((err)=>console.log(err))
        
        const temp =  await responseData.json()
        setData(temp.data)
        console.log(temp.data);
  }
  getCertificate(props.product)
  }, [numberPacks, quantity]);
  // useEffect(() => {
    
  // }, []);

  const handleNumberPacksChange = (e) => {
    setNumberPacks(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

 

  return (
    <>
    <StyledForm style={{paddingInline : 20}}>
      <div className="form-row" >
        <div className="form-group col-md-6">
          <label htmlFor="Created by">Created by</label>
          <input type="text" className="form-control" id="Created by" value={data.creator} readOnly />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Approved by">Approved by</label>
          <input type="text" className="form-control" id="Approved by" value={data.approver} readOnly />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="Item Group">Item Group</label>
          <input type="text" className="form-control" id="Item Group" value={data.item_group} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Part Number">Part Number</label>
          <input type="text" className="form-control" id="Part Number" value={data.part_number} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Item Name">Item Name</label>
          <input type="text" className="form-control" id="Item Name" value={data.item_name} readOnly />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="Alternate Name">Alternate Name</label>
          <input type="text" className="form-control" id="Alternate Name" value={data.alternate_name} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Specification number">Specification number</label>
          <input
            type="text"
            className="form-control"
            id="Specification number"
            value={data.speci_number}
            readOnly
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Batch Number">Batch Number</label>
          <input type="text" className="form-control" id="Batch Number" value={data.batch_no} readOnly />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="Manufacturing date">Manufacturing date</label>
          <input type="text" className="form-control" id="Manufacturing date" value={data.creation_date} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Date of Analysis">Date of Analysis</label>
          <input type="text" className="form-control" id="Date of Analysis" value={data.approval_date} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Retest date">Retest date</label>
          <input type="text" className="form-control" id="Retest date" value={data.updation_date} readOnly />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="Total Quantity">Total Quantity</label>
          <input type="text" className="form-control" id="Total Quantity" value={data.total_quantity} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="UOM">UOM</label>
          <select
            className="form-control editable"
            id="UOM"
            defaultValue={data.uom}
            onChange={(e) => {
              const selectedUOM = e.target.value;
              // Do something with the selectedUOM value
            }}
          >
            <option value="grams">grams</option>
            <option value="kilograms">kilograms</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 ">
          <label htmlFor="Number of packs">Number of packs</label>
          <input type="text" className="form-control editable" id="Number of packs" defaultValue={data.number_of_packs} onChange={handleNumberPacksChange} />
        </div>
        <div className="form-group col-md-4 ">
          <label htmlFor="Quantity">Quantity</label>
          <input type="text" className="form-control editable" id="Quantity" defaultValue={data.quantity} onChange={handleQuantityChange} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Total">Total</label>
          <input type="text" className="form-control" id="Total" value={total} readOnly/>
        </div>
      </div>
    </StyledForm>
    </>
  );
};

const StyledForm = styled.form`

  .form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .form-row .form-group {
    width: calc(33% - 10px);
  }

  .form-control {
    width: 100%;
  }
  .form-control {
    width: 100%;

  }
  .editable {
    border-color : green
  }
`;


export default CertificateAnalysis;