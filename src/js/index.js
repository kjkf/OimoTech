
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
    })
});