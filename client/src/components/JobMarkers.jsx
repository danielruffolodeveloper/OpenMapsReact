import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {MarkerIconStart,MarkerIconfinish} from './MarkerIcon';

export const JobMarkers = (props) => {
  const { data } = props;
//   const arrMarkers = [venues]

  console.log('here',data)


  const markers_from = data.map((mkr, index) => (
    <Marker key={index} 
            position ={
                       [
                        mkr.lat,
                        mkr.lon
                       ]
                      }
                    icon={MarkerIconStart} >
              {/* <JobPopup data={venues}/> */}
    </Marker>
    
  ));

  



                    return <Fragment>{markers_from}</Fragment>
};

