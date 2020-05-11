
function download(filename) {
    var element = document.createElement('a');
    //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    element.setAttribute('href', `../public/assets/${filename}`);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
/*

console.log('======= download ============');
document.getElementById('download-price').addEventListener('click', e => {
    let filename = 'price.pdf';

    download(filename);
    //e.target.scrollIntoView();
    console.log(filename);
});*/
