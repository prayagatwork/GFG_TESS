function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const message = document.getElementById('message');
    const funElement = document.getElementById('funElement');

    if (password === "SHCRET") {
        message.style.color = 'green';
        message.textContent = "Access Granted!";
        funElement.textContent = "🎉 Woohoo! You got it!";
        funElement.className = 'success';
        funElement.style.display = 'block';
    } else {
        message.style.color = 'red';
        message.textContent = "Incorrect Password!";
        funElement.textContent = "😏 Sneer... Try again!";
        funElement.className = 'error';
        funElement.style.display = 'block';
    }
}
