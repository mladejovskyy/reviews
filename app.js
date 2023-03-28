// Reviews data
const reviews = [
    {
        id: 1,
        name: "Tomáš Mladějovský",
        job: "Full stack Developer",
        img: "../../../../Screenshot_17.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum, labore neque asperiores dolore ut, quaerat sed tenetur suscipit amet corrupti exercitationem dolor voluptatem quidem odio adipisci mollitia optio ipsa."
    },
    {
        id: 2,
        name: "Suchoš",
        job: "Tester braníků",
        img: "../../../../Screenshot_18.png",
        text: "Jmenuji se Tomáš a rád piju dvoulitrovej brancl ve slevě."
    }
];



// select items
const img = document.querySelector('img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});


// define function showPerson
function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})