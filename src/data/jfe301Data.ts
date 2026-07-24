import type { Lesson } from './lessons';

export const jfe301Lessons: Lesson[] = [
  {
    id: 1,
    title: "Chapter 1 - Introduction",
    sections: [
      {
        id: "jfe301-1-mc",
        title: "Trac nghiem - Introduction",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-1-mc-1",
            question: "What does IT stand for?",
            choices: [
              "Information Technology",
              "Integrated Technology",
              "Internet Technology",
              "Intelligent Technology"
            ],
            answer: "Information Technology",
            explanation: "IT stands for Information Technology, referring to the use of computers and software to manage information."
          },
          {
            id: "jfe301-1-mc-2",
            question: "Which of the following is an example of hardware?",
            choices: [
              "Microsoft Word",
              "Operating System",
              "Central Processing Unit (CPU)",
              "Web Browser"
            ],
            answer: "Central Processing Unit (CPU)",
            explanation: "Hardware refers to physical components of a computer. The CPU is a physical chip that processes instructions."
          },
          {
            id: "jfe301-1-mc-3",
            question: "Which of the following is an example of software?",
            choices: [
              "Monitor",
              "Keyboard",
              "RAM",
              "Microsoft Excel"
            ],
            answer: "Microsoft Excel",
            explanation: "Software refers to programs and operating information. Microsoft Excel is a spreadsheet application (software)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2 - Computer Systems",
    sections: [
      {
        id: "jfe301-2-mc",
        title: "Trac nghiem - Computer Systems",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-2-mc-1",
            question: "What are the main components of a computer system?",
            choices: [
              "Hardware, Software, Data",
              "CPU, RAM, HDD only",
              "Input, Output, Storage",
              "Hardware, Software, Data, and Peopleware"
            ],
            answer: "Hardware, Software, Data, and Peopleware",
            explanation: "A complete computer system consists of Hardware, Software, Data, and Peopleware."
          },
          {
            id: "jfe301-2-mc-2",
            question: "What does CPU stand for?",
            choices: [
              "Computer Processing Unit",
              "Central Processing Unit",
              "Control Processing Unit",
              "Core Processing Utility"
            ],
            answer: "Central Processing Unit",
            explanation: "CPU stands for Central Processing Unit, the primary component that executes instructions in a computer."
          },
          {
            id: "jfe301-2-mc-3",
            question: "Which type of memory loses its data when power is turned off?",
            choices: [
              "ROM",
              "HDD",
              "RAM",
              "SSD"
            ],
            answer: "RAM",
            explanation: "RAM (Random Access Memory) is volatile memory -- data is lost when the computer is powered off."
          },
          {
            id: "jfe301-2-mc-4",
            question: "What is the function of an Operating System (OS)?",
            choices: [
              "To create documents and spreadsheets",
              "To manage hardware resources and provide a user interface",
              "To connect to the internet",
              "To process graphics and video"
            ],
            answer: "To manage hardware resources and provide a user interface",
            explanation: "An OS manages hardware resources and provides an interface for users and applications."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3 - System Development",
    sections: [
      {
        id: "jfe301-3-mc",
        title: "Trac nghiem - System Development",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-3-mc-1",
            question: "What is the Software Development Life Cycle (SDLC)?",
            choices: [
              "A process for developing and maintaining software systems",
              "A programming language used in development",
              "A type of database management system",
              "A hardware upgrade process"
            ],
            answer: "A process for developing and maintaining software systems",
            explanation: "SDLC is a structured process that defines the steps involved in developing and maintaining software systems."
          },
          {
            id: "jfe301-3-mc-2",
            question: "Which SDLC phase involves gathering user requirements?",
            choices: [
              "Testing",
              "Design",
              "Analysis / Requirements",
              "Maintenance"
            ],
            answer: "Analysis / Requirements",
            explanation: "The Analysis/Requirements phase focuses on gathering and analyzing what users need from the system."
          },
          {
            id: "jfe301-3-mc-3",
            question: "What is the Waterfall model?",
            choices: [
              "An agile development approach with sprints",
              "A sequential, linear software development approach",
              "A database design methodology",
              "A network architecture model"
            ],
            answer: "A sequential, linear software development approach",
            explanation: "The Waterfall model is a sequential design process where each phase must be completed before the next begins."
          },
          {
            id: "jfe301-3-mc-4",
            question: "What does 'debugging' mean in software development?",
            choices: [
              "Writing new features",
              "The process of finding and fixing errors in code",
              "Deploying software to users",
              "Designing the user interface"
            ],
            answer: "The process of finding and fixing errors in code",
            explanation: "Debugging is the process of identifying, analyzing, and removing errors (bugs) from computer programs."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 4 - Management",
    sections: [
      {
        id: "jfe301-4-mc",
        title: "Trac nghiem - Management",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-4-mc-1",
            question: "What does IT Project Management involve?",
            choices: [
              "Only writing code for the project",
              "Planning, organizing, and controlling resources to achieve project goals",
              "Testing software for bugs only",
              "Designing the database schema"
            ],
            answer: "Planning, organizing, and controlling resources to achieve project goals",
            explanation: "IT Project Management involves planning, organizing, directing, and controlling resources to achieve specific project goals."
          },
          {
            id: "jfe301-4-mc-2",
            question: "What is a Gantt chart used for?",
            choices: [
              "Designing database relationships",
              "Visualizing project schedules and timelines",
              "Monitoring network traffic",
              "Writing programming code"
            ],
            answer: "Visualizing project schedules and timelines",
            explanation: "A Gantt chart is a bar chart that illustrates a project schedule, showing task durations and milestones."
          },
          {
            id: "jfe301-4-mc-3",
            question: "What does 'scope creep' mean in project management?",
            choices: [
              "The project finishing ahead of schedule",
              "Uncontrolled expansion of project scope without adjustments to time and cost",
              "A bug that appears in the final software",
              "A technique to reduce project costs"
            ],
            answer: "Uncontrolled expansion of project scope without adjustments to time and cost",
            explanation: "Scope creep refers to uncontrolled changes or continuous growth in a project's scope without adjusting timeline or budget."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 5 - Network Technology",
    sections: [
      {
        id: "jfe301-5-mc",
        title: "Trac nghiem - Network Technology",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-5-mc-1",
            question: "What does LAN stand for?",
            choices: [
              "Large Area Network",
              "Local Area Network",
              "Linked Access Network",
              "Logical Address Node"
            ],
            answer: "Local Area Network",
            explanation: "LAN stands for Local Area Network, a network that connects devices within a limited area such as an office or home."
          },
          {
            id: "jfe301-5-mc-2",
            question: "What is the primary function of a router?",
            choices: [
              "To connect devices within the same network only",
              "To forward data packets between computer networks",
              "To store website data",
              "To encrypt user passwords"
            ],
            answer: "To forward data packets between computer networks",
            explanation: "A router is a networking device that forwards data packets between computer networks, directing traffic on the internet."
          },
          {
            id: "jfe301-5-mc-3",
            question: "What does HTTP stand for?",
            choices: [
              "HyperText Transfer Protocol",
              "High Transfer Text Protocol",
              "Hyperlink Text Transmission Protocol",
              "Host Transfer Technology Protocol"
            ],
            answer: "HyperText Transfer Protocol",
            explanation: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the World Wide Web."
          },
          {
            id: "jfe301-5-mc-4",
            question: "What is an IP address?",
            choices: [
              "A physical address of a network card",
              "A unique numerical label assigned to each device on a network",
              "A type of internet browser",
              "A password for accessing a network"
            ],
            answer: "A unique numerical label assigned to each device on a network",
            explanation: "An IP address is a unique numerical label assigned to each device connected to a computer network."
          },
          {
            id: "jfe301-5-mc-5",
            question: "What does DNS stand for and what does it do?",
            choices: [
              "Data Network System -- stores network data",
              "Domain Name System -- translates domain names to IP addresses",
              "Digital Network Security -- secures network connections",
              "Dynamic Node Server -- allocates IP addresses dynamically"
            ],
            answer: "Domain Name System -- translates domain names to IP addresses",
            explanation: "DNS translates human-readable domain names (e.g., google.com) into IP addresses that computers use to communicate."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chapter 6 - Database Technology",
    sections: [
      {
        id: "jfe301-6-mc",
        title: "Trac nghiem - Database Technology",
        type: "multiple_choice",
        items: [
          {
            id: "jfe301-6-mc-1",
            question: "What is a Database Management System (DBMS)?",
            choices: [
              "A programming language for web development",
              "Software that manages, stores, and retrieves data in a database",
              "A type of network hardware",
              "A tool for designing user interfaces"
            ],
            answer: "Software that manages, stores, and retrieves data in a database",
            explanation: "A DBMS is software that manages the creation, maintenance, and use of databases."
          },
          {
            id: "jfe301-6-mc-2",
            question: "What does SQL stand for?",
            choices: [
              "Structured Query Language",
              "Simple Query Logic",
              "System Query List",
              "Standard Query Link"
            ],
            answer: "Structured Query Language",
            explanation: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases."
          },
          {
            id: "jfe301-6-mc-3",
            question: "What is a primary key in a database?",
            choices: [
              "The first column of any table",
              "A unique identifier for each record in a table",
              "A password used to access the database",
              "The most important data in a record"
            ],
            answer: "A unique identifier for each record in a table",
            explanation: "A primary key uniquely identifies each row in a database table. No two rows can have the same primary key value."
          },
          {
            id: "jfe301-6-mc-4",
            question: "Which SQL command is used to retrieve data from a database?",
            choices: [
              "INSERT",
              "UPDATE",
              "SELECT",
              "DELETE"
            ],
            answer: "SELECT",
            explanation: "The SELECT statement is used to retrieve data from one or more tables in a database."
          },
          {
            id: "jfe301-6-mc-5",
            question: "What is database normalization?",
            choices: [
              "The process of backing up a database",
              "Organizing a database to reduce data redundancy and improve integrity",
              "Converting a database to a different format",
              "Encrypting database data for security"
            ],
            answer: "Organizing a database to reduce data redundancy and improve integrity",
            explanation: "Database normalization organizes columns and tables to reduce data redundancy and improve data integrity."
          }
        ]
      }
    ]
  }
];
