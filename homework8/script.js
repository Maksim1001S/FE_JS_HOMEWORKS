const projects = [
    {
        id: 1,
        title: "Arena",
        text: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
        img: "./images/image 3.jpg",
    },
    {
        id: 1,
        title: "Arena",
        text: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
        img: "./images/image 3.jpg",
    },
    {
        id: 1,
        title: "Arena",
        text: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
        img: "./images/image 3.jpg",
    },
];


const titleOfProjects = document.createElement("h1");
const projects_container = document.createElement("div");


titleOfProjects.classList.add("OurProjects_title");
projects_container.classList.add("OurProjects_container");




titleOfProjects.innerText = "НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ";

const section_OurProjects = document.querySelector(".OurProjects");

section_OurProjects.append(titleOfProjects, projects_container);

projects.forEach(({ title, text, img }) => {
    const projectCard = document.createElement("div");
    const imageElem = document.createElement("img");
    const titleElem = document.createElement("h2");
    const textElem = document.createElement("h3");

    projectCard.classList.add("OurProjects_container_Card");
    imageElem.classList.add("OurProjects_container_Card_image");
    titleElem.classList.add("OurProjects_container_Card_title");
    textElem.classList.add("OurProjects_container_Card_text");

    
    titleElem.innerText = title;
    textElem.innerText = text;

    imageElem.src = img;
    imageElem.alt = title;

    projectCard.append(imageElem, titleElem, textElem);
    projects_container.append(projectCard);
});
