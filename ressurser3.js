const resources = [
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