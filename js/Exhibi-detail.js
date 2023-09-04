document.addEventListener("DOMContentLoaded", function () {
    const exImgs = document.querySelectorAll('.exDeImgWhole a'),
          exPopup = document.querySelector('.popup'),
          exPopupImg = exPopup.querySelector('img');

    exImgs.forEach(function (a, index) {
        a.onclick = function (event) {
            event.preventDefault(); // Prevent default link behavior

            const popupImgURL = this.getAttribute('href');
            exPopupImg.setAttribute('src', popupImgURL);
            exPopup.style.display = 'flex';
        };
    });

    exPopup.onclick = function () {
        exPopup.style.display = 'none';
    };
});