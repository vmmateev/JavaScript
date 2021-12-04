class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
        // let participant = {
        //     name: name,
        //     condition: condition,
        //     power: 100,
        //     wins: 0
        // }
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(personName => personName.name === name)) { //personName => personName == name))
            return `The ${name} is already registered at the camp.`;
        }

        //money = Number(money);
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        let createParticipant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(createParticipant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const first = this.listOfParticipants.find(participant => participant.name === name);
        if (!first) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let indexOfParticipant = this.listOfParticipants.indexOf(first);
        this.listOfParticipants.splice(indexOfParticipant, 1);
        //this.listOfParticipants = this.listOfParticipants.filter(participant => !participant.name === name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame === 'WaterBalloonFights') { //get 2 participants
            const first = this.listOfParticipants.find(participant => participant.name === participant1);
            const second = this.listOfParticipants.find(participant => participant.name === participant2);

            //if (first.name !== participant1 || second.name !== participant2) { //
            if (!first || !second) { //
                throw new Error('Invalid entered name/s.');
            }
            // check for 2 participants  names
            if (first.condition !== second.condition) {
                throw new Error('Choose players with equal condition.');
            }
            //check to here

            // let first = this.listOfParticipants.find(player => player.name == participant1)
            // let second = this.listOfParticipants.find(player => player.name == participant2)

            if (first.power > second.power) {
                first.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (second.power > first.power) {
                second.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame === 'Battleship') { //get 1 participat
            //check name for 1 participant
            const first = this.listOfParticipants.find(participant => participant.name === participant1);
            //if (first.name !== participant1) {
            if (!first) {
                throw new Error('Invalid entered name/s.');
            }
            //let player = this.listOfParticipants.find(player => player.name == participant1)
            first.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach((e) => {
            result += `${e.name} - ${e.condition} - ${e.power} - ${e.wins}\n`
        });
        return result.trim();
    }
}

// let test = new SummerCamp('ivan', 'sofia');
// console.log(test.registerParticipant('ivan', 'child', 150));
// console.log(test.registerParticipant('draga', 'child', 150));
// console.log(test.listOfParticipants.join(', '));
// //console.log(test.unregisterParticipant('ivan'));
// console.log(test.listOfParticipants.join(', '));
// console.log(test.toString());


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// //console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinsons", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());
