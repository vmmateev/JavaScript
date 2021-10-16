const { cinema } = require('./cinema');
const { expect } = require('chai');

describe("Tests …", function() {
    describe("showMovies", function() {
        it("empty array", function() {
            expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.")
        });
 
        it("array of movies", function() {
            expect(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])).to.be.equal("King Kong, The Tomorrow War, Joker");
        })
 
        it( "array of single movie", function() {
            expect(cinema.showMovies(["King Kong"])).to.be.equal("King Kong");
        })
    });
 
    describe("ticketPrice", function() {
        it ("Premiere price", function() {
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00);
        })
 
        it ("Normal price", function() {
            expect(cinema.ticketPrice("Normal")).to.be.equal(7.50);
        })
 
        it ("Discount price", function () {
            expect(cinema.ticketPrice("Discount")).to.be.equal(5.50);
        })
 
        it ("Invalid input", function() {
            expect(() => cinema.ticketPrice("Invalid")).to.throw("Invalid projection type.");
        })
 
        it ("Invalid input", function() {
            expect(() => cinema.ticketPrice("")).to.throw("Invalid projection type.");
        })
    });
    describe("swapSeatsInHall", function() {
        it("only 1 param given", function() {
            expect(cinema.swapSeatsInHall(1)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
 
        it("floating number given", function() {
            expect(cinema.swapSeatsInHall(1.25,5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it("greater than 20 number given", function() {
            expect(cinema.swapSeatsInHall(25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it("negative number given", function() {
            expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it("0 given as number", function() {
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it ("equal numbers", function() {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
 
        it("normal expected output", function() {
            expect(cinema.swapSeatsInHall(5, 10)).to.be.equal("Successful change of seats in the hall.");
        })
 
 
        it("1 and 2 numbers given", function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        })
 
        it ("both numbers out of range", function() {
            expect(cinema.swapSeatsInHall(25, 26)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it ("invalid param type", function() {
            expect(cinema.swapSeatsInHall("movie", null)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
 
        it ("only 1 param passed", function() {
            expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
    })
});