export type Project = {
    title: string;
    type: string;
    description: string;
    tech: string[];
    features: string[];
    publicationTitle?: string;
    publicationLink?: string;
};

export type Experience = {
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string;
};

export type Education = {
    degree: string;
    institute: string;
    instituteLink?: string;
    duration: string;
    description: string;
};

export const profile = {
    name: "Sohaib Bin Waheed",
    title: "React Native Developer | React JS Developer",
    location: "Rawalpindi, Pakistan",
    email: "sohaibwaheed74@gmail.com",
    phone: "03315758299",
    linkedin: "https://www.linkedin.com/in/sohaib-bin-waheed/",
    github: "https://github.com/SohaibWaheed74",
    resume: "/Sohaib_Resume.pdf",
    image: "/profile.JPG",
    summary:
        "Motivated Computer Science graduate eager to learn, grow, and contribute to meaningful IT projects. Passionate about improving technical skills, solving problems, and working in a professional environment.",
};

export const skills: string[] = [
    "React Native",
    "React JS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "C#",
    "ASP.NET MVC",
    "ASP.NET Web API",
    "SQL Server",
    "REST APIs",
    "Git & GitHub",
    "Firebase Basics",
    "Microsoft Office",
    
];

export const projects: Project[] = [
    {
        title: "Computer Architecture Toolkit",
        type: "Final Year Project",
        description:
            "A React Native educational application that helps students understand computer architecture concepts through custom architecture design, instruction creation, register visualization, memory visualization, stack, flags, and step-by-step execution.",
        tech: ["React Native", "JavaScript", "ASP.NET Web API", "SQL Server"],
        features: [
            "Custom architecture design",
            "Instruction design screen",
            "Register and flag visualization",
            "Memory and stack visualization",
            "Step-by-step program execution",
            "Addressing modes support",
            "Published research paper based on this project",
        ],
        publicationTitle: "Computer Architecture Toolkit - Research Paper",
        publicationLink:
            "https://amresearchjournal.com/index.php/Journal/article/view/2005",
    },
    {
        title: "Waste-to-Resource Exchange Management System",
        type: "Web + API Project",
        description:
            "A web-based system where users can list waste materials, manage products, send exchange requests, and interact through user and admin dashboards.",
        tech: ["ASP.NET MVC", "C#", "SQL Server", "Web API", "HTML", "CSS"],
        features: [
            "User registration and login",
            "Product listing management",
            "Exchange request system",
            "Admin dashboard",
            "API-based functionality",
        ],
    },
    {
        title: "Airline Reservation System",
        type: "Desktop Application",
        description:
            "A C# Windows Forms application for managing flights, passengers, bookings, and seat availability.",
        tech: ["C#", "Windows Forms", "SQL Server"],
        features: [
            "Flight management",
            "Passenger management",
            "Booking system",
            "Seat availability update",
        ],
    },
    {
        title: "OS Scheduling Algorithms",
        type: "Academic Project",
        description:
            "A project implementing CPU scheduling algorithms including FCFS, SJF, Priority Scheduling, and Round Robin with Gantt chart and average time calculation.",
        tech: ["C#", "SQL Server", "Operating Systems"],
        features: [
            "FCFS scheduling",
            "SJF scheduling",
            "Priority scheduling",
            "Round Robin scheduling",
            "Gantt chart output",
        ],
    },
];

export const experience: Experience[] = [
    {
        role: "Customer Support & Data Entry Officer",
        company: "Eposmatic (Private) Limited",
        location: "Islamabad, Pakistan",
        duration: "June 2026 - Present",
        description:
            "Provide customer support to restaurant clients using the POS (Point of Sale) system through phone, email, and remote assistance. Resolve software issues related to billing, orders, payments, and POS functionality. Manage restaurant menu updates by adding new items, modifying prices, categories, and product details. Configure POS settings according to client requirements, maintain accurate customer and restaurant data, document reported issues, collaborate with the technical team for timely resolutions, and deliver professional customer service while handling multiple support requests efficiently.",
    },
    {
        role: "Educational Internship / Self-Learning",
        company: "Morosoft Technologies",
        location: "Saidpur Road, Rawalpindi",
        duration: "Feb 2026 - May 2026",
        description:
            "Completed educational internship and self-learning practice focused on software development concepts, project improvement, practical programming, and professional learning.",
    },
];

export const education: Education[] = [
    {
        degree: "BS Computer Science",
        institute:
            "Barani Institute of Information Technology, PMAS Arid Agriculture University",
        instituteLink: "https://biit.edu.pk/",
        duration: "2022 - 2026",
        description:
            "Studied Computer Science, databases, web development, mobile application development, computer architecture, operating systems, computer networks, and final year project development.",
    },
    {
        degree: "FSc Pre-Engineering",
        institute: "Steps College, Rawalpindi",
        duration: "2020 - 2022",
        description: "Completed intermediate education in pre-engineering.",
    },
    {
        degree: "Matriculation",
        institute: "Siddeeq Public School, Rawalpindi",
        duration: "2018 - 2020",
        description: "Completed matriculation education.",
    },
];

export const publication = {
  title: "An Interactive Toolkit for Designing and Exploring Custom CPU Architectures",
  journal: "Annual Methodological Archive Research Review (AMARR)",
  issue: "Vol. 4 No. 4 (2026)",
  section: "Computer Science",
  publishedDate: "2026-05-01",
  authors: [
    "Sohaib Bin Waheed",
    "Ghulam Mustafa",
    "Abdul Rehman",
    "Samiullah Ishtiaq",
    "Saeed Iqbal",
  ],
  description:
    "A research publication based on my Final Year Project, Computer Architecture Toolkit. The paper presents an interactive educational toolkit for designing, exploring, and understanding custom CPU architectures.",
  link: "https://amresearchjournal.com/index.php/Journal/article/view/2005",
};
