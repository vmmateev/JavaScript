const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
};

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

describe('Tests', async function () {
    this.timeout(60000);

    let page, browser;

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 500 }); //Отваря истински браузър с await chromium.launch({headless:false});
        browser = await chromium.launch();
    });

    after(async () => {
        browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('loads and displays all books', async () => {
        //** хващай всички хостове 
        await page.route('**/jsonstore/collections/books*', (route, request) => {
            route.fulfill(json(mockData));
        })
        await page.goto('http://127.0.0.1:5500');

        await page.click('text=Load All Books'); //Ползваме нещо което се вижда по бутона / case insensitive

        await page.waitForSelector('text=Harry Potter'); //Чака докато се появи текста Harry Potter

        //Елемент handle да изпълним контекст в виртуалния браузър
        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent.trim())); //функция която playwright ще я вземе и ще я изпълни все едно сме отворили конзолата на браузъра и сме я изпълнили там
        console.log(rows);

        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Nakov');
    });

    it('can create book', async () => {
        await page.goto('http://127.0.0.1:5500');

        await page.fill('form#createForm >> input[name="title"]', 'Title');
        await page.fill('form#createForm >> input[name="author"]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit'),
        ]);

        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');

        await page.waitForTimeout(60000);

    });
})