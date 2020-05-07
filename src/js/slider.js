;(function () {
    'use strict';
    var simpleSlider = (function () {
        return function (selector) {
            var
                //_mainWrapper = document.querySelector(selector),
                _mainElement = document.querySelector(selector), // основный элемент блока
                //_indicatorItems = _mainElement.querySelectorAll('.slider-indicators-item'),
                _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
                _sliderItems = _mainElement.querySelectorAll('.slider-item'), // элементы (.slider-item)
                _card = _mainElement.closest('.card'),
                _sliderControls = _card.querySelectorAll('.slider__control'), // элементы управления

                _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
                _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
                _positionLeftItem = 0, // позиция левого активного элемента
                _transform = 0, // значение транфсофрмации .slider_wrapper
                _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
                _items = []; // массив элементов

            // наполнение массива _items
            _sliderItems.forEach(function (item, index) {
                _items.push({item: item, position: index, transform: 0});
            });

            var position = {
                getMin: 0,
                getMax: _items.length - 1,
            };

            var _transformItem = function (direction) {

                if (direction === 'right') {
                    if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                        _positionLeftItem = 0;
                        _transform = 0;
                        //return;
                    } else {
                        _positionLeftItem++;
                        _transform -= _step;
                    }
                }
                if (direction === 'left') {
                    if (_positionLeftItem <= position.getMin) {
                        _positionLeftItem = _items.length - 1;
                        _transform = _positionLeftItem * _step * -1;
                        //return;
                    } else {
                        _positionLeftItem--;
                        _transform += _step;
                    }
                }
                _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
            };

            // обработчик события click для кнопок "назад" и "вперед"
            var _controlClick = function (e) {
                //if (e.target.classList.contains('slider__control')) {
                    e.preventDefault();
                    var direction = e.target.classList.contains('carousel-control-next') ? 'right' : 'left';
                    if (!_step) {
                        _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
                        _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
                        _step = _itemWidth / _wrapperWidth * 100;
                    }
                    _transformItem(direction);
                //}
            };

            /*var _indicatorClick = function (e) {
                e.preventDefault();
                var index = parseInt(e.target.dataset.slideTo) - 1;

                if (!isNaN(index)) {
                    if ((index + _wrapperWidth / _itemWidth - 1) <= position.getMax && index >= position.getMin) {
                        _positionLeftItem = index;
                        _transform = _positionLeftItem * _step * -1;
                        _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
                    }
                } else {
                    console.log('error');
                }

            };*/

            var _setUpListeners = function () {
                // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
                _sliderControls.forEach(function (item) {
                    item.addEventListener('click', _controlClick);
                });
            };

            /*var _setUpIndicatorsListeners = function () {
                // добавление к названиям книг обрботчика _indicatorClick для событя click
                _indicatorItems.forEach(function (item) {
                    item.addEventListener('click', _indicatorClick);
                });
            };*/

            // инициализация
            _setUpListeners();
            //_setUpIndicatorsListeners();

            return {
                right: function () { // метод right
                    _transformItem('right');
                },
                left: function () { // метод left
                    _transformItem('left');
                }
            }

        }
    }());
    simpleSlider('#carousel-example-1');
    simpleSlider('#carousel-example-2');
    simpleSlider('#carousel-example-3');
    simpleSlider('#carousel-example-4');
    simpleSlider('#carousel-example-5');
    simpleSlider('#carousel-example-6');
    simpleSlider('#carousel-example-7');
    simpleSlider('#carousel-example-8');
    simpleSlider('#carousel-example-9');
})();