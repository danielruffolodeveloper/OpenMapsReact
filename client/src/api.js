export const Search = (e,apiKey) => fetch(`http://open.mapquestapi.com/nominatim/v1/search.php?key=${apiKey}&format=json&q=${e}`).then(res => res.json())
