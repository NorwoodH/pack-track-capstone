export const getAllGearEntries = () => {
    return fetch(`  http://localhost:8088/gear`)
    .then(response => response.json())
}