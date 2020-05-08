$(function() {
    const advantages = document.querySelector("#advantages");
    const clients = document.querySelector("#multi-item-clients");

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql576 = window.matchMedia("(max-width: 576px)");

    function handlerForMediaQueries(x) {
        if (mql768.matches) { // If media query matches
            makeAdvantagesSlider();
        } else {
            removeAdvantagesSlider();
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
        //advantages.classList.add("carousel-multi-item");
        advantages.dataset.ride = 'carousel';

        const advantagesInner = advantages.querySelector('.advantages-inner');
        advantagesInner.classList.add("carousel-inner");
        advantagesInner.classList.remove("advantages-inner");

        let stepsList = advantages.querySelectorAll(".item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("item");
            //step.classList.remove("w-25");
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

    function makeWorksSlider() {
        const workList = works.querySelectorAll('.work-item');
        let carouselItems = works.querySelectorAll('.carousel-item');
        let indicatorWrapper = works.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        createCarouselRow(workList, works, 'works__multi-item');
    }

    function removeWorksSlider() {
        const workList = works.querySelectorAll('.work-item');
        let carouselItems = works.querySelectorAll('.carousel-item');
        let indicatorWrapper = works.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(workList, 3);
        createCarouselRow(rowList, works, 'works__multi-item');
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
        for (let i=0; i<list.length; i=i+slidesInRow) {
            let row = document.createElement('div');
            row.className = 'row';
            for (let j=i; j<(i+slidesInRow); j++) {
                if (j>=list.length) break;
                row.appendChild(list[j]);
            }
            rowsList.push(row);
        }
        return rowsList;
    }

    function createIndicatorsForSimpleSlider(num) {
        let ol = document.createElement('ol');
        ol.className = 'indicators';
        for (i = 0; i<num; i++) {
            let li = document.createElement('li');
            li.dataset.slideTo = i;
            if( i === 0 ) li.className="active";

            ol.appendChild(li);
        };

        return ol;
    }

    //===========================================

    handlerForMediaQueries();
    mql768.addEventListener("change", () => {
        handlerForMediaQueries();
    });

});