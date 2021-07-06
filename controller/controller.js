const {selectEworks, selectFilms, selectPlanets, selectVehicles, selectSpecies, selectStarships} = require("../functions/select");
const fetch = require("node-fetch");
exports.selectEwork = async (req, res) => {    
    res.status(200).json({
        ework: await selectEworks(req.body.ework)
    });
}
exports.selectFilm = async (req, res) => {    
    res.status(200).json({
        film: await selectFilms(req.body.film)
    });
}
exports.selectPlanet = async (req,res) => {
    res.status(200).json({
        planet: await selectPlanets(req.body.planet)
    });
}
exports.selectVehicle = async (req,res) => {
    res.status(200).json({
        vehicle: await selectVehicles(req.body.vehicle)
    });
}
exports.selectSpecie = async (req,res) => {
    res.status(200).json({
        specie: await selectSpecies(req.body.specie)
    });
}
exports.selectStarship = async (req,res) => {
    res.status(200).json({
        starship: await selectStarships(req.body.starship)
    });
} 
exports.getFilm = async (req,res) => {
    let request = await fetch(`${`https://swapi.dev/api/films/${req.body.film}/`}`);
    let json = await request.json();
    console.log(json);
    res.status(200).json({
        film: json
    });
}
exports.getVehicles = async (req,res) => {
    let request = await fetch(`${`https://swapi.dev/api/vehicles/${req.body.vehicle}/`}`);
    let json = await request.json();
    console.log(json);
    res.status(200).json({
        vecicles : json
    });
}

exports.getSpecies = async (req,res) => {
    let request = await fetch(`${`https://swapi.dev/api/species/${req.body.specie}/`}`);
    let json = await request.json();
    console.log(json);
    res.status(200).json({
        species: json
    });
}

exports.getStarships = async (req,res) => {
    let request = await fetch(`${`https://swapi.dev/api/starships/${req.body.starship}/`}`);
    let json = await request.json();
    console.log(json);
    res.status(200).json({
        starships: json
    });
}