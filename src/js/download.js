
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

document.getElementById('downloadPrice').addEventListener('click', e => {
    let filename = 'price.pdf';

    download(filename);
});

document.getElementById('download-price').addEventListener('click', e => {
    let filename = 'price.pdf';
    const phoneNum = document.getElementById('phoneNum2');
    console.log('111', phoneNum.value, isPhoneNum(phoneNum.value));
    if (!isPhoneNum(phoneNum.value)) return;
    download(filename);
});

document.getElementById('priceDownload').addEventListener('click', e => {
    const phoneNum = document.getElementById('phoneNum');
    console.log(2222, phoneNum.value, isPhoneNum(phoneNum.value));
    if (!isPhoneNum(phoneNum.value)) return;
    let filename = 'price.pdf';

    download(filename);
});

function isPhoneNum(value) {
    //console.log(value.indexOf('_'));
    return value && value.indexOf('_') === -1;
}