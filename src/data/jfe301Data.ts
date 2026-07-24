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
            exam: "de1",
            examOrder: 53,
            image: "/images/jfe301/q53-de1.png",
            choices: ["A system that aims to utilize recyclable energy, supply stable electric power, and optimise demand adjustment through integrated control of power generation and power consumption on the basis of communication and information-processing technology", "A system that can provide ideal health advice to each individual by performing analysis on the basis of similar case reports such as the results of health examinations and medication use", "A system that can search for information on restaurants and entertainment, send and receive traffic information, and communicate the current position at the time of an emergency by using information-processing equipment installed in vehicles", "A system that supports varied work styles by enabling mutual communication between workers with varied working styles, such as home-based employees and senior workers"],
            answer: "A system that aims to utilize recyclable energy, supply stable electric power, and optimise demand adjustment through integrated control of power generation and power consumption on the basis of communication and information-processing technology"
          },
          {
            id: "jfe301-1-mc-2",
            exam: "de1",
            examOrder: 54,
            image: "/images/jfe301/q54-de1.png",
            choices: ["Causes of defect occurrence in a factory are decomposed and arranged in a tree shape for analysts to statistically investigate the cause and solution.", "Instead of programming the working method for the production robot in the factory, the robot itself learns, thus improving work efficiency.", "Production equipment in a factory is connected through high-speed communication so that the host computer can be controlled in real time.", "Productivity of employees in the factory improves each time the cumulative production volume doubles, and the unit cost reduces at a fixed percentage."],
            answer: "Instead of programming the working method for the production robot in the factory, the robot itself learns, thus improving work efficiency."
          },
          {
            id: "jfe301-1-mc-3",
            exam: "de1",
            examOrder: 55,
            image: "/images/jfe301/q55-de1.png",
            choices: ["An accelerometer detects the vehicle colliding against a wall and causes the air bag to inflate, thus protecting the passenger from injury.", "By acquiring and processing numerous images, the driver assistance system can more reliably distinguish between a pedestrian and a vehicle.", "By installing equipment that automatically performs idling stops, the fuel efficiency improves compared to that of a vehicle operated by a very experienced driver.", "The navigation system updates the software via a mobile phone line and refreshes the map."],
            answer: "By acquiring and processing numerous images, the driver assistance system can more reliably distinguish between a pedestrian and a vehicle."
          },
          {
            id: "jfe301-1-mc-4",
            exam: "de1",
            examOrder: 60,
            image: "/images/jfe301/q60-de1.png",
            choices: ["ANSI standards", "BSI standards", "FCC standards", "ISO standards"],
            answer: "ISO standards"
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
            exam: "de1",
            examOrder: 1,
            image: "/images/jfe301/q1-de1.png",
            choices: ["^e/+dc−ba", "^-ab/+cde", "^/−ab+cde", "^e/−ab+cd"],
            answer: "^/−ab+cde"
          },
          {
            id: "jfe301-2-mc-2",
            exam: "de1",
            examOrder: 2,
            image: "/images/jfe301/q2-de1.png",
            choices: ["27.0", "668.25", "1542.5", "5346.0"],
            answer: "668.25"
          },
          {
            id: "jfe301-2-mc-3",
            exam: "de1",
            examOrder: 5,
            image: "/images/jfe301/q5-de1.png",
            choices: ["a+bc×de+×", "abc×+de+×", "abc×+de×+", "abc+×de×+"],
            answer: "abc×+de×+"
          },
          {
            id: "jfe301-2-mc-4",
            exam: "de1",
            examOrder: 6,
            image: "/images/jfe301/q6-de1.png",
            choices: ["Left child of 16", "Left child of 23", "Right child of 3", "Right child of 10"],
            answer: "Right child of 10"
          },
          {
            id: "jfe301-2-mc-5",
            exam: "de1",
            examOrder: 7,
            image: "/images/jfe301/q7-de1.png",
            choices: ["2", "3", "5", "7"],
            answer: "3"
          },
          {
            id: "jfe301-2-mc-6",
            exam: "de1",
            examOrder: 9,
            image: "/images/jfe301/q9-de1.png",
            choices: ["Accumulator", "Instruction decoder", "Instruction register", "Program register (program counter)"],
            answer: "Instruction register"
          },
          {
            id: "jfe301-2-mc-7",
            exam: "de1",
            examOrder: 10,
            image: "/images/jfe301/q10-de1.png",
            choices: ["When a cache hit occurs, the CPU fetches data from ROM.", "When a cache hit occurs, the CPU fetches data from the main memory.", "When a cache miss occurs, the CPU fetches data from the cache memory.", "When a cache miss occurs, the CPU fetches data from the main memory."],
            answer: "When a cache miss occurs, the CPU fetches data from the main memory."
          },
          {
            id: "jfe301-2-mc-8",
            exam: "de1",
            examOrder: 11,
            image: "/images/jfe301/q11-de1.png",
            choices: ["12.8", "128", "512", "1280"],
            answer: "128"
          },
          {
            id: "jfe301-2-mc-9",
            exam: "de1",
            examOrder: 12,
            image: "/images/jfe301/q12-de1.png",
            choices: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
            answer: "RAID 1"
          },
          {
            id: "jfe301-2-mc-10",
            exam: "de1",
            examOrder: 13,
            image: "/images/jfe301/q13-de1.png",
            choices: ["(iii), (ii), (iv), (i)", "(iii), (iv), (ii), (i)", "(iv), (ii), (i), (iii)", "(iv), (iii), (i), (ii)"],
            answer: "(iii), (iv), (ii), (i)"
          },
          {
            id: "jfe301-2-mc-11",
            exam: "de1",
            examOrder: 14,
            image: "/images/jfe301/q14-de1.png",
            choices: ["10", "34", "90", "97"],
            answer: "97"
          },
          {
            id: "jfe301-2-mc-12",
            exam: "de1",
            examOrder: 15,
            image: "/images/jfe301/q15-de1.png",
            choices: ["7.5", "10", "11.5", "19"],
            answer: "11.5"
          },
          {
            id: "jfe301-2-mc-13",
            exam: "de1",
            examOrder: 17,
            image: "/images/jfe301/q17-de1.png",
            choices: ["AND circuit", "NAND circuit", "OR circuit", "XOR circuit"],
            answer: "NAND circuit"
          },
          {
            id: "jfe301-2-mc-14",
            exam: "de1",
            examOrder: 18,
            image: "/images/jfe301/q18-de1.png",
            choices: ["73940", "73941", "73944", "73947"],
            answer: "73940"
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
            exam: "de1",
            examOrder: 4,
            image: "/images/jfe301/q4-de1.png",
            choices: ["123-456-12", "1-234-5678", "123-456-7890", "12345-678-910"],
            answer: "123-456-7890"
          },
          {
            id: "jfe301-3-mc-2",
            exam: "de1",
            examOrder: 8,
            image: "/images/jfe301/q8-de1.png",
            choices: ["Constructors are invoked only after an object has been fully instantiated.", "In class-based OOP, constructors do not play any role in object creation or initialization.", "Constructors are responsible for initializing objects in class-based OOP.", "Constructors are inherited by subclasses exactly like regular methods in all class-based OOP languages."],
            answer: "Constructors are responsible for initializing objects in class-based OOP."
          },
          {
            id: "jfe301-3-mc-3",
            exam: "de1",
            examOrder: 16,
            image: "/images/jfe301/q16-de1.png",
            choices: ["Assembler", "Compiler", "Interpreter", "Linker"],
            answer: "Linker"
          },
          {
            id: "jfe301-3-mc-4",
            exam: "de1",
            examOrder: 35,
            image: "/images/jfe301/q35-de1.png",
            choices: ["Activity diagram", "Communication diagram", "Interaction overview diagram", "Use case diagram"],
            answer: "Use case diagram"
          },
          {
            id: "jfe301-3-mc-5",
            exam: "de1",
            examOrder: 36,
            image: "/images/jfe301/q36-de1.png",
            choices: ["Adapter", "Factory", "Iterator", "Singleton"],
            answer: "Adapter"
          },
          {
            id: "jfe301-3-mc-6",
            exam: "de1",
            examOrder: 37,
            image: "/images/jfe301/q37-de1.png",
            choices: ["Abstraction and grouping of several objects that have common properties", "Bundling of data and procedures operating on the data as a single object and concealing their implementation inside the object", "Creation of a base class by extracting the properties that are common among classes", "Inheritance of the properties of a base class by a subclass"],
            answer: "Bundling of data and procedures operating on the data as a single object and concealing their implementation inside the object"
          },
          {
            id: "jfe301-3-mc-7",
            exam: "de1",
            examOrder: 38,
            image: "/images/jfe301/q38-de1.png",
            choices: ["Adaptive maintenance", "Corrective maintenance", "Perfective maintenance", "Preventive maintenance"],
            answer: "Adaptive maintenance"
          },
          {
            id: "jfe301-3-mc-8",
            exam: "de1",
            examOrder: 39,
            image: "/images/jfe301/q39-de1.png",
            choices: ["Agile model", "Prototyping model", "Spiral model", "Waterfall model"],
            answer: "Agile model"
          },
          {
            id: "jfe301-3-mc-9",
            exam: "de1",
            examOrder: 40,
            image: "/images/jfe301/q40-de1.png",
            choices: ["Defined", "Managed", "Optimizing", "Quantitatively managed"],
            answer: "Optimizing"
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
            exam: "de1",
            examOrder: 32,
            image: "/images/jfe301/q32-de1.png",
            choices: ["Risk acceptance", "Risk avoidance", "Risk mitigation", "Risk sharing"],
            answer: "Risk avoidance"
          },
          {
            id: "jfe301-4-mc-2",
            exam: "de1",
            examOrder: 41,
            image: "/images/jfe301/q41-de1.png",
            choices: ["Communication", "Procurement", "Risk", "Scope"],
            answer: "Scope"
          },
          {
            id: "jfe301-4-mc-3",
            exam: "de1",
            examOrder: 42,
            image: "/images/jfe301/q42-de1.png",
            choices: ["51", "60", "65", "66"],
            answer: "66"
          },
          {
            id: "jfe301-4-mc-4",
            exam: "de1",
            examOrder: 44,
            image: "/images/jfe301/q44-de1.png",
            choices: ["Creating a model that accurately reflects the current performance, as the first phase of modeling", "Generating simulated transactions and predicting the response time and throughput of a service", "Understanding the chronological usage of a specific resource and predicting usage changes in the future", "Using mathematical techniques, such as queueing theory, and predicting the response time and throughput of a service"],
            answer: "Understanding the chronological usage of a specific resource and predicting usage changes in the future"
          },
          {
            id: "jfe301-4-mc-5",
            exam: "de1",
            examOrder: 46,
            image: "/images/jfe301/q46-de1.png",
            choices: ["A management practice used to provide the overall governance of an organization in a business process environment to improve agility and operational performance", "A management strategy used to automate key business processes to help saving time and promote efficiency, ultimately reducing costs to enhance the value of an organization", "A management system used in marketing and business to automate sales activities, such as contact management, order taking and fulfillment, information sharing, inventory monitoring, and sales forecast analysis", "A management technique used to redesign and restructure value-creating processes in an organization to gain significant benefits in productivity, profitability, service, and quality through maximizing the potential of individuals and teams"],
            answer: "A management technique used to redesign and restructure value-creating processes in an organization to gain significant benefits in productivity, profitability, service, and quality through maximizing the potential of individuals and teams"
          },
          {
            id: "jfe301-4-mc-6",
            exam: "de1",
            examOrder: 47,
            image: "/images/jfe301/q47-de1.png",
            choices: ["Case study", "Debate", "In-basket", "Role-playing"],
            answer: "In-basket"
          },
          {
            id: "jfe301-4-mc-7",
            exam: "de1",
            examOrder: 48,
            image: "/images/jfe301/q48-de1.png",
            choices: ["Concluding a contract", "RFI", "RFP", "Selecting a provider"],
            answer: "RFP"
          },
          {
            id: "jfe301-4-mc-8",
            exam: "de1",
            examOrder: 49,
            image: "/images/jfe301/q49-de1.png",
            choices: ["Horizontal integration", "Market penetration", "Synergy effect", "Vertical integration"],
            answer: "Synergy effect"
          },
          {
            id: "jfe301-4-mc-9",
            exam: "de1",
            examOrder: 50,
            image: "/images/jfe301/q50-de1.png",
            choices: ["Direct distribution", "Franchising", "Licensing", "Wholesaling"],
            answer: "Franchising"
          },
          {
            id: "jfe301-4-mc-10",
            exam: "de1",
            examOrder: 51,
            image: "/images/jfe301/q51-de1.png",
            choices: ["Since establishing a continuing relationship with the main customers is the target, the number of complaints is the indicator.", "Since improvement in manufacturing productivity of the product is the target, a reduction in the number of days in manufacturing is the indicator.", "Since improvement in product development capability is the target, time for classroom training on product development areas is the indicator.", "Since sustainable growth is the target, backlog of orders is the indicator."],
            answer: "Since improvement in manufacturing productivity of the product is the target, a reduction in the number of days in manufacturing is the indicator."
          },
          {
            id: "jfe301-4-mc-11",
            exam: "de1",
            examOrder: 52,
            image: "/images/jfe301/q52-de1.png",
            choices: ["Purchasing samples and modifying them in-house", "Outsourcing in batches", "Modifying in-house assets", "Creating new products in-house"],
            answer: "Purchasing samples and modifying them in-house"
          },
          {
            id: "jfe301-4-mc-12",
            exam: "de1",
            examOrder: 56,
            image: "/images/jfe301/q56-de1.png",
            choices: ["Designing products and services that meet or exceed customers’ expectations", "Focusing on the appointment of staff with long-term work experience in a similar environment", "Prioritizing central decisions rather than empowerment to ensure the quality of products and services", "Promoting the capability of each department to work independently in a competitive manner"],
            answer: "Designing products and services that meet or exceed customers’ expectations"
          },
          {
            id: "jfe301-4-mc-13",
            exam: "de1",
            examOrder: 57,
            image: "/images/jfe301/q57-de1.png",
            choices: ["Cafeteria plan", "Free-agent system", "Work sharing", "Work-life balance"],
            answer: "Work sharing"
          },
          {
            id: "jfe301-4-mc-14",
            exam: "de1",
            examOrder: 58,
            image: "/images/jfe301/q58-de1.png",
            choices: ["Linear Programming", "Monte Carlo Analysis", "Scenario Analysis", "Sensitivity Analysis"],
            answer: "Monte Carlo Analysis"
          },
          {
            id: "jfe301-4-mc-15",
            exam: "de1",
            examOrder: 59,
            image: "/images/jfe301/q59-de1.png",
            choices: ["14,000", "18,200", "26,000", "26,200"],
            answer: "18,200"
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
            exam: "de1",
            examOrder: 3,
            image: "/images/jfe301/q3-de1.png",
            choices: ["Utilization", "Average inter-arrival time", "Average service time", "Average retention number"],
            answer: "Utilization"
          },
          {
            id: "jfe301-5-mc-2",
            exam: "de1",
            examOrder: 24,
            image: "/images/jfe301/q24-de1.png",
            choices: ["It caches the Internet access to speed up the connections when revisiting the same websites.", "It converts between private and global IP addresses.", "It inspects the IP packets during transmission to detect possible attacks and intrusions from the Internet.", "It only passes the IP packets intended for specific terminals."],
            answer: "It converts between private and global IP addresses."
          },
          {
            id: "jfe301-5-mc-3",
            exam: "de1",
            examOrder: 25,
            image: "/images/jfe301/q25-de1.png",
            choices: ["Congestion control", "Error control", "Flow control", "Media access control"],
            answer: "Flow control"
          },
          {
            id: "jfe301-5-mc-4",
            exam: "de1",
            examOrder: 26,
            image: "/images/jfe301/q26-de1.png",
            choices: ["It assigns an unused IP address from the pool of addresses in response to a request from a PC or a printer.", "It associates domain or host names with IP addresses.", "It converts private IP addresses used within a company into global IP addresses and enables access to the Internet.", "It enables a program in a server to be called only by its name without being aware of the IP address of the server."],
            answer: "It associates domain or host names with IP addresses."
          },
          {
            id: "jfe301-5-mc-5",
            exam: "de1",
            examOrder: 27,
            image: "/images/jfe301/q27-de1.png",
            choices: ["IEEE 802.11", "LTE", "NFC", "UWB"],
            answer: "LTE"
          },
          {
            id: "jfe301-5-mc-6",
            exam: "de1",
            examOrder: 28,
            image: "/images/jfe301/q28-de1.png",
            choices: ["Authentication by answer to a Security Question and other thing the user knows", "Authentication by fingerprint and other biometrics", "Authentication by password and one-time code generated by a smartphone application", "Authentication by username and password"],
            answer: "Authentication by password and one-time code generated by a smartphone application"
          },
          {
            id: "jfe301-5-mc-7",
            exam: "de1",
            examOrder: 29,
            image: "/images/jfe301/q29-de1.png",
            choices: ["Authentication", "Availability", "Confidentiality", "Integrity"],
            answer: "Integrity"
          },
          {
            id: "jfe301-5-mc-8",
            exam: "de1",
            examOrder: 30,
            image: "/images/jfe301/q30-de1.png",
            choices: ["A brute force attack software tool", "A malicious computer program that presents itself as legitimate", "A malicious user that steals private information from a system", "A software tool to decrypt an encrypted password"],
            answer: "A malicious computer program that presents itself as legitimate"
          },
          {
            id: "jfe301-5-mc-9",
            exam: "de1",
            examOrder: 31,
            image: "/images/jfe301/q31-de1.png",
            choices: ["A range of different types of software including adware, spyware, and freeware", "Malicious software blocking access to a victimized computer and demanding money to unblock it", "Software that assigns randomized MAC addresses to PCs to ensure user privacy on the Internet", "Software that generates the random numbers required by computer security application software"],
            answer: "Malicious software blocking access to a victimized computer and demanding money to unblock it"
          },
          {
            id: "jfe301-5-mc-10",
            exam: "de1",
            examOrder: 33,
            image: "/images/jfe301/q33-de1.png",
            choices: ["A generic term for an organization that is established within a company, organization, or government agency, receiving reports on information security incidents for investigation and response", "A generic term for people or an organization whose aim is to achieve a religious or political goal by utilizing IT", "An organization that creates technical documents concerning the Internet and investigates standardization issues", "An organization that defines the IP-address allocation policy, operating and monitoring DNS root servers and coordinating DNS management on a global scale"],
            answer: "A generic term for an organization that is established within a company, organization, or government agency, receiving reports on information security incidents for investigation and response"
          },
          {
            id: "jfe301-5-mc-11",
            exam: "de1",
            examOrder: 34,
            image: "/images/jfe301/q34-de1.png",
            choices: ["It creates a new user ‘1’.", "It creates a pop-up box that shows the first username in the “accounts” table.", "It selects all the records in the “accounts” table and deletes the “accounts” table from the database.", "It selects one record from the “accounts” table and drops the rest of the records in the table."],
            answer: "It selects all the records in the “accounts” table and deletes the “accounts” table from the database."
          },
          {
            id: "jfe301-5-mc-12",
            exam: "de1",
            examOrder: 43,
            image: "/images/jfe301/q43-de1.png",
            choices: ["As with an operating system, it is an indispensable system necessary for operating a business system.", "It is a system that has a significant impact on corporate activities and society when a failure occurs.", "It is a system that is first installed on a trial basis, and if successful, a full-scale installation is implemented.", "It is a system with operating performance close to the limit."],
            answer: "It is a system that has a significant impact on corporate activities and society when a failure occurs."
          },
          {
            id: "jfe301-5-mc-13",
            exam: "de1",
            examOrder: 45,
            image: "/images/jfe301/q45-de1.png",
            choices: ["Appropriate performance of error checking for data entry", "Database encryption", "Managing and maintaining the level of SLA that defines downtime", "Prohibiting the removal of external storage media from the company without permission"],
            answer: "Managing and maintaining the level of SLA that defines downtime"
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
            exam: "de1",
            examOrder: 19,
            image: "/images/jfe301/q19-de1.png",
            choices: ["A domain is mapped to a character type or a character string type.", "A relation is mapped to a table.", "Attributes and columns are ordered from left to right.", "Neither tuples nor rows have duplicates."],
            answer: "A relation is mapped to a table."
          },
          {
            id: "jfe301-6-mc-2",
            exam: "de1",
            examOrder: 20,
            image: "/images/jfe301/q20-de1.png",
            choices: ["A table is in the 3NF if it is in the 2NF and no candidate key exists in the table.", "A table is in the 3NF if it is in the 2NF and no partial dependency exists in the table.", "A table is in the 3NF if it is in the 2NF and no repeating group exists in the table.", "A table is in the 3NF if it is in the 2NF and no transitive dependency exists in the table."],
            answer: "A table is in the 3NF if it is in the 2NF and no transitive dependency exists in the table."
          },
          {
            id: "jfe301-6-mc-3",
            exam: "de1",
            examOrder: 21,
            image: "/images/jfe301/q21-de1.png",
            choices: ["PT, QT", "PT, QT, ST", "PTY, QTY, QRY", "PTY, QTY, STY"],
            answer: "PTY, QTY, STY"
          },
          {
            id: "jfe301-6-mc-4",
            exam: "de1",
            examOrder: 22,
            image: "/images/jfe301/q22-de1.png",
            choices: ["SELECT * FROM Student WHERE name LIKE '%A';", "SELECT * FROM Student WHERE name LIKE '%A_';", "SELECT * FROM Student WHERE name LIKE 'A_';", "SELECT * FROM Student WHERE name LIKE 'A%';"],
            answer: "SELECT * FROM Student WHERE name LIKE 'A%';"
          },
          {
            id: "jfe301-6-mc-5",
            exam: "de1",
            examOrder: 23,
            image: "/images/jfe301/q23-de1.png",
            choices: ["A copy of the same data is written to another disk or the database of another site at all times to immediately recover the system even in the case of disk failure.", "The contents of the database are copied on a disk-by-disk basis to recover the database in case of disk failure.", "The data updated in the main memory is written to a disk to reduce the recovery processing time of the database when the system goes down.", "The values before and after the update of data are written, and used to perform database recovery."],
            answer: "The values before and after the update of data are written, and used to perform database recovery."
          }
        ]
      }
    ]
  }
];
