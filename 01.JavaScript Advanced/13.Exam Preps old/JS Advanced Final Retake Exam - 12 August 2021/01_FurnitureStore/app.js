window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addItem);

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    const buttonsMoreInfo = document.querySelectorAll('button');

    function addItem(event) {
        event.preventDefault();

        if (modelField.value != '' && descriptionField.value != ''
            && priceField.value > 0 && yearField.value > 0) {

            let tr = document.createElement('tr');
            tr.className = 'info';
            furnitureList.appendChild(tr);
            const priceValue = Number(priceField.value);

            tr.innerHTML = `<td>${modelField.value}</td>
                             <td>${priceValue.toFixed(2)}</td>
                             <td>
                             <button class="moreBtn">More Info</button>
                             <button class="buyBtn">Buy it</button>
                             </td>`;

            let hideTr = document.createElement('tr');
            hideTr.className = 'hide';
            furnitureList.appendChild(hideTr);
            hideTr.innerHTML = `<td>Year: ${yearField.value}</td>
                                <td colspan="3">Description: ${descriptionField.value}</td>`;

            const moreBtn = tr.querySelector('.moreBtn');
            moreBtn.addEventListener('click', moreInfo);

            const buyBtn = tr.querySelector('.buyBtn');
            buyBtn.addEventListener('click', buyAction);
        }

        document.querySelector('form').reset()
    }

    function moreInfo(e) {
        const moreInfo = e.target.parentElement.parentElement.nextElementSibling;

        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info'
            moreInfo.style.display = 'contents';
        } else {
            e.target.textContent = 'More Info'
            moreInfo.style.display = 'none';
        }
    }

    function buyAction(e) {
        let tr = e.target.parentElement.parentElement;
        let hideTr = tr.nextElementSibling;

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        e.target.parentElement.parentElement.nextSibling.innerHTML = '';
        e.target.parentElement.parentElement.innerHTML = '';
    }

}
