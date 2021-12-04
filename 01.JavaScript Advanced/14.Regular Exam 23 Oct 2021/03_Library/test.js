
const { library } = require('./library'); //пътя до файла
const { expect } = require('chai');
describe('Unit test of library.js', function () {
    describe('calcPriceOfBook', function () {
        it('invalid input => throw error', function () {
            expect(() => library.calcPriceOfBook({}, 1985)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook([], 1985)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook()).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook(1985)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook(11, 1985)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('ime', 'godina')).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('ime na kniga')).to.throw("Invalid input");
        });
        it('50% discount when year <= 1980', () => {
            expect(library.calcPriceOfBook('Book1', 1970)).to.be.equal('Price of Book1 is 10.00');
            expect(library.calcPriceOfBook('Book1', 1979)).to.be.equal('Price of Book1 is 10.00');
            expect(library.calcPriceOfBook('Book1', 1970)).to.be.equal('Price of Book1 is 10.00');
            expect(library.calcPriceOfBook('Book1', 1980)).to.be.equal('Price of Book1 is 10.00');
        });
        it('no discount when year > 1980', () => {
            expect(library.calcPriceOfBook('Book1', 1981)).to.be.equal('Price of Book1 is 20.00');
            expect(library.calcPriceOfBook('Book1', 1985)).to.be.equal('Price of Book1 is 20.00');
            expect(library.calcPriceOfBook('Book1', 2000)).to.be.equal('Price of Book1 is 20.00');
        });
    });

    describe('findBook', function () {
        it('throw error => if empty arr', function () {
            expect(() => library.findBook([], 'Book1')).to.throw("No books currently available");
        });
        it('book is in arr', () => {
            expect(library.findBook(['Book1'], 'Book1')).to.be.equal("We found the book you want.");
            expect(library.findBook(['Book1', 'Book2'], 'Book1')).to.be.equal("We found the book you want.");
            expect(library.findBook(['Book1', 'Book2', 'Book3'], 'Book1')).to.be.equal("We found the book you want.");
        });
        it('book is not in the arr', () => {
            expect(library.findBook(['Book1'], 'Book99')).to.be.equal("The book you are looking for is not here!");
            expect(library.findBook(['Book1', 'Book2'], 'NoBook')).to.be.equal("The book you are looking for is not here!");
            expect(library.findBook(['Book1', 'Book2', 'Book3'], 'NoBook')).to.be.equal("The book you are looking for is not here!");
        });
    });

    describe('arrangeTheBooks', function () {
        it('invalid input => throw error', function () {
            expect(() => library.arrangeTheBooks()).to.throw();
            expect(() => library.arrangeTheBooks('Book1')).to.throw();
            expect(() => library.arrangeTheBooks(-100)).to.throw();
            expect(() => library.arrangeTheBooks(-20)).to.throw();
            expect(() => library.arrangeTheBooks(-1)).to.throw();
        });
        it('valid input => Great job', () => {
            expect(library.arrangeTheBooks(5)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(10)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(20)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(30)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });
        it('more of 40 => no space', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(50)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(60)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(78)).to.be.equal("Insufficient space, more shelves need to be purchased.");
        })
    });
});