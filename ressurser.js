const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

let menuHTML = document.getElementById("ulTxt");
const li = document.createElement("li");
var htmlKnapp = document.getElementById("overskrift1")
const para = document.createElement("p");
let parap = document.getElementById("lorem-ipsum");
var test3 = document.createElement("h1");
var knapp2 = document.getElementById("html-knapp2");
var knapp3 = document.getElementById("html-knapp3");
var knapp4 = document.getElementById("html-knapp4");
var knapp5 = document.getElementById("html-knapp5");


const maptest1 = resources.map((categoryz) => {
    return [categoryz.category];
});

let test2 = maptest1.toString()


let kathtml = test2.match("HTML");
let katJs = test2.match("JavaScript");
let katCss = test2.match("CSS");
let katReact = test2.match("React");
let katSanity = test2.match("Sanity and headless CMS");



const test6 = htmlKnapp.innerHTML = kathtml;
console.log(test6)

const test7 = knapp2.innerHTML = katJs;
const test8 = knapp3.innerHTML = katCss;
const test9 = knapp4.innerHTML = katReact;
const test10 = knapp5.innerHTML = katSanity;



const maptest2 = resources.map((categoryz) => {
    return [categoryz.text];
})
console.log(maptest2)

let map2string = maptest2.toString()

let htmltxt = map2string.match("HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.");
console.log(htmltxt)

const txt1 = parap.innerText = htmltxt;


const maptest3 = resources.map((categoryz) => {
    categoryz.sources.map((item) => {
        var paragraftest = document.createElement("p");
        var ultest = document.createElement("a");
        ultest.innerHTML = item.title;
        ultest.href = item.url;
        paragraftest.insertAdjacentElement("beforeend", ultest);
        menuHTML.appendChild(paragraftest);

    })

});




// testest1 = toString();
// console.log(testest1)

