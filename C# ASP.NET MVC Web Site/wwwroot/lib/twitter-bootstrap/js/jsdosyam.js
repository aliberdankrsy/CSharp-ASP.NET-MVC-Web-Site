document.getElementById('changeColorButton').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
    document.body.classList.remove('patternarkaplan'); // arka plan rengi değişeceği zaman arkaplan resminin olduğu class ı programdan çıkartıyoruz
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Rastgele arka plan rengi değiştirme