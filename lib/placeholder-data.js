export const posts = [
  {
    id: 1,
    title: "Coding for fun!",
    date: "01/18/2024",
    intro: "Ever wondered why some folks do it all for the laughs?",
    body: `
    In the labyrinth of technology, where algorithms thrive and data flows ceaselessly, lies a realm where ancient wisdom meets modern innovation: the art of coding. This craft, though draped in the trappings of our digital age, echoes the timeless principles of discipline, ingenuity, and camaraderie cherished by civilizations of old.

    In the halls of antiquity, scholars pursued knowledge with unwavering dedication, much like today's coders navigate the intricate architectures of software. Just as ancient artisans honed their skills through practice, modern programmers refine their craft through relentless iteration and problem-solving.

    Moreover, the spirit of collaboration that permeated ancient societies finds expression in today's coding community. Boundaries dissolve as individuals unite in online forums, sharing insights and solving problems together.

    Yet, amidst the complexities, there lies a simple joy in coding—a satisfaction akin to the triumph of old victories. It is a testament to the timeless pursuit of knowledge and creation that transcends the boundaries of time and technology.

    In coding, we find not just a profession, but a profound connection to the noble ideals that have shaped humanity throughout the ages. It is a timeless pursuit—one that brings fulfillment, camaraderie, and the boundless joy of creation.
    
    `,
  },
  {
    id: 2,
    title: "Snazzling",
    date: "01/20/2024",
    intro: "A Beginner's Guide to Event-Driven Systems Based on Snazzles",
    body: `
    Events are the heartbeat of modern applications, and event-driven architectures have become increasingly popular for building scalable and resilient systems. In this paradigm, components communicate with each other by emitting and reacting to events, decoupling them from direct dependencies and promoting loose coupling. Enter Snazzles – a lightweight and flexible event bus framework that makes it easy to implement event-driven systems.
    At its core, Snazzles provides a simple yet powerful mechanism for publishing and subscribing to events. Imagine a scenario where you have multiple components in your application that need to respond to a user's action, such as placing an order. Instead of tightly coupling these components together, you can use Snazzles to emit an "OrderPlaced" event, which other components can listen for and react accordingly.
    Getting started with Snazzles is a breeze. First, you'll need to import the Snazzles library and create an instance of the event bus:

    <code></code>
    `,
  },
  {
    id: 3,
    title: "Math for CS",
    date: "02/12/2024",
    intro:
      "Do  we really need maths for CS? If so what kind of math do we need.",
    body: `Here's a short blog post on the topic: "Do We Really Need Math for Computer Science? If So, What Kind of Math Do We Need?"

    Mathematics has been an integral part of computer science since its inception. While it's true that not every programming task requires advanced mathematical knowledge, a solid foundation in certain areas of mathematics can greatly benefit computer scientists and software developers.
    
    Firstly, it's important to understand that computer science is rooted in logic and problem-solving. Mathematics provides the tools and frameworks to think logically, analyze problems systematically, and devise efficient solutions. Concepts like algorithm analysis, data structures, and computational complexity heavily rely on mathematical principles.
    
    One area of mathematics that is particularly relevant to computer science is discrete mathematics. Topics like sets, logic, combinatorics, and graph theory form the backbone of many algorithms and data structures used in software development. Understanding these concepts can help developers design efficient algorithms, optimize performance, and reason about the correctness of their code.
    
    Another crucial branch of mathematics for computer scientists is calculus. While not directly applicable to all programming tasks, calculus is essential for understanding and developing algorithms in fields like machine learning, computer graphics, and scientific computing. Concepts like derivatives, integrals, and differential equations are fundamental in these domains.
    
    Probability and statistics are also increasingly important in computer science, particularly in areas like data analysis, machine learning, and artificial intelligence. Understanding probability distributions, hypothesis testing, and statistical modeling can help developers build more robust and reliable systems that can handle uncertainty and make data-driven decisions.
    
    Additionally, linear algebra plays a significant role in computer graphics, image processing, and other areas where matrix operations and vector calculations are crucial. Familiarity with linear algebra concepts can greatly simplify the implementation of algorithms in these domains.
    
    While it's true that not every computer science role requires advanced mathematical proficiency, having a solid grasp of the relevant mathematical concepts can provide developers with a deeper understanding of the underlying principles, enable them to design more efficient and effective solutions, and open doors to more specialized areas of computer science.
    
    In summary, while the specific mathematical requirements may vary depending on the specific field or job role, a strong foundation in areas like discrete mathematics, calculus, probability and statistics, and linear algebra can greatly benefit computer scientists and software developers. Embracing mathematics as a tool can lead to better problem-solving skills, more efficient algorithms, and a deeper understanding of the fundamental principles that drive computer science.
    `,
  },
  {
    id: 4,
    title: "Endless Conundrums",
    date: "03/02/2024",
    intro: "Unraveling the Deepest Parts of Asynchronous JS",
    body: `

    Asynchronous programming in JavaScript is a double-edged sword. On one hand, it empowers developers to build non-blocking, responsive applications that can handle multiple operations concurrently. On the other hand, it introduces a maze of potential pitfalls and conundrums that can leave even the most seasoned developers scratching their heads.
    
    At the heart of asynchronous JavaScript lies the event loop, a mechanism that governs the execution of asynchronous tasks. While its purpose is to ensure the smooth flow of operations, understanding how it works can be a daunting task, especially when dealing with nested callbacks, promises, and async/await constructs.
    
    One of the most common conundrums in asynchronous programming is the dreaded "callback hell" – a situation where nested callbacks create a deeply indented, hard-to-read, and error-prone codebase. Promises were introduced to alleviate this issue, offering a more linear and readable approach to handling asynchronous operations. However, even with promises, developers can find themselves entangled in complex Promise chains, leading to a new set of challenges known as the "Promise hell."
    
    Enter async/await, a syntactical sugar on top of promises that aims to simplify asynchronous code and make it more readable. While async/await undoubtedly improves code clarity and reduces the likelihood of callback or Promise hell, it introduces its own set of conundrums. One such challenge is the potential for unhandled promise rejections, which can lead to silent failures and hard-to-debug issues.
    
    Another deep conundrum in asynchronous JavaScript is the concept of microtasks and macrotasks. The event loop prioritizes the execution of microtasks, such as Promise callbacks, over macrotasks like setTimeout or setInterval. This can lead to counterintuitive behavior, especially when dealing with nested asynchronous operations involving both microtasks and macrotasks.
    
    Unraveling these conundrums requires a deep understanding of the event loop, the execution order of asynchronous tasks, and the intricacies of promises and async/await. It's a journey that can test even the most seasoned developers, but one that is essential for building robust, performant, and maintainable asynchronous applications.
    
    In the ever-evolving landscape of JavaScript, new patterns, libraries, and techniques continue to emerge, offering alternative approaches to tackling asynchronous programming challenges. However, at the core of these solutions lies the fundamental understanding of how JavaScript handles asynchronous operations – a knowledge that can unlock the power of truly event-driven, non-blocking applications.
    
    So, embark on this endless journey of unraveling the deepest parts of asynchronous JavaScript, for it is a path that will continuously challenge and refine your skills as a developer, unlocking new realms of possibilities in the world of modern web development.
    `,
  },
  {
    id: 5,
    title: "Another Star is born",
    date: "12/18/2023",
    intro:
      "There is Nothing Perfect in the World, Only JavaScript - The Birth of Cain, a New JS Framework",
    body: `

    In the ever-evolving landscape of web development, JavaScript has emerged as the undisputed champion, a versatile language that has revolutionized the way we build modern applications. From humble beginnings as a simple scripting tool, JavaScript has grown into a powerful force, driving the creation of countless frameworks and libraries that have reshaped the digital world.
    
    Today, we bear witness to the birth of a new star in the JavaScript universe – Cain, a framework that promises to redefine the way we approach web development. Born from the collective frustrations and aspirations of a team of seasoned developers, Cain is a bold declaration that there is nothing perfect in this world, except for JavaScript itself.
    
    At the core of Cain lies a philosophy that embraces simplicity, efficiency, and developer happiness. This framework strips away the complexities and bloat that have plagued many of its predecessors, offering a lean and minimalistic approach to building web applications. With Cain, you'll find yourself writing less code, yet achieving more, as its streamlined architecture and intuitive syntax empower you to focus on what truly matters – delivering exceptional user experiences.
    
    One of the standout features of Cain is its unwavering commitment to performance. Leveraging the latest advancements in JavaScript and the power of modern browsers, Cain delivers lightning-fast rendering and seamless interactivity, ensuring that your applications feel snappy and responsive, even on resource-constrained devices.
    
    But Cain is more than just a performance powerhouse; it's a canvas for creativity and innovation. With its flexible and extensible nature, developers can easily integrate third-party libraries, create custom plugins, and tailor the framework to their specific needs. Whether you're building a simple single-page application or a complex, data-intensive system, Cain provides the tools and flexibility to bring your vision to life.
    
    Beyond its technical prowess, Cain embodies a vibrant community of developers who share a passion for pushing the boundaries of web development. With a strong emphasis on collaboration, knowledge-sharing, and continuous improvement, the Cain ecosystem promises to be a breeding ground for cutting-edge techniques, best practices, and groundbreaking innovations.
    
    As we welcome Cain into the world of JavaScript frameworks, we can't help but feel a sense of excitement and anticipation. This new star may be born, but its potential is limitless, and its impact on the web development landscape is yet to be fully realized. So, embrace the power of JavaScript, and let Cain be your guide as you embark on a journey of creating truly remarkable web experiences.
    `,
  },
];
export const projects = [
  {
    id: 2,
    title: "Agserver",
    stacks: ["react", "node", "tailwind", "rapid api"],
    source: "https://github.com/chibuzorEbede/ag",
    live: "https://agserver.vercel.app/",
    image: "/images/agserver-preview.png",
  },
  {
    id: 3,
    title: "Jhns Portfolio",
    stacks: ["next", "css", "framer"],
    source: "https://github.com/chibuzorEbede/portfolio",
    live: "https://jhnsc-portfolio.vercel.app/",
    image: "/images/portfolio_screenshot.png",
  },
  {
    id: 4,
    title: "JobRabbit",
    stacks: ["rapid api", "React", "Tailwind"],
    source: "https://github.com/chibuzorEbede/jobrabbit",
    live: "https://jobrabbit.vercel.app/",
    image: "/images/jobrabbit-preview.png",
  },
  // {
  //   id: 4,
  //   title: "IP Geolocation",
  //   stacks: ["next", "css", "maps api"],
  //   source: "github.com/username/repo",
  //   live: "https://thelivesite.com",
  //   image: "/images/about_image.png",
  // },
  // {
  //   id: 5,
  //   title: "Live Chat widget",
  //   stacks: ["react", "mui", "api"],
  //   source: "github.com/username/repo",
  //   live: "https://thelivesite.com",
  //   image: "/images/about_image.png",
  // },
];

export const skills = [
  "html",
  "css",
  "javascript",
  "node js",
  "mongo db",
  "react",
];

export const projectData = [
  {
    id: 1,
    title: "Agserver",
    stack: "typescript | tailwind | rapid api | nodejs",
    giturl: "https://github.com/chibuzorEbede/ag",
    liveurl: "https://agserver.vercel.app/",
    brief:
      " AgServer is a peer to peer knowledge sharing platform that enables farmers to ask questions and get answers from one another or  agents via any simple mobile phone without leaving their farms",
  },
  {
    id: 2,
    title: "IP Address Tracker",
    stack: "html | css | vanilla js",
    giturl:
      "https://github.com/chibuzorEbede/frontend-mentor-project-solutions/tree/main/ip-address-tracker-master",
    liveurl: "https://frontend-mentor-project-solutions.vercel.app/",
    brief:
      "An app that let's users search details their public IP address. Users can also search for any IP addresses or domains and see the key information and location",
  },
  {
    id: 3,
    title: "CE - Portfolio",
    stack: "nextjs | css-modules | react-spring",
    giturl: "https://github.com/chibuzorEbede/portfolio",
    liveurl: "https://jhnsc-portfolio.vercel.app/",
    brief:
      " This is the website you are currently viewing. It's my own spot on the internet, where I showcase my projects.",
  },
  {
    id: 4,
    title: "JobRabbit",
    stack: "react | tailwind | jobs-api",
    giturl: "https://github.com/chibuzorEbede/jobrabbit",
    liveurl: "https://jobrabbit.vercel.app/",
    brief:
      "JobRabbit is a job board web app helping users easily find and apply for jobs across various industries and locations.",
  },
];

// {
//   id: 4,
//   title: "iBuddy[building...]",
//   stack: "next | shadcn | LLMs",
//   giturl: "https://github.com/chibuzorEbede/ibuddy",
//   liveurl: "https://ibuddy.vercel.app/",
//   brief:
//     " JobRabbit is a job board web app helping users easily find and apply for jobs across various industries and locations.",
// },
