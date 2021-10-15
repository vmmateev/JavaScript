const { testNumbers } = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () => {

    describe('sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });

        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
        });

        it('works with floating numbers', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89');
        });

        it('returns undefined with string parameter', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        });

        it('returns undefined with invalid parameter', () => {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
        });
    });

    describe('numberChecker', () => {
        it('works with odd values', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });
        it('works with even values', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });
        it('works with odd value as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });
        it('works with even value as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it('detect invalid parameters', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('averageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        describe('averageSumArray', () => {
            it('works with integers', () => {
                expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
            });
        });
    });
});