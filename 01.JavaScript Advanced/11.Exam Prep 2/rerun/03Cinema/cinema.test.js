const { cinema } = require('./cinema');
const { expect } = require('chai');

describe('Cinema.js unit testing', function () {

    describe('showMovies testing', function () {
        it('Valid array of strings/ movies', function () {
            expect(cinema.showMovies(['King Kong', 'Joker', 'Show time23'])).to.be.equal('King Kong, Joker, Show time23');
        });
        it('Valid array of strings/ movies = 1 movie', function () {
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
        it('Valid array of  empty string', function () {
            expect(cinema.showMovies([''])).to.be.equal('');
        });

        it('Invalid arr length 0', function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

    });

    describe('ticketPrice testing', function () {
        it('Valid projection type string Premiere', function () {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });
        it('Valid projection type string Normal', function () {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });
        it('Valid projection type string Discount', function () {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('invalid projection type wrong string', function () {
            expect(() => cinema.ticketPrice('test')).to.throw("Invalid projection type.");
        });

        it('invalid projection type empty string', function () {
            expect(() => cinema.ticketPrice('')).to.throw("Invalid projection type.");
        });
        it('invalid projection type null', function () {
            expect(() => cinema.ticketPrice(null)).to.throw();
        });
    });

    describe('swapSeatsInHall testing', function () {
        it('Valid swapSeatsInHall seats to change', function () {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 19)).to.be.equal('Successful change of seats in the hall.');
        });

        it('Invalid swapSeatsInHall 1 param', function () {
            expect(cinema.swapSeatsInHall(2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('Invalid swapSeatsInHall 2 param one of them string', function () {
            expect(cinema.swapSeatsInHall(2, '3')).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall 0 param', function () {
            expect(cinema.swapSeatsInHall()).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall string param', function () {
            expect(cinema.swapSeatsInHall('1', '2')).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall first param < 0 ', function () {
            expect(cinema.swapSeatsInHall(-1, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param < 0 ', function () {
            expect(cinema.swapSeatsInHall(1, -2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall both param < 0 ', function () {
            expect(cinema.swapSeatsInHall(-1, -2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall first param > 20 ', function () {
            expect(cinema.swapSeatsInHall(21, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param > 20 ', function () {
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall equal params', function () {
            expect(cinema.swapSeatsInHall(1, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall first param double', function () {
            expect(cinema.swapSeatsInHall(1.3, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param double', function () {
            expect(cinema.swapSeatsInHall(1, 1.2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param double', function () {
            expect(cinema.swapSeatsInHall(1.3, 1.2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall first param null', function () {
            expect(cinema.swapSeatsInHall(null, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param null', function () {
            expect(cinema.swapSeatsInHall(2, null)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall second param 0', function () {
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Invalid swapSeatsInHall first param 0', function () {
            expect(cinema.swapSeatsInHall(0, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
    });
});


