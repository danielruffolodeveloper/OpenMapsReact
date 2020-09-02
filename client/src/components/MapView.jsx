import React, { useState, useEffect } from 'react'
import { Map, TileLayer,Polyline } from 'react-leaflet';
import {JobMarkers} from './JobMarkers';

const MapView = ({data}) => {


    const [coordinates, setCoordinates] = useState();
    const [zoom, setZoom] = useState();




    useEffect(() => {
        setCoordinates({ lat: -37.840935, lng: 144.946457 })
        setZoom(12)
  
        }, [])

    return (

        <div className="row">
           <div className="col m-3">

           <Map center={ coordinates } zoom={zoom}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
              {/* <Polyline color="blue" positions={[["-37.897972"," 145.151382"]]} /> */}
              <JobMarkers data={data}/>

            </Map>

           </div>
        </div>
    
    )
}

export default MapView
