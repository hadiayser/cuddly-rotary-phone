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

    let ul = document.getElementById("ul");

    let h2 = document.getElementById("header_to");

    let para = document.createElement("p");

    let paragraph = document.getElementById("paragraph");

    const map_en = resources.map((categoryz) => {
        return [categoryz.category];
    });

    let katJs = map_en;

    const kat2Overskrift = h2.innerHTML = katJs;

    const map_to = resources.map((categoryz) => {
        return [categoryz.text];
    });

    let articleTxt = map_to;

    var txt2 = paragraph.innerHTML = articleTxt;

    const map_tre = resources.map((categoryz) => {

        categoryz.sources.map((item) => {

            const li = document.createElement("li");

            let create_a = document.createElement("a");

            create_a.innerHTML = item.title;

            create_a.href = item.url;

            li.insertAdjacentElement("beforeend", create_a);

            ul.appendChild(li);

        })
    });





