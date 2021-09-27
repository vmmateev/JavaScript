//1.City Record
function cityRecord(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
    };
    return city;
}
// console.log(cityRecord('Tortuga',
//     7000,
//     15000
// ));

// console.log(cityRecord('Santo Domingo',
// 12000,
// 23500
// ));

//2.Town Population
function townPopulation(arrStr) {
    const towns = {};
    for (let town of arrStr) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );
// townPopulation(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// );

//3.City Taxes
function cityTaxes(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        },
    }
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);

//4.Object Factory
function factory(library, orders) {
    const result = [];

    for (let order of orders) {
        const current = Object.assign({}, order.template);
        for (let part of order.parts) {
            current[part] = library[part]
        }
        result.push(current);

    }
    return result
}

// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function () {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };

// const orders = [
//     {
//         template: { name: 'ACME Printer' },
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner' },
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo' },
//         parts: ['play']
//     }
// ];
// const products = factory(library, orders);
// console.log(products);

//5.Assembly Line
function createAssemblyLine() {
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },
        hasAudio: (car) => {
            car.currentTrack = {
                name: null,
                artist: null,
            }
            car.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: (car) => {
            car.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}
// const assemblyLine = createAssemblyLine();

// const myCar = {
//     make: 'Toyota',
//     model: 'Avensis'
// };
// assemblyLine.hasAudio(myCar);
// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);

// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();

// assemblyLine.hasParktronic(myCar);
// myCar.checkDistance(0.4);
// myCar.checkDistance(0.2);

// console.log(myCar);

//6.From JSON to HTML Table
function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    console.log(outputArr.join('\n'));

    function makeKeyRow(arr) {
        let result = '  <tr>';
        Object.keys(arr[0]).forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }

    function makeValueRow(obj) {
        let result = '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

// console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// ));
// console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
// "Score":4,
// " Grade":8},
// {"Name":"Gosho",
// "Score":5,
// " Grade":8},
// {"Name":"Angel",
// "Score":5.50,
// " Grade":10}]`
// ));
