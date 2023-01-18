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
    // let ul = document.getElementById("ul");

    // let h2 = document.getElementById("header_to");
    // let listetest = document.getElementById("lili");

    // let listetest2 = document.getElementById("lili2");

    // let head2 = document.getElementById("header_tre")

    // let para = document.createElement("p");

    // let paragraph = document.getElementById("paragraph");

    // let article1 = document.getElementById("article1")
    // let article2 = document.getElementById("article2")

    // const map_en = resources.map((categoryz) => {
    //     return [categoryz.category];
    // });

    // const testern = resources.map((testy)=>
    // testy.category)
    // console.log(testern[1])
    // console.log(testern[2])
    // console.log(testern[3])



    
    // let katJs = testern[0];
    // let katcss = testern[1];
    
    // let kat2Overskrift = h2.innerHTML = katJs;
    // let kat3= head2.innerHTML = katcss;

    // const map_to = resources.map((categoryz) => {
    //     return [categoryz.text];
    // });

    // const map_to = resources.map((testy1)=>
    // testy1.text);
    

    // let articleTxt = map_to[0];

    // const map_3 = resources.map((testy3)=>
    // testy3.sources.map ((testy4)=> testy4.title))
    // console.log(map_3[0]);

    

    // var txt2 = listetest.innerHTML = map_3[0];
    // var txt3 = listetest2.innerHTML = map_3[1];

    let listhtml = document.getElementById("article1")
    
    
    
        resources.map((pee)=> {
        var test3 = document.createElement("h2")
        test3.innerHTML = pee.category;
        listhtml.appendChild(test3);
        var test5 = document.createElement("p");
        test5.innerHTML = pee.text;
        listhtml.appendChild(test5);
        
        pee.sources.map((item) =>{
            var test3 = document.createElement("p");
            var test4 = document.createElement("a");
            test4.innerHTML = item.title;
            test4.href = item.url;
            test3.insertAdjacentElement("beforeend", test4);
            listhtml.appendChild(test3);
        });
    });
    

    console.log(listhtml)

    // const map_tre = resources.map((categoryz) => {

    //     categoryz.sources.map((item) => {

    //         const li = document.createElement("li");

    //         let create_a = document.createElement("a");

    //         create_a.innerHTML = item.title;

    //         create_a.href = item.url;

    //         li.insertAdjacentElement("beforeend", create_a);

    //         ul.appendChild(li);

    //     })
    // });


    