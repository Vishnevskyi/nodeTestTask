const {getEwork, getFilm, getPlanets, getVehicles, getStarships, getSpecies} = require("./get");
let selectEworks = async (ework) => {
    let data = [];
    let eworks = await getEwork();
    eworks.results.map((result) => (result.name === ework ? data.push(result) : ''));
    return await data;
}
let selectFilms = async (film) => {
    let data = [];
    let films = await getFilm();
    films.results.map((result) => (result.title ===  film ? data.push(result) : ''));
    return await data;
}
let selectPlanets = async (planet) => {
    let data = [];
    let planets = await getPlanets();
    planets.results.map((result) => (result.name ===  planet ? data.push(result) : ''));
    return await data;
}
let selectVehicles = async (vehicle) => {
    let data = [];
    let vehicles = await getVehicles();
    vehicles.results.map((result) => (result.name ===  vehicle ? data.push(result) : ''));
    return await data;
}
let selectSpecies = async (specie) => {
    let data = [];
    let species = await getSpecies();
    species.results.map((result) => (result.name ===  specie ? data.push(result) : ''));
    return await data;
}
let selectStarships = async (starship) => {
    let data = [];
    let starships = await getStarships();
    starships.results.map((result) => (result.name ===  starship ? data.push(result) : ''));
    return await data;
}
module.exports = {
    selectEworks,
    selectFilms,
    selectPlanets,
    selectSpecies,
    selectStarships,
    selectVehicles
};