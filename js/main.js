function esconderCartoes2e3() {
    const esconder1 = document.getElementsByClassName('firstCard');
    for (let i = 0; i < esconder1.length; i++) {
        esconder1[i].style.display = 'none';
    }
}

function esconderCartoes1e3() {
    const esconder2 = document.getElementsByClassName('secondCard');
    for (let i = 0; i < esconder2.length; i++) {
        esconder2[i].style.display = 'none';
    }
}

function esconderCartoes1e2() {
    const esconder3 = document.getElementsByClassName('thirdCard');
    for (let i = 0; i < esconder3.length; i++) {
        esconder3[i].style.display = 'none';
    }
}