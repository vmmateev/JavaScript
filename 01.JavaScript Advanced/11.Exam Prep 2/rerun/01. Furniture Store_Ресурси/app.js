window.addEventListener('load', solve);

function solve() {
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');

    const addButton = document.getElementById('add');

    addButton.addEventListener('click', addFurniture);

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');


    function addFurniture(event) {
        event.preventDefault();
        const yearValue = Number(yearElement.value);
        const priceValue = Number(priceElement.value);

        if (modelElement.value != '' && yearValue > 0 && descriptionElement.value != '' && priceValue > 0) {
            const tr = document.createElement('tr');
            tr.classList.add('info');
            tr.innerHTML = `<td>${modelElement.value}</td>
            <td>${priceValue.toFixed(2)}</td>
            <td>
            <button class="moreBtn">More Info</button>
            <button class="buyBtn">Buy it</button>
            </td>`;

            const hideTr = document.createElement('tr');
            hideTr.classList.add("hide");
            hideTr.innerHTML = `<td>Year: ${yearElement.value}</td>
            <td colspan="3">Description: ${descriptionElement.value}</td>`;

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const buttonsMoreInfo = tr.querySelectorAll('button');

            buttonsMoreInfo[0].addEventListener('click', moreInfo);
            buttonsMoreInfo[1].addEventListener('click', buyFurniture);
        }
    }


    modelElement.value = '';
    yearElement.value = '';
    descriptionElement.value = '';
    priceElement.value = '';

    function moreInfo(event) {
        const hideTr = event.target.parentElement.parentElement.nextElementSibling;

        if (event.target.textContent == "More Info") {
            event.target.textContent = "Less Info";
            hideTr.style.display = "contents";
        } else {
            event.target.textContent = "More Info";
            hideTr.style.display = "none";
        }
    }
    function buyFurniture(event) {
        const tr = event.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }
}
