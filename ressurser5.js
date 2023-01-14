const resources = [
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

let menuHTML = document.getElementById("ulTxt2");

    const li = document.createElement("li");

    var overskrift2 = document.getElementById("overskrift2");

    const para = document.createElement("p");

    let parap2 = document.getElementById("lorem-ipsum2");

    const maptest1 = resources.map((categoryz) => {
        
        return [categoryz.category];
    });

    let katJs = maptest1;

    const kat2overskrift = overskrift2.innerHTML = katJs;

    const test7 = overskrift2.innerHTML = katJs;

    const maptest2 = resources.map((categoryz) => {
        return [categoryz.text];
    });

    let htmltxt2 = maptest2;

    var txt2 = parap2.innerHTML = htmltxt2;

    const maptest3 = resources.map((categoryz) => {

        categoryz.sources.map((item) => {

            var paragraftest = document.createElement("li");

            var ultest = document.createElement("a");

            ultest.innerHTML = item.title;

            ultest.href = item.url;

            paragraftest.insertAdjacentElement("beforeend", ultest);

            menuHTML.appendChild(paragraftest);

        })
    });





