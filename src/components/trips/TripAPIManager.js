export const getAllTripEntries = () => {
    return fetch(`  http://localhost:8088/trips`)
    .then(response => response.json())
}


///  http://localhost:8088/trips?_expand=create&_expand=user   ??