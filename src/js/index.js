
$(document).ready( function() {
    $('#pills-tab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    const btn_gamburg = document.getElementById('btn_gamburg');
    const header__nav = document.querySelector('.header__nav');
    btn_gamburg.addEventListener('click', () => {
        header__nav.classList.add('active');
        const btn_close = header__nav.querySelector('#btn_close');
        btn_close.addEventListener('click', e => {
            header__nav.classList.remove('active');
        });
        const links = header__nav.querySelectorAll('.nav-item');
        links.forEach(link => link.addEventListener('click', e => btn_close.click()))
    });

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {

            form.addEventListener('submit', function(event) {
                if ((form.checkValidity() === false)){
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                   /* if (form.getAttribute('id') === "price_form") {

                    }*/
                }
                form.classList.add('was-validated');
            }, false);

        });

    }, false);
    const windowInner = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    if (windowInner >= 992) {
        const nav = document.querySelector('.nav-wrap');
        const banner = document.querySelector('.banner');
        //const start = banner.getBoundingClientRect().top;
        const start = nav.getBoundingClientRect().bottom;
        window.addEventListener('scroll', e => {
            //console.log('scroll===', window.pageYOffset);
            if (window.pageYOffset > start) {
                nav.style.position = 'fixed';
                nav.style.top = '25px';
            } else {
                nav.style.position = 'unset';
                nav.style.top = 'unset';
            }
        })
    }

});