import React, { useState } from "react";
import { Search } from "../api"
import MapView from '../components/MapView';

const FormView = () => {

   
    var [searchItemsFrom, setSearchItemsFrom] = useState([])
    var [searchItemsTo, setSearchItemsTo] = useState([])
    var [apiKey, setApiKey] = useState('')

    const searchHandelerFrom = (e) => {
        const fetchItems = async () => {
          const searchResult = await Search(e,apiKey)
          setSearchItemsFrom(searchResult)

        }
        fetchItems(e)
      }

      const searchHandelerTo = (e) => {
        const fetchItems = async () => {
          const searchResult = await Search(e,apiKey)
          setSearchItemsTo(searchResult)
        }
        fetchItems(e)
      }


    return (
        <div className="row">
            <div className="col">
                <p>Form View</p>

                <form>

                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">API Key</label>
                        <input value={apiKey} onChange={e => setApiKey(e.target.value)} type="search" className="form-control" id="apikey" aria-describedby="apikey"/>
                        <small id="apikey" className="form-text text-muted">Click Here to get a API key.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Deliver From</label>
                        <input onChange={event => searchHandelerFrom(event.target.value)} type="search" className="form-control" id="deliverfrom" aria-describedby="deliverfrom"/>
                        <small id="deliverfrom" className="form-text text-muted">Enter Address to Pickup From.</small>
                        <ul className="list-group list-group-flush">

                        {searchItemsFrom.map(item => (
                <div className="list-group" key={item.place_id}>
                  <li className="list-group-item" >{item.display_name}</li>
                </div>
                ))
              }
                         
                        </ul>
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Deliver To</label>
                        <input onChange={event => searchHandelerTo(event.target.value)} type="search" className="form-control" id="deliverto" aria-describedby="deliverti"/>
                        <small id="emailHelp" className="form-text text-muted">Enter Address to Deliver To.</small>

                        <ul className="list-group list-group-flush">

{searchItemsTo.map(item => (
<div className="list-group" key={item.place_id}>
<li className="list-group-item" key={item.place_id}>{item.display_name}</li>
</div>
))
}
 
</ul>

                    </div>
                
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                </form>
                
            </div>
            <div className="col">
                <MapView/>
            </div>
        </div>
    )
}

export default FormView
