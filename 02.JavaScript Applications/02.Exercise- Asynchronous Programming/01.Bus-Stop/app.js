async function getInfo() {
    // read input values
    // make request to server
    // parse response data
    // display data
    // error checking request

    const stopId = document.getElementById(`stopId`).value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const stopNameElement = document.getElementById('stopName');
    const timetableElement = document.getElementById('buses');

    try {
        stopNameElement.textContent = 'Loading...';
        timetableElement.replaceChildren();

        const res = await fetch(url);
        // fetch(url).then(res => {                         //callback for response
        //     if (res.status != 200) {
        //         throw new Error('Stop ID not found');
        //     }
        //     return res.json();
        // })
        //     .then(date => {                                   //Callback for body
        //         stopNameElement.textContent = data.name;
        //         Object.entries(data.buses).forEach(b => {
        //             const liElement = document.createElement('li');
        //             liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

        //             timetableElement.appendChild(liElement);
        //         });
        //     })
        //     .catch(error => {                                //Callback for error
        //         stopNameElement.textContent = 'Error';
        //     });


        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }

        const data = await res.json(); //Всичко без боди(различно от status code 200) ще гръмне защото json ще пробва undefined

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timetableElement.appendChild(liElement);
        })
    } catch (error) {
        stopNameElement.textContent = 'Error';;
        //alert.apply(error.message);
    }
}