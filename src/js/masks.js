
(function() {
    console.log('=====!!!=====');
    $(".phone").mask("+ 996 (ddd) dd dd dd", {
        autoclear: false
    });

    $(".phoneDownload").mask("+ 996 (ddd) dd dd dd", {
        autoclear: false,
        completed: function () {
            download('price.pdf');
            console.log('after download');
        }
    });
})();
