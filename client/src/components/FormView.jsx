import React, { useState } from "react";
import { Search,Directions } from "../api"
import MapView from '../components/MapView';

const FormView = () => {

   
    var [deliverFrom, setDeliverFrom] = useState('')
    var [deliverTo, setDeliverTo] = useState('')
    var [searchItemsFrom, setSearchItemsFrom] = useState([])
    var [searchItemsTo, setSearchItemsTo] = useState([])
    var [apiKey, setApiKey] = useState('')
    var [pois, setPOIs] = useState([])



    const searchHandelerFrom = (e) => {
        const fetchItems = async () => {
          const searchResult = await Search(e,apiKey)
          console.log(searchResult)
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

      function setStartPos(obj) {
        setDeliverFrom(obj.display_name)
        setPOIs([...pois, obj]);
        console.log(pois)
        setSearchItemsFrom([])

      }

      function setEndPos(obj) {
        setDeliverTo(obj.display_name)
        setPOIs([...pois, obj]);
        console.log(pois)
        setSearchItemsTo([])      
      }

      const calculateHandeler = () => {
          console.log(deliverFrom,deliverTo)
        const fetchItems = async () => {
          const Result = await Directions(deliverFrom,deliverTo,apiKey)
          var body = await Result.json();

          console.log(body)
        }
        fetchItems()
      }

      


    return (
        <div className="row">
            <div className="col-3">
                <p>Form View</p>

                <form>

                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">API Key</label>
                        <input value={apiKey} onChange={e => setApiKey(e.target.value)} type="search" className="form-control" id="apikey" aria-describedby="apikey"/>
                        <small id="apikey" className="form-text text-muted">Click Here to get a API key.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Deliver From</label>
                        <input  onChange={event => searchHandelerFrom(event.target.value)} type="search" className="form-control" id="deliverfrom" aria-describedby="deliverfrom"/>
                        <small id="deliverfrom" className="form-text text-muted">Enter Address to Pickup From.</small>
                        <ul className="list-group list-group-flush">

                        {searchItemsFrom.map(item => (
                <div className="list-group" key={item.place_id}>
                  <li onClick={() => setStartPos(item)} className="list-group-item" >{item.display_name}</li>
                </div>
                ))
              }
                         
                        </ul>
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Deliver To</label>
                        <input  onChange={event => searchHandelerTo(event.target.value)} type="search" className="form-control" id="deliverto" aria-describedby="deliverti"/>
                        <small id="emailHelp" className="form-text text-muted">Enter Address to Deliver To.</small>

                        <ul className="list-group list-group-flush">

                            {searchItemsTo.map(item => (
                                <div className="list-group" key={item.place_id}>
                                <li onClick={() => setEndPos(item)} className="list-group-item" key={item.place_id}>{item.display_name}</li>
                                </div>))
                            }
                            
                        </ul>

                    </div>

                    <div className="form-group">
                        <button onClick={() => calculateHandeler()} type="button" className="btn btn-primary">Calculate</button>

                    </div>
                
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                </form>
                
            </div>
            <div className="col-9">
                <MapView data={pois}/>
            </div>
        </div>
    )
}

export default FormView
