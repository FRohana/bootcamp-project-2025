"use strict";
const MyBlogs = [
    {
        title: "How I Built My Portfolio Website",
        date: "10-14-2025",
        description: "Through Hack4Impact's bootcamp, I learned web development from the ground up starting with HTML structure...",
        image: "websiteSS.png",
        imageAlt: "Screenshot of my portfolio website homepage",
        slug: "how-i-built-my-website.html",
    },
    {
        title: "Why I Got Into Computer Engineering",
        date: "10-14-2025",
        description: "My journey into computer engineering started in seventh grade when I built my first custom PC...",
        image: "fullgame.jpg",
        imageAlt: "Completed whack-a-mole arcade game with wooden cabinet and button controls",
        additionalImages: [
            {
                src: "wires.jpg",
                alt: "Inside view of the arcade game showing Arduino microcontroller, breadboard, and circuit wiring",
                caption: "The hardware side: designing and wiring the circuit board with an Arduino to control the game logic and button inputs",
            },
        ],
        slug: "why-im-doing-ce.html",
    },
];
MyBlogs.forEach((blog) => {
    const maindiv = document.createElement("div");
    maindiv.className = "blog-post-container";
    const linktoblog = document.createElement("a");
    linktoblog.textContent = "Read More";
    linktoblog.href = "blogs/" + blog.slug;
    linktoblog.classList.add("readmore-button");
    const titlemaker = document.createElement("h2");
    titlemaker.textContent = blog.title;
    const datemaker = document.createElement("p");
    datemaker.textContent = blog.date;
    const descriptionmaker = document.createElement("p");
    descriptionmaker.textContent = blog.description;
    const imageRowFor2 = document.createElement("div");
    imageRowFor2.className = "image-row";
    const imageRowFor1 = document.createElement("div");
    imageRowFor1.className = "image-row-1";
    const mainImage = document.createElement("img");
    mainImage.src = blog.image;
    mainImage.alt = blog.imageAlt;
    if (blog.additionalImages) {
        imageRowFor2.appendChild(mainImage);
        blog.additionalImages.forEach((additionalImg) => {
            const newimg = document.createElement("img");
            newimg.src = additionalImg.src;
            newimg.alt = additionalImg.alt;
            imageRowFor2.appendChild(newimg);
        });
        maindiv.append(imageRowFor2, titlemaker, datemaker, descriptionmaker, linktoblog);
    }
    else {
        imageRowFor1.appendChild(mainImage);
        maindiv.append(imageRowFor1, titlemaker, datemaker, descriptionmaker, linktoblog);
    }
    const blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
        blogContainer.appendChild(maindiv);
    }
});
//# sourceMappingURL=blog.js.map