import L from 'leaflet';

var markerSize = {'sm': [28, 35], 'md': [35, 44], 'lg': [42, 53]};
var markerAnchor = {'sm': [14, 35], 'md': [17, 44], 'lg': [21, 53]};
var markerPopupAnchor = {'sm': [1, -35], 'md': [1, -44], 'lg': [2, -53]};


export const MarkerIconStart = L.icon({
  iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-start-lg.png',
  iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/marker-start-lg@2x.png',
  iconSize: markerSize.lg,
  iconAnchor: markerAnchor.lg,
  popupAnchor: markerPopupAnchor.lg
});


export const MarkerIconfinish = L.icon({
  iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-end-lg.png',
    iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/marker-end-lg@2x.png',
    iconSize: markerSize.lg,
    iconAnchor: markerAnchor.lg,
    popupAnchor: markerPopupAnchor.lg
});