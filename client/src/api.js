export const Search = (e,apiKey) => fetch(`http://open.mapquestapi.com/nominatim/v1/search.php?key=${apiKey}&format=json&q=${e}`).then(res => res.json())

export const Directions = (from,to,apiKey) => fetch(`http://open.mapquestapi.com/guidance/v2/route?key=${apiKey}&from=${from}&to=${to}`)

