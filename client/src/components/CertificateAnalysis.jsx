import React, { useEffect, useState } from "react";
import styled from "styled-components";

const data = {
  "item_group": "Finished Product (FP)",
  "part_number": "10637",
  "item_name": "EDTA",
  "specification_number": "GC/SPECS/(FP)/10637/01/00",
  "batch_number": "10637/11/2021/000001",
  "created_by": "Vinodc",
  "approved_by": "Valmikb",
  "alternate_name": "Val",
  "manufacturing_date": "20-7-22",
  "date_of_analysis": "24-01-22",
  "retest_date": "26-03-22",
  "total_quantity": "100",
  "uom": "gram",
  "number_of_packs": "1",
  "quantity": "100",
  "total": "100"
};

const CertificateAnalysis = () => {
  // const [data, setData] = useState(null);
  const [numberPacks, setNumberPacks] = useState(data.number_of_packs);
  const [quantity, setQuantity] = useState(data.quantity);
  const [total, setTotal] = useState(numberPacks * quantity);

  useEffect(() => {
    setTotal(numberPacks * quantity);
  }, [numberPacks, quantity]);

  const handleNumberPacksChange = (e) => {
    setNumberPacks(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    // Fetch data from the backend
    // fetchData().then((response) => {
    //   setData(response.data); // Assuming the data is in the format { created_by: "", approved_by: "", item_group: "", part_number: "", item_name: "", alternate_name: "", specification_number: "", batch_number: "", manufacturing_date: "", date_of_analysis: "", retest_date: "", total_quantity: "", uom: "", number_of_packs: "", quantity: "", total: "" }
    // });
  }, []);

  return (
    <>
    <StyledForm style={{paddingInline : 20}}>
      <div className="form-row" >
        <div className="form-group col-md-6">
          <label htmlFor="Created by">Created by</label>
          <input type="text" className="form-control" id="Created by" value={data.created_by} readOnly />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Approved by">Approved by</label>
          <input type="text" className="form-control" id="Approved by" value={data.approved_by} readOnly />
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
            value={data.specification_number}
            readOnly
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Batch Number">Batch Number</label>
          <input type="text" className="form-control" id="Batch Number" value={data.batch_number} readOnly />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="Manufacturing date">Manufacturing date</label>
          <input type="text" className="form-control" id="Manufacturing date" value={data.manufacturing_date} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Date of Analysis">Date of Analysis</label>
          <input type="text" className="form-control" id="Date of Analysis" value={data.date_of_analysis} readOnly />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Retest date">Retest date</label>
          <input type="text" className="form-control" id="Retest date" value={data.retest_date} readOnly />
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
            className="form-control"
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
        <div className="form-group col-md-4">
          <label htmlFor="Number of packs">Number of packs</label>
          <input type="text" className="form-control" id="Number of packs" defaultValue={data.number_of_packs} onChange={handleNumberPacksChange} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Quantity">Quantity</label>
          <input type="text" className="form-control" id="Quantity" defaultValue={data.quantity} onChange={handleQuantityChange} />
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
    width: calc(30% - 10px);
  }

  .form-control {
    width: 100%;
  }
  .form-control {
    width: 100%;
    border-color: blue;

  }
`;


export default CertificateAnalysis;