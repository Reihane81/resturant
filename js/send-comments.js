
function SendButton() {
    const star = document.querySelectorAll(".star");
    star.length;
    const xhr = new HttpxhrRequest();
    fetch("send.php?starts =" + star.length, {
        method: 'GET'
    })
}

