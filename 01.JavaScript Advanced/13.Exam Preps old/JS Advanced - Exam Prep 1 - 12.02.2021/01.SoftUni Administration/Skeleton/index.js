function solve() {
    let buttonElement = document.querySelector('.admin-view .action button'); //Взимат се възможно най уникалните атрибути
    let modules = {};
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]'); //Търсим по атрибут инпут който има name равен на съответния в кавички
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value == 'Select module') {
            return;
        }

        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];
        }
        let currentLecture = { name: lectureNameElement.value, date: formatDate(lectureDateElement.value) };
        modules[lectureModuleElement.value].push(currentLecture);

        createTrainings(modules);

    });

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';

        for (const moduleName in modules) {
            let moduleElement = createModule(moduleName);
            let lectureListElement = document.createElement('ul');
            //Sort lectures
            let lectures = modules[moduleName];
            lectures.sort((a, b) => a.date.localeCompare(b.date));
            //Може да се чайнне .sort(...).forEach(...)
            lectures.forEach((lecture) => { //<-- Може да се деструктурира със ({name, date}) =>
                let lectureElement = createLecture(lecture.name, lecture.date)
                lectureListElement.appendChild(lectureElement);

                let deleteButtonElement = lectureElement.querySelector('button');

                deleteButtonElement.addEventListener('click', (e) => {
                    e.currentTarget.parentNode.remove();
                    modules[moduleName] = modules[moduleName]   //filter връща нова инстанция за това правим презапис със modules[moduleName] = modules[moduleName].filter 
                        .filter(x => !(x.name == lecture.name && x.date == lecture.date));
                })
            });

            moduleElement.appendChild(lectureListElement);
            modulesElement.appendChild(moduleElement);
        }
    }

    function createModule(name, lectureElement) {
        let divElement = document.createElement('div');
        divElement.className = 'module';
        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;


        divElement.appendChild(headingElement);


        return divElement;
    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.className = 'flex';

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${date}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.className = 'red';
        deleteButtonElement.textContent = 'Del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function formatDate(dateInput) {
        //2021-06-08T06:55
        let [date, time] = dateInput.split('T');
        //date = date.replaceAll('-', '/'); // Did not work on judge
        date = date.replace(/-/g, '/'); // regex /g важи за всички - в датата

        return `${date} - ${time}`
    }
};