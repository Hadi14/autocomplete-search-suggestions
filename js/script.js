const input = document.querySelector('input');
const si = document.querySelector('.search-input');
const a = document.querySelector('.autocom-box');
let li;

let s = "";
// let suggestions = [
//     "Channel",
//     "CodingLab",
//     "CodingNepal",
//     "YouTube",
//     "YouTuber",
//     "YouTube Channel",
//     "Blogger",
//     "Bollywood",
//     "Vlogger",
//     "Vechiles",
//     "Facebook",
//     "Freelancer",
//     "Facebook Page",
//     "Designer",
//     "Developer",
//     "Web Designer",
//     "Web Developer",
//     "Login Form in HTML & CSS",
//     "How to learn HTML & CSS",
//     "How to learn JavaScript",
//     "How to become Freelancer",
//     "How to become Web Designer",
//     "How to start Gaming Channel",
//     "How to start YouTube Channel",
//     "What does HTML stands for?",
//     "What does CSS stands for?",
// ];
input.addEventListener('keyup', () => {
    if (input.value == "") {
        si.classList.remove("active");
    }
    else {
        a.innerHTML = "";
        s = input.value;
        suggestions.forEach((str) => {
            if (str.toLowerCase().search(s.toLowerCase()) >= 0 && s != "") {
                // console.log(str + ": " + str.search(s));
                // console.log(a);
                a.insertAdjacentHTML('beforeend', "<li>" + str + "</li>")
            }
            else {

            }
        })
        si.classList.add("active");
        li = document.querySelectorAll('.autocom-box li');
        li.forEach((item) => {
            item.addEventListener('click', () => {
                input.value = item.innerHTML;
                a.innerHTML = "";
                // a.style.opacity = "0";
            })
        })
    }
    // console.log(li)
})