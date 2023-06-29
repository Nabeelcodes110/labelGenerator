import React from "react";


const ItemSearched = (props)=>{
    


    const SearchResult = (search,drop)=>{
        console.log(props.item)

        const result = props.item.filter((e)=>{
            
            return e[drop].toLowerCase().includes(search.toLowerCase())
           
        });
        console.log(result)
        return(
            <div>
            

               { result.map((res) => (
                <div className="search-result">
                <div>{res.item_id}</div>
                <div>{res.item_name}</div>                 
                <div>{res.part_number}</div>
                <div>{res.cas_number}</div> 
                </div> 


        )) }
        
        </div>)
    }

    return(
        <div>
        
            {props.dropvalue}
            {props.searchvalue}

            <div className="search-result table-header">
                <div>Item id </div>
                <div>Item Name</div>                 
                <div>Part Code</div>
                <div>cas Number</div>

            </div>

            { props.searchvalue==""?props.item?.map((res) => (
                <div className="search-result">
                <div>{res.item_id}</div>
                <div>{res.item_name}</div>                 
                <div>{res.part_number}</div>
                <div>{res.cas_number}</div>
                
                </div>




)):SearchResult(props.searchvalue,props.dropvalue)
}
        </div>


    )

}

export default ItemSearched;