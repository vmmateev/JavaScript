const expect = require('chai').expect;
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    describe("Test name", () => {
        it("Not string name", () => {
            expect(() => new PaymentPackage(10, 11)).to.Throw("Name must be a non-empty string");
        });

        it("Empty name", () => {
            expect(() => new PaymentPackage('', 11)).to.Throw("Name must be a non-empty string");
        });

        it("test name", () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.name).to.equal('test');
        });

        it("test manual name", () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.name = 'newName').to.equal('newName');
        });
    })

    describe("Test value", () => {
        it("Not number value", () => {
            expect(() => new PaymentPackage("Name", "not a number")).to.Throw("Value must be a non-negative number");
        });
        it("Negatvive number value", () => {
            expect(() => new PaymentPackage("Name", -1)).to.Throw("Value must be a non-negative number");
        });
        it("Correct  value", () => {
            let newPayment = new PaymentPackage("test", 20);
            expect(newPayment.value).to.equal(20);
        });
        it("Correct value manual change", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(newPayment.value = 2).to.equal(2);
        });
    });

    describe("VAT value test", () => {
        it("String VAT value", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(() => newPayment.VAT = "test").to.Throw("VAT must be a non-negative number");
        });
        it("Negatvive number value", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(() => newPayment.VAT = -1).to.Throw("VAT must be a non-negative number");
        });
        it("Correct VAT value", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(newPayment.VAT).to.equal(20);
        });

        it("Correct VAT value", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(newPayment.VAT = 1).to.equal(1);
        });
    });

    describe("Active status test", () => {
        it("Active status true", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(newPayment.active).to.equal(true);
        });
        it("Active status not boolean", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(() => newPayment.active = "test").to.Throw("Active status must be a boolean");
        });
        it("Active status false", () => {
            let newPayment = new PaymentPackage("test", 1);
            expect(newPayment.active = false).to.equal(false);
        });
    });

    describe("toString method", () => {
        it("toString method 1", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960");
        });

        it("toString method Active False", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            newPayment.active = false;
            expect(newPayment.toString()).to.be.equal("Package: Consultation (inactive)\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960");
        });

        it("toString method Vat = 0 ", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            newPayment.VAT = 0;
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 0%): 800");
        });

        it("toString method 1", () => {
            let newPayment = new PaymentPackage("Consultation", 0);
            newPayment.VAT = 0;
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0");
        });
    });
});