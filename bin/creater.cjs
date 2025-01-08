const { faker } = require("@faker-js/faker")
const fs = require("fs")

const unique = {};
let data = {};
/** Vehicles ids *
data = { vehicles: {} }
for (var i = 0; i < 20; i++) {
    let name = "";
    let unq = true;
    do {
        name = faker.airline.airplane().name;
        if (!unique[name]) {
            unique[name] = name;
            unq = false;
        }
    } while (unq);

    data.vehicles[i] = {
        id: i,
        name: name,
        maxCargo: faker.number.float({ max: 600, fractionDigits: 2 }),
        maxSpeed: faker.number.float({ max: 600, min: 80, fractionDigits: 2 })
    }
}


fs.writeFileSync("./assets/vehicles.json", JSON.stringify(data))
/** */


/** Resources ids *
data = { resources: {} }
for (var i = 0; i < 15; i++) {
    let name = "";
    let unq = true;
    do {
        name = faker.commerce.productName();
        if (!unique[name]) {
            unique[name] = name;
            unq = false;
        }
    } while (unq);

    data.resources[i] = {
        id: i,
        name: name,
        mass: faker.number.float({ max: 200, fractionDigits: 2 }),       
    }
}


fs.writeFileSync("./assets/resources.json", JSON.stringify(data))
/** */

/**Cities to numbers *
const {cities} = require("../assets/cities.json")

data = {cities:cities.map((c)=>{
    return {
        ...c,
        lat: Number(c.lat),
        lon: Number(c.lon),
        pop: Number(c.pop)
    }
})}

fs.writeFileSync("./assets/cities.json", JSON.stringify(data))
/** */


/**Cities ids *
const {cities} = require("../assets/cities.json")

data = {cities:{}}

cities.map((c)=>{
    data.cities[c.id] = {
        id: c.id,
        lat: c.lat,
        lon: c.lon,        
    };
})

fs.writeFileSync("./assets/citiesids.json", JSON.stringify(data))
/** */

/** resources ids to lits *
const {resources} = require("../assets/resourcesids.json")
data = {resources: Object.values(resources)}

fs.writeFileSync("./assets/resources.json", JSON.stringify(data))

Object.values(resources).forEach(d=>{
    delete d.name;
})

data = {resources}

fs.writeFileSync("./assets/resourcesids.json", JSON.stringify(data))
/** */

/** vehicles ids to lits *
const {vehicles} = require("../assets/vehiclesids.json")
data = {vehicles: Object.values(vehicles)}

fs.writeFileSync("./assets/vehicles.json", JSON.stringify(data))

Object.values(vehicles).forEach(d=>{
    delete d.name;
})

data = {vehicles}

fs.writeFileSync("./assets/vehiclesids.json", JSON.stringify(data))
/** */


/** vehicles list to ids *
const {vehicles} = require("../assets/vehicles.json")
data = {vehicles: vehicles.reduce((ac, d)=>{
    delete d.name;
    delete d.type;
    ac[d.id]=d;
    return ac;
}, {})}

fs.writeFileSync("./assets/vehiclesids.json", JSON.stringify(data))
/** */


/*** Gamedata *
const {vehicles} = require("../assets/vehiclesids.json")
const {cities} = require("../assets/citiesids.json")
const {resources} = require("../assets/resourcesids.json")
const {companies} = require("../assets/companiesids.json")

data = {vehicles, cities, resources, companies }

fs.writeFileSync("./assets/gamedataids.json", JSON.stringify(data))
/** */

/** Packages *
const csvFilePath = './assets/worldcities.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((data2) => {

        data2.reduce((ac, c) => {
            if (c.capital == "primary") {
                ac.push({
                    id: c.id,
                    name: c.name,
                    lat: Number(c.lat),
                    lon: Number(c.lon),
                    pop: Number(c.pop),
                    countryId: c.iso2,
                    country: c.country,
                })
            }
            return ac;
        }, []).reduce((ac, m) => {
            if (ac[ac.length - 1].length >= 63) {
                ac.push([]);
            } else
                ac[ac.length - 1].push(m);
            return ac;

        }, [[]]).forEach((data, i, list) => {
            fs.writeFileSync(`./assets/cities_${i}.json`, JSON.stringify({ cities: data, next: list.length - 1 > i ? i + 1 : null }))
        });
    })
/** */

/**countries *
const { cities } = require("../assets/cities.json")

data = cities.reduce((ac, c) => {
    ac.coutries.push({
        id: c.countryId,
        name: c.country,
        capitalId: c.id
    })
    return ac;
}, { coutries: [] })



fs.writeFileSync("./assets/countries.json", JSON.stringify(data))
/** */