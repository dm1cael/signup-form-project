const passInput = document.querySelector('#password');
const confirmPassInput = document.querySelector("#confirm-password");
const noMatchText = document.querySelector('.noMatch');

window.addEventListener('input', () => {
    if(passInput.value !== confirmPassInput.value) {
        passInput.setCustomValidity('Passwords do not match');
        confirmPassInput.setCustomValidity('Passwords do not match');
        noMatchText.style.display = "inline";
    } else {
        passInput.setCustomValidity('')
        confirmPassInput.setCustomValidity('');
        noMatchText.style.display = "none";
    }
})

