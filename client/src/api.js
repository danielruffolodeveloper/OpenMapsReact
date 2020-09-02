export const Search = (e) => fetch(`http://open.mapquestapi.com/nominatim/v1/search.php?key=&format=json&q=${e}`).then(res => res.json())
