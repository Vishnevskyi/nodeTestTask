let fetch = require("node-fetch");
let getEwork = async () => {
        const request = await fetch(`${`https://swapi.dev/api/people/`}`);
        const json = await request.json();
        try {
            return json;
        } catch (error) {
            return error;
        }
}
let getPlanets = async () => {
    let request = await fetch(`${`https://swapi.dev/api/planets/`}`);
    const json = await request.json();
    try {
        return json;
    } catch (error) {
        return error;
    }
}
let getFilm = async () => {
    let request = await fetch(`${`https://swapi.dev/api/films/`}`);
    const json = await request.json();
    try {
        return json;
    } catch (error) {
        return error;
    }
}
let getVehicles = async () => {
    let request = await fetch(`${`https://swapi.dev/api/vehicles/`}`);
    const json = await request.json();
    try {
        return json;
    } catch (error) {
        return error;
    }
}

let getSpecies = async () => {
    let request = await fetch(`${`https://swapi.dev/api/species/`}`);
    const json = await request.json();
    try {
        return json;
    } catch (error) {
        return error;
    }
}

let getStarships = async () => {
    let request = await fetch(`${`https://swapi.dev/api/starships/`}`);
    const json = await request.json();
    try {
        return json;
    } catch (error) {
        return error;
    }
}
module.exports = {
    getEwork,
    getStarships,
    getVehicles,
    getSpecies,
    getFilm,
    getPlanets
};