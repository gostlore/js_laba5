var city1 = {
    "name":"ГородN",
    "population" : 10000000,

    getName() {
    return this.name;
    },

    exportStr() {
        return "name = " + this.name + "\npopulation = " + this.population + "\n";
    }
};

var city2 = {
    "name": "ГородM",
    "population": 10**6,

    getName() {
        return this.name;
    },

    exportStr() {
        return "name = " + this.name + "\npopulation = " + this.population + "\n";
    }
};

console.log(city1.getName())
console.log(city1.exportStr())

console.log(city2.getName())
console.log(city2.exportStr())