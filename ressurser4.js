const resources = [
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