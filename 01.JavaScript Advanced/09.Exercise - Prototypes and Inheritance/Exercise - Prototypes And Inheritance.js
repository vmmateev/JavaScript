//01.Array Extension
(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        const result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.take = function (n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((a, b) => {
            return a + b;
        }, 0)
    }

    Array.prototype.average = function () {
        return this.reduce((a, b) => {
            return a + b / this.length
        }, 0)
    }
})();

// let arr = [1, 2, 3, 12];
// console.log(arr.last());

//02.String Extension
(function () {
    String.prototype.ensureStart = function (str) {
        let toStr = this.toString();
        if (toStr.startsWith(str)) {
            return toStr;
        } else {
            return str + toStr;
        }
    }
    String.prototype.ensureEnd = function (str) {
        let toStr = this.toString();
        if (toStr.endsWith(str)) {
            return toStr;
        } else {
            return toStr + str;
        }
    }

    String.prototype.isEmpty = function () {
        return this.length == 0;
    }

    String.prototype.truncate = function (n) {
        const toStr = this.toString();
        if (this.length <= n) {
            return this.toString();
        }
        if (this.length < 4) {
            let str = toStr.substr(0, this.length - n);
            str = str + ".".repeat(n);
            return str;
        } else {
            const splitted = toStr.split(" ");
            if (splitted.length == 1) {
                return toStr.substr(0, n - 3) + "...";
            } else {
                let result = "";
                for (let i = 0; i < splitted.length; i++) {
                    if (result.length + splitted[i].length <= n - 3) {
                        result += " " + splitted[i];
                    } else {
                        return result.trim() + "...";
                    }
                }
                return result + "...";
            }
        }
    }

    String.format = function (str, ...params) { //params = [5,7,12];
        // let result = str.substring(0, str.indexOf(`{${0}}`));
        let result = str;
        //"Ivan{1} Ivanov"

        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    }
})();

// let str = 'my string';
// console.log(str);
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
//     console.log(str);
// str = String.format('jumps {0} {1}',
//     'dog');
// console.log(str);


//03.Extensible Object
function extensibleObject() {
    return {
        extend: function (template) {
            let objProto = Object.getPrototypeOf(this);
            let templateEntries = Object.entries(template);

            for (const [key, value] of templateEntries) {
                if (typeof value == 'function') {
                    objProto[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    }
}

// const myObj = extensibleObject();

// const template = {
//     extensionMethod: function () { },
//     extensionProperty: 'someString'
// }
// myObj.extend(template);

//04.Balloons
function solution() {

    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight); //Необходимо е за да извика конструктора на супер класа тоест на Balloon
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}

// let classes = solution();
// let testBalloon = new classes.Balloon("Tumno-bqlo", 20.5);
// let testPartyBalloon = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
// let ribbon = testBalloon.ribbon;
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);


//05.People
function solution5() {

    class Employee {
        constructor(name, age) {
            if (new.target == Employee) {
                throw new Error("Cannot initialize Employee.It is an Abstract class.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.currentTask = 0;
        }

        work() {
            console.log(this.tasks[this.currentTask]);
            this.currentTask += 1;
            if (this.tasks.length - 1 < this.currentTask) {
                this.currentTask = 0;
            }
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`];
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    return { Employee, Junior, Senior, Manager }
}

// const classes = solution5();
// const junior = new classes.Junior('Ivan', 25);

// junior.work();
// junior.work();


// junior.salary = 5811;
// junior.collectSalary();

// const sinior = new classes.Senior('Alex', 31);

// sinior.work();
// sinior.work();
// sinior.work();
// sinior.work();

// sinior.salary = 12050;
// sinior.collectSalary();

// const manager = new classes.Manager('Tom', 55);

// manager.salary = 15000;
// manager.collectSalary();
// manager.dividend = 2500;
// manager.collectSalary();


//06.Posts
function solution6() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(str) {
            this.comments.push(str);
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length == 0) {
                return result;
            }
            result += "\nComments:";

            this.comments.forEach((comment) => {
                result += `\n * ${comment}`;
            })
            return result;
        }
    }


    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this; //instance.view().view().view()
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return { Post, BlogPost, SocialMediaPost }
}


const classes = solution6();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

    //07.Computer * (not included in final score)
