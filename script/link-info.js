const infoContainer = document.querySelectorAll('#info-container');
const infoText = document.querySelectorAll('#info-text');

function showInfo() {
    for (let i = 0; i < infoText.length; i++) {
        if (infoText[i].value.length === 0) {
            infoContainer[i].classList.add('user-list__link-info-container--hidden'); 
        }
    }
}

showInfo();