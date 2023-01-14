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