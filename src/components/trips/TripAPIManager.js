export const getAllTripEntries = () => {
    return fetch(`  http://localhost:8088/trips`)
    .then(response => response.json())
}