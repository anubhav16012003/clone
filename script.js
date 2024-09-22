const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');

// container part starts
const closeBtn = document.getElementById('closeBtn');
const register = document.getElementById('register');
const emailInput = document.getElementById('emailInput');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const countryCode = document.getElementById('countryCode');
const phoneInput = document.getElementById('phoneInput');
const submitbtn = document.getElementById('submitbtn');

part2.style.display = "none";

closeBtn.addEventListener('click', () => {
    register.style.display = "none";
});

submitbtn.addEventListener('click', (event) => {
    // console.log("button clicked");
    event.preventDefault();

    try {
        if (emailInput.value.trim() === "") {
            throw new Error("Email is required!");
        }
        if (usernameInput.value === "") {
            throw new Error("Username is required!");
        }
        if (passwordInput.value === "") {
            throw new Error("Password is required!");
        }
        if (date.value.trim() === "" || month.value.trim() === "" || year.value.trim() === "") {
            throw new Error("DOB is required");
            
        }

        firstpage();
    } catch (error) {
        console.error(error);
        alert(error);
    }
});
// container part ends

function firstpage() {
    part1.style.display = "none";
    part2.style.display = "block";
    

}
