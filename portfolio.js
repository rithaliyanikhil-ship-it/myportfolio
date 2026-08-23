// ======================================================
// NINJA IMAGE
// ======================================================

const ninjaImage = document.querySelector("#ninjaImage");

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3um5ZMdCbGugMSyo4IgUzs9wop-_Fu3OK-JDyzISFQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoL3rP58-35ucpur6Jk3TJyznioJIGRiyG-xa3FwaDn9u1naWR9heLFs&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_z3N6EnacSqcuVKxRQYTDLIluauUFMdOw7P2gHpvc0w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEV1KZjpTiBfae4ifvh4D9jTmGx_Ni-Pl08p0kR_t_QA&s=10"
];

let currentImage = 0;

if (ninjaImage) {

    ninjaImage.addEventListener("mouseenter", () => {

        currentImage++;

        if (currentImage === images.length) {
            currentImage = 0;
        }

        ninjaImage.src = images[currentImage];

    });

}


// ======================================================
// HOLA TEXT
// ======================================================

let isBlack = false;

const hola = document.querySelector(".hola");

if (hola) {

    hola.addEventListener("mouseenter", () => {

        if (isBlack === false) {

            hola.style.color = "black";
            isBlack = true;

        } else {

            hola.style.color = "rgb(167, 167, 167)";
            isBlack = false;

        }

    });

}


// ======================================================
// LANGUAGE TEXT
// ======================================================

const language = document.querySelector("#language");

if (language) {

    language.addEventListener("mouseenter", () => {

        if (isBlack === false) {

            language.style.color = "black";
            isBlack = true;

        } else {

            language.style.color = "rgb(167, 167, 167)";
            isBlack = false;

        }

    });

}


// ======================================================
// ABOUT PAGE INTERACTION
// ======================================================

const hiSpan = document.querySelector(".hi");

if (hiSpan) {

    hiSpan.addEventListener("mouseenter", () => {

        hiSpan.style.color = "rgb(100, 150, 200)";
        hiSpan.style.transform = "scale(1.2) rotate(10deg)";
        hiSpan.style.transition = "all 0.3s ease";

    });


    hiSpan.addEventListener("mouseleave", () => {

        hiSpan.style.color = "rgb(65, 117, 144)";
        hiSpan.style.transform = "scale(1) rotate(0deg)";

    });

}


const introSection = document.querySelector(".intro");

if (introSection) {

    introSection.addEventListener("mouseenter", () => {

        introSection.style.borderColor = "rgb(65, 117, 144)";

    });


    introSection.addEventListener("mouseleave", () => {

        introSection.style.borderColor = "rgba(0, 0, 0, 0.1)";

    });

}


// ======================================================
// DARK MODE
// ======================================================

const darkModeButton =
    document.querySelector("#dark-mode-btn");

if (darkModeButton) {

    darkModeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeButton.innerText = "Light Mode";

        } else {

            darkModeButton.innerText = "Dark Mode";

        }

    });

}


// ======================================================
// SERVICES
// ======================================================

function showService(service) {

    const title =
        document.querySelector("#detail-title");

    const content =
        document.querySelector("#detail-content");

    const details =
        document.querySelector("#service-details");


    if (!title || !content || !details) {
        return;
    }


    if (service === "fullstack") {

        title.innerText = "💻 Full-Stack Development";

        content.innerText = `I provide full-stack web development services focused on building complete and functional web applications from frontend to backend. I can develop the user interface using technologies such as HTML, CSS, JavaScript, React, and Bootstrap, while using Node.js to build the backend and handle server-side operations.

My approach is to create applications where the frontend and backend work together smoothly. I can develop features such as user registration, login systems, form handling, data processing, and dynamic web pages. I also have experience working with MySQL databases for storing and managing application data.

I focus on writing organized and maintainable code so that the application can be easily improved or extended in the future. I also pay attention to responsive design so that websites can work properly on different screen sizes, including desktops, tablets, and mobile devices.

For a full-stack project, I can work on different parts of the application, including designing the frontend, creating backend APIs, connecting the database, and testing the communication between these components.

My goal is to build practical web applications that are easy to use, responsive, and reliable. Whether it is a small personal project, a college project, or a business-oriented web application, I aim to combine frontend design with backend functionality to create a complete solution.`;

    }


    else if (service === "frontend") {

        title.innerText = "🎨 Frontend Development";

        content.innerText = `I create responsive and interactive frontend websites using HTML, CSS, JavaScript, and Bootstrap. My focus is on developing clean interfaces that are easy to understand and provide a smooth experience for users.

HTML is used to create the structure of the webpage, while CSS is used to design layouts, colors, typography, animations, cards, navigation bars, and other visual elements. I use JavaScript to add interaction and dynamic functionality to websites, such as buttons, forms, animations, image changes, and interactive components.

I can also use CSS Flexbox and Grid to create organized and responsive layouts. These techniques allow websites to adjust their design according to different screen sizes. Bootstrap can be used when a project requires faster development of responsive components and layouts.

I pay attention to details such as spacing, alignment, typography, hover effects, transitions, and responsive behavior. I believe that a good frontend should not only look attractive but should also be simple and comfortable for users to navigate.

I can create different types of frontend projects, including personal portfolios, landing pages, dashboards, forms, service pages, and college projects. I also focus on keeping the code structured and understandable so that future changes can be made easily.

My goal is to turn ideas and designs into responsive, interactive, and visually appealing websites that provide a good user experience.`;

    }


    else if (service === "react") {

        title.innerText = "⚛️ React Development";

        content.innerText = `I use React to build modern, interactive, and reusable user interfaces for web applications. React allows me to divide an application into smaller components, making the code easier to organize, maintain, and reuse.

I can work with important React concepts such as components, JSX, props, state, event handling, and hooks. I use components to create reusable sections of an application, while props allow data to be passed between components. I can also use state to manage information that changes during user interaction.

React is especially useful for applications where the page needs to update dynamically without constantly reloading the entire webpage. I can use React to create interactive forms, navigation systems, dashboards, service pages, project sections, and other dynamic interfaces.

I also focus on creating responsive interfaces using CSS and modern layout techniques such as Flexbox and Grid. React can be combined with APIs to retrieve and display dynamic data from a backend server.

For larger projects, I can organize the application into reusable components instead of writing everything in a single file. This makes the project easier to understand and maintain.

My goal is to use React to create fast, organized, and interactive web applications. I continuously improve my understanding of React and its ecosystem by building practical projects and experimenting with different components and features.

I aim to combine React with technologies such as JavaScript, Node.js, REST APIs, and MySQL to create complete and functional web applications.`;

    }


    else if (service === "api") {

        title.innerText = "🔗 API & Database";

        content.innerText = `I can work with REST APIs and databases to connect the frontend of a web application with its backend and stored data. I use Node.js to develop backend functionality and create APIs that allow different parts of an application to communicate with each other.

APIs are important because they allow the frontend to request, send, update, and retrieve information from a backend server. I can work with common HTTP methods such as GET, POST, PUT, and DELETE to perform different operations on application data.

For database management, I work with MySQL to store and organize information. I can create databases and tables and perform operations such as inserting, retrieving, updating, and deleting records. I can then connect the database with a Node.js backend and provide the required data through APIs.

This type of development is useful for applications such as appointment systems, booking platforms, student management systems, authentication systems, and other data-driven applications.

I focus on creating a clear connection between the frontend, backend, API, and database. For example, when a user submits a form on a website, the frontend can send the information to an API, the backend can process it, and the database can store the information.

My goal is to build reliable data-driven applications where information can be efficiently transferred, stored, and managed between different parts of the system.`;

    }


    details.classList.add("show");

}


// ======================================================
// PROJECT DATA
// ======================================================

const projects = {

    fraud: {

        title: "💳 Bank Fraud Detection",

        image: "fraud.png",

        description:
            "Bank Fraud Detection is a machine learning project designed to identify potentially fraudulent banking transactions. The project uses data analysis and machine learning techniques to analyze transaction information and identify patterns that may indicate fraudulent activity. The goal of the project is to demonstrate how machine learning can be applied to financial transaction data to support fraud detection.",

        tech:
            "Python • Machine Learning • Data Analysis • Pandas • Scikit-learn",

        github:
            "https://github.com/rithaliyanikhil-ship-it/BANK-FRAUD-DETECTION-IN-MACHINE-LEARNING.git"

    },


    proctored: {

        title: "🤖 AI Proctored Exam",

        image: "ai.png",

        description:
            "AI Proctored Exam is an examination monitoring project designed to support online examinations. The project explores the use of artificial intelligence and computer-based monitoring techniques to help identify unusual activities during an examination. It is designed to provide a technology-based approach to online exam monitoring and demonstrates how AI can be integrated into an examination system.",

        tech:
            "Python • Artificial Intelligence • Machine Learning",

        github:
            "https://github.com/rithaliyanikhil-ship-it/nsutbuildxfinal.git"

    },


    ev: {

        title: "⚡ EV Charging Station Finder",

        image: "ev.png",

        description:
            "The EV Charging Station Finder is a web application designed to help electric vehicle users find suitable charging stations. The project focuses on providing users with information about charging stations and creating a convenient interface for exploring available charging options. The project was developed as a hackathon project and demonstrates the use of web development technologies to solve a real-world problem related to electric vehicle infrastructure.",

        tech:
            "HTML • CSS • JavaScript • Node.js",

        github:
            "https://github.com/rithaliyanikhil-ship-it/ev-project.git"

    },


    salon: {

        title: "💇 Salon Management System",

        image: "sallon.png",

        description:
            "The Salon Management System is a web-based application designed to help manage salon-related activities. The system can be used to organize information related to customers, salon services and appointments. The project demonstrates how frontend technologies can be connected with a backend server and database to create a practical management application. It also helped me understand how data can be stored, retrieved and managed using a database.",

        tech:
            "JavaScript • Node.js • MySQL • HTML • CSS",

        github:
            "https://github.com/rithaliyanikhil-ship-it/nikhil_fullstack_saloon_work..git"

    },


    pg: {

        title: "🏠 PG Accommodation Website",

        image: "pg.png",

        description:
            "The PG Accommodation Website is a web-based platform designed to help students and working professionals find suitable paying guest accommodation. The website focuses on presenting accommodation information in an organized and user-friendly way. Users can explore details related to available PG accommodations, facilities and other important information. This project demonstrates my understanding of frontend development and backend technologies while working on a practical problem related to finding accommodation.",

        tech:
            "HTML • CSS • JavaScript • Node.js • MySQL",

        github:
            "https://github.com/rithaliyanikhil-ship-it/pg-accommodation-website.git"

    },
    
    currency: {

        title: "💱 Currency Converter",

        image: "currency-converter.png",

        description:
            "The Currency Converter is a web-based application that allows users to convert amounts from one currency to another. The project uses JavaScript to handle user interactions and API data to obtain exchange rates. Users can select currencies, enter an amount and view the converted value. This project helped me understand JavaScript, API integration, asynchronous operations and working with dynamic data.",

        tech:
            "HTML • CSS • JavaScript • REST API • Async/Await",

        github:
            "https://github.com/rithaliyanikhil-ship-it/currency-converter.git"

    }

};


// ======================================================
// SHOW PROJECT DETAILS
// ======================================================

function showProject(projectName) {

    const project = projects[projectName];

    if (!project) {
        console.log("Project not found:", projectName);
        return;
    }


    const details =
        document.querySelector("#project-details");

    const title =
        document.querySelector("#detail-title");

    const description =
        document.querySelector("#detail-description");

    const tech =
        document.querySelector("#detail-tech");

    const github =
        document.querySelector("#detail-github");

    const image =
        document.querySelector("#detail-image");


    // Check required elements

    if (!details || !title || !description || !tech || !github) {

        console.log(
            "Project details HTML elements are missing."
        );

        return;

    }


    // ==========================================
    // ADD PROJECT INFORMATION
    // ==========================================

    title.innerText = project.title;

    description.innerText = project.description;

    tech.innerText = project.tech;

    github.href = project.github;


    // ==========================================
    // ADD PROJECT IMAGE
    // ==========================================

    if (image) {

        image.src = project.image;

        image.alt = project.title;

    }


    // ==========================================
    // SHOW DETAILS
    // ==========================================

    details.classList.add("show");


    // ==========================================
    // SCROLL TO DETAILS
    // ==========================================

    details.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ======================================================
// CLOSE PROJECT DETAILS
// ======================================================

function closeProject() {

    const details =
        document.querySelector("#project-details");

    if (details) {

        details.classList.remove("show");

    }

}