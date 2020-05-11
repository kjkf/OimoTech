$(function() {
    const advantages = document.querySelector("#advantages");
    const clients = document.querySelector("#multi-item-clients");
    const example = document.querySelector("#multi-item-example");
    const rawMaterial = document.querySelector("#rawMaterialsBlock");
    const materials = document.querySelector("#materialsBlock");
    const applArea = document.querySelector("#appl-area-block");
    const trainingStep = document.querySelector("#trainingStep");

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql576 = window.matchMedia("(max-width: 576px)");

    function handlerForMediaQueries(x) {
        if (mql768.matches) { // If media query matches
            console.log('mql768.matches');
            makeClientsSlider();
            makeExampleSlider();
        } else {
            console.log('mql768.matches else');
            removeClientsSlider(3);
            removeExampleSlider(2);
        }
    }

    function handlerForMediaQueries576(x) {
        if(mql576.matches) {
            console.log('mql576.matches');
            makeAdvantagesSlider();
            makeRawMaterialSlider();
            makeApplAreaSlider();
            makeTrainingStepSlider();
            makeClientsSlider();
            makeMaterialsBlockSlider();
            typesFloor768less();
        } else {
            removeAdvantagesSlider();
            removeRawMaterialSlider();
            removeApplAreaSlider();
            removeTrainingStepSlider();
            removeMaterialsBlockSlider();
        }
    }

    function handlerForMediaQueries1200(x) {
        if(mql1200.matches) {
            console.log('mql1200.matches');
            removeClientsSlider(3);
            removeExampleSlider(2);
            typesFloor768less();
        } else {
            console.log('mql1200.matches else');
            removeClientsSlider(5);
            removeExampleSlider(3);
            typesFloor756more();
        }
    }

    function slideToHandler(event) {
        let target = event.target;
        let li = target.closest('li');
        let  activeIndicator = assortment.querySelector('.indicators .active');
        activeIndicator.className = "";

        let slideNum = li.dataset.slideTo;
        let step = assortment.getBoundingClientRect().width;
        let left = step * slideNum;
        cells.style.left = `-${left}px`;
        li.className = 'active';
    }

    function makeAdvantagesSlider() {
        advantages.classList.add("carousel");
        advantages.classList.add("slide");
        advantages.dataset.ride = 'carousel';

        const advantagesInner = advantages.querySelector('.advantages-inner');
        advantagesInner.classList.add("carousel-inner");
        advantagesInner.classList.remove("advantages-inner");

        let stepsList = advantages.querySelectorAll(".item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("item");
        });
        stepsList[0].classList.add('active');
    }

    function removeAdvantagesSlider() {
        advantages.classList.remove("carousel");
        advantages.classList.remove("slide");
        //advantages.classList.remove("carousel-multi-item");
        advantages.dataset.ride = '';

        const advantagesInner = advantages.querySelector('.carousel-inner');
        if(advantagesInner) {
            advantagesInner.classList.remove("carousel-inner");
            advantagesInner.classList.add("advantages-inner");
        }

        let stepsList = advantages.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("item");
                //step.classList.add("w-25");
                if (step.classList.contains('active')) step.classList.remove('active');
            });
        }
    }

    function makeTrainingStepSlider() {
        trainingStep.classList.add("carousel");
        trainingStep.classList.add("slide");
        trainingStep.dataset.ride = 'carousel';
        let indicatorWrapper = trainingStep.querySelector('.carousel-indicators');
        if (indicatorWrapper) indicatorWrapper.remove();

        const trainingStepInner = trainingStep.querySelector('.training-step-in');
        trainingStepInner.classList.add("carousel-inner");
        trainingStepInner.classList.remove("training-step-in");

        let stepsList = trainingStep.querySelectorAll(".training-step-item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("training-step-item");
        });

        const indicator = createIndicatorsForSimpleSlider(stepsList.length, 'trainingStep');
        trainingStep.appendChild(indicator);
        stepsList[0].classList.add('active');
    }

    function removeTrainingStepSlider() {
        trainingStep.classList.remove("carousel");
        trainingStep.classList.remove("slide");
        trainingStep.dataset.ride = '';

        const trainingStepInner = trainingStep.querySelector('.carousel-inner');
        if(trainingStepInner) {
            trainingStepInner.classList.remove("carousel-inner");
            trainingStepInner.classList.add("training-step-in");
        }


        let stepsList = trainingStep.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("training-step-item");
                //step.classList.add("w-25");
                if (step.classList.contains('active')) step.classList.remove('active');
            });
        }
    }

    function makeRawMaterialSlider() {
        rawMaterial.classList.add("carousel");
        rawMaterial.classList.add("slide");
        rawMaterial.dataset.ride = 'carousel';
        let indicatorWrapper = rawMaterial.querySelector('.carousel-indicators');
        if (indicatorWrapper) indicatorWrapper.remove();

        const rawMaterialInner = rawMaterial.querySelector('.materials-block-inner');
        rawMaterialInner.classList.add("carousel-inner");
        rawMaterialInner.classList.remove("materials-block-inner");

        let stepsList = rawMaterial.querySelectorAll(".materials-block-item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("materials-block-item");
            //step.classList.remove("w-25");
        });
        const indicator = createIndicatorsForSimpleSlider(stepsList.length, 'rawMaterialsBlock');
        rawMaterial.appendChild(indicator);
        stepsList[0].classList.add('active');
    }

    function removeRawMaterialSlider() {
        rawMaterial.classList.remove("carousel");
        rawMaterial.classList.remove("slide");
        rawMaterial.dataset.ride = '';

        const rawMaterialInner = rawMaterial.querySelector('.carousel-inner');
        if(rawMaterialInner) {
            rawMaterialInner.classList.remove("carousel-inner");
            rawMaterialInner.classList.add("materials-block-inner");
        }


        let stepsList = rawMaterial.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("materials-block-item");
                //step.classList.add("w-25");
                if (step.classList.contains('active')) step.classList.remove('active');
            });

        }
    }

    function makeMaterialsBlockSlider() {
        materials.classList.add("carousel");
        materials.classList.add("slide");
        materials.dataset.ride = 'carousel';
        let indicatorWrapper = materials.querySelector('.carousel-indicators');
        if (indicatorWrapper) indicatorWrapper.remove();

        const materialsInner = materials.querySelector('.materials-block-inner');
        materialsInner.classList.add("carousel-inner");
        materialsInner.classList.remove("materials-block-inner");

        let stepsList = materials.querySelectorAll(".materials-block-item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("materials-block-item");
            //step.classList.remove("w-25");
        });
        const indicator = createIndicatorsForSimpleSlider(stepsList.length, 'materialsBlock');
        materials.appendChild(indicator);
        stepsList[0].classList.add('active');
    }

    function removeMaterialsBlockSlider() {
        materials.classList.remove("carousel");
        materials.classList.remove("slide");
        materials.dataset.ride = '';

        const materialsInner = materials.querySelector('.carousel-inner');
        if(materialsInner) {
            materialsInner.classList.remove("carousel-inner");
            materialsInner.classList.add("materials-block-inner");
        }


        let stepsList = materials.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("materials-block-item");
                //step.classList.add("w-25");
                if (step.classList.contains('active')) step.classList.remove('active');
            });

        }
    }

    function makeApplAreaSlider() {
        applArea.classList.add("carousel");
        applArea.classList.add("slide");
        applArea.dataset.ride = 'carousel';
        let indicatorWrapper = applArea.querySelector('.carousel-indicators');
        if (indicatorWrapper) indicatorWrapper.remove();

        const applAreaInner = applArea.querySelector('.appl-area-block-inner');
        applAreaInner.classList.add("carousel-inner");
        applAreaInner.classList.remove("appl-area-block-inner");

        let stepsList = applArea.querySelectorAll(".appl-area-block-item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("appl-area-block-item");
            step.classList.remove("col-md-3");
        });
        const indicator = createIndicatorsForSimpleSlider(stepsList.length, 'appl-area-block');
        applArea.appendChild(indicator);
        stepsList[0].classList.add('active');
    }

    function removeApplAreaSlider() {
        applArea.classList.remove("carousel");
        applArea.classList.remove("slide");
        applArea.dataset.ride = '';

        const applAreaInner = applArea.querySelector('.carousel-inner');
        if(applAreaInner) {
            applAreaInner.classList.remove("carousel-inner");
            applAreaInner.classList.add("appl-area-block-inner");
        }


        let stepsList = applArea.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("appl-area-block-item");
                step.classList.add("col-md-3");
                if (step.classList.contains('active')) step.classList.remove('active');
            });

        }
    }

    function makeClientsSlider() {
        const clientsList = clients.querySelectorAll('.client');
        let carouselItems = clients.querySelectorAll('.carousel-item');
        let indicatorWrapper = clients.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        createCarouselRow(clientsList, clients, 'multi-item-clients');
    }

    function removeClientsSlider(cols) {
        const clientsList = clients.querySelectorAll('.client');
        let carouselItems = clients.querySelectorAll('.carousel-item');
        let indicatorWrapper = clients.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(clientsList, cols);
        createCarouselRow(rowList, clients, 'multi-item-clients', cols);
    }
    function makeExampleSlider() {
        const clientsList = example.querySelectorAll('.example-item');
        let carouselItems = example.querySelectorAll('.carousel-item');
        let indicatorWrapper = example.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        createCarouselRow(clientsList, example, 'multi-item-example');
    }

    function removeExampleSlider(cols) {
        const clientsList = example.querySelectorAll('.example-item');
        let carouselItems = example.querySelectorAll('.carousel-item');
        let indicatorWrapper = example.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(clientsList, cols);
        createCarouselRow(rowList, example, 'multi-item-example');
    }

    function createCarouselRow(list, mainWrapper, mainId) {
        const inner = mainWrapper.querySelector('.carousel-inner');
        let indicatorWrapper = mainWrapper.querySelector('.carousel-indicators');

        list.forEach(function (item, index) {
            item.classList.remove('d-none');
            let div = createCarouselItem(item);
            let indicator = createIndicatorForMultiSlider(mainId, index);

            if (index === 0) {
                div.classList.add('active');
                indicator.classList.add('active');
            }
            inner.appendChild(div);
            indicatorWrapper.appendChild(indicator);
        });
    }

    function createCarouselItem(innerHtml) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');
        div.appendChild(innerHtml);
        return div
    }

    function removeItems(list) {
        list.forEach(function (item) {
            item.remove();
        });
    }

    function createIndicatorForMultiSlider(mainId, index) {
        let li = document.createElement('li');
        li.dataset.target = "#" + mainId;
        li.dataset.slideTo = index;

        return li;
    };

    function divideArrayForRow(list, slidesInRow) {
        let rowsList = [];
        let className = !slidesInRow ? '' : slidesInRow === 2 ? 'col-md-6' : slidesInRow === 3 ? 'col-md-4' : slidesInRow === 4 ? 'col-md-3' : '';
        let oldClassName = getClassNameByMask(list[0].classList.value, 'col-md-\\d+'); //list[0].classList.value.match(/col-md-\d+/);

        for (let i=0; i<list.length; i=i+slidesInRow) {
            let row = document.createElement('div');
            row.className = 'row';
            if (slidesInRow === 5) row.classList.add('row-cols-5');
            for (let j=i; j<(i+slidesInRow); j++) {
                if (j>=list.length) break;
                if (oldClassName) list[j].classList.remove(oldClassName);
                if (className) list[j].classList.add(className);
                row.appendChild(list[j]);
            }
            rowsList.push(row);
        }
        return rowsList;
    }

    function createIndicatorsForSimpleSlider(num, carouselId) {
        let ol = document.createElement('ol');
        ol.className = 'carousel-indicators';
        for (let i = 0; i<num; i++) {
            let li = document.createElement('li');
            //data-target="#materials-block"
            li.dataset.slideTo = i;
            li.dataset.target = `#${carouselId}`;
            if( i === 0 ) li.className="active";

            ol.appendChild(li);
        };

        return ol;
    }

    function getClassNameByMask(str, mask) {
        if (!str) return '';
        const regexp = new RegExp(mask);
        let result = str.match(regexp);
        return result ? result[0] : '';
    }
    const typesFloorContents = document.querySelectorAll('.types-floor-content');
    function typesFloor768less() {
        typesFloorContents.forEach(floorContent => {
            const typesFloorCols = floorContent.querySelectorAll('.types-floor-content__col');
            const floorDescr = typesFloorCols[0].querySelector('.types-floor-descr');
            const objects = typesFloorCols[1].children;
            Array.from(objects).forEach(obj => {
                floorDescr.append(obj);
            });
        });
    }

    function typesFloor756more() {
        typesFloorContents.forEach(floorContent => {
            const typesFloorCols = floorContent.querySelectorAll('.types-floor-content__col');
            const floorDescr = typesFloorCols[0].querySelector('.types-floor-descr');
            const objects = typesFloorCols[0].querySelectorAll('.types-floor-objects');
            objects.forEach(obj => {
                typesFloorCols[1].append(obj);
            });
        });
    }

    //===========================================

    //console.log(window.innerWidth, window.visualViewport.width);
    //alert(window.innerWidth);
    //alert(window.visualViewport.width);
    if (window.visualViewport.width < 1200 && window.visualViewport.width > 768) {
        handlerForMediaQueries1200();
    } else if (window.visualViewport.width <= 768 &&  window.visualViewport.width > 576) {
        handlerForMediaQueries();
    } else if (window.visualViewport.width <= 576 ) {
        handlerForMediaQueries576();
    }

    mql1200.addEventListener("change", () => {
        handlerForMediaQueries1200();
    });
    mql768.addEventListener("change", () => {
        handlerForMediaQueries();
    });
    mql576.addEventListener("change", () => {
        handlerForMediaQueries576();
    });

});