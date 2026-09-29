import {
  CertificateItem,
  EducationItem,
  JourneyMilestone,
  ProjectItem,
  SkillItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Punyashree M',
  role: 'AI & Data Science Engineering Student',
  institution: 'REVA University, Bengaluru',
  location: 'Bengaluru, Karnataka, India',
  email: 'sripunyaa966@gmail.com',
  defaultGithub: 'Punyashree966',
  defaultLinkedin: 'punyashree-m-831030417',
  about: `Punyashree M is a dedicated B.Tech student in Artificial Intelligence and Data Science at REVA University, Bengaluru. With a growing foundation in programming, artificial intelligence, machine learning, and data analysis, she is driven by a passion for developing innovative technological solutions that solve meaningful real-world challenges. Her long-term goal is to excel as a forward-thinking AI/ML professional capable of turning complex datasets into intelligent, automated systems.`,
  coreFocus: [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Developing mathematical and algorithmic intuition for predictive modeling, pattern recognition, and autonomous logic.',
    },
    {
      title: 'Data Analysis & Insights',
      description: 'Cleaning, transforming, and interpreting data using Python libraries to extract actionable quantitative patterns.',
    },
    {
      title: 'IoT & Embedded Automation',
      description: 'Bridging physical sensor telemetry with cloud-connected microcontrollers for intelligent environmental control.',
    },
    {
      title: 'Core Software Engineering',
      description: 'Solidifying problem-solving foundations through structured programming in C, C++, and Python with robust data structures.',
    },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'reva-university',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'REVA University',
    location: 'Bengaluru, Karnataka',
    period: '2023 – Present',
    status: 'Pursuing Undergraduate Degree',
    highlights: [
      'Comprehensive coursework across Artificial Intelligence, Machine Learning foundations, and Data Science methodologies',
      'Hands-on lab work in Data Structures & Algorithms, Object-Oriented Programming, and Database Systems',
      'Applied engineering projects bridging microcontroller IoT hardware with analytical software',
    ],
  },
  {
    id: 'nagarjuna-puc',
    degree: 'Pre-University Education',
    institution: 'Nagarjuna Pre-University College',
    location: 'Ramagondanahalli, Yelahanka, Bengaluru',
    period: 'Completed',
    status: 'Pre-University Certificate',
    highlights: [
      'Rigorous foundation in Science, Mathematics, Physics, and foundational computational concepts',
      'Cultivated analytical reasoning and systematic mathematical problem-solving skills',
    ],
  },
  {
    id: 'st-francis-school',
    degree: 'Schooling',
    institution: 'St. Francis School',
    location: 'Bagalur, Bangalore',
    period: 'Completed',
    status: 'Secondary School Education',
    highlights: [
      'Foundational academic education with an emphasis on sciences and logical reasoning',
      'Active participation in school science exhibitions, collaborative projects, and co-curricular programs',
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    proficiencyLabel: 'Core Language',
    description: 'Primary programming language for data manipulation, algorithm implementation, and machine learning pipelines.',
    topics: ['OOP Principles', 'File Handling', 'NumPy & Pandas', 'Scripting & Automation'],
  },
  {
    id: 'c-programming',
    name: 'C Programming',
    category: 'programming',
    proficiencyLabel: 'Systems Foundation',
    description: 'Foundational procedural language providing deep understanding of memory management, pointers, and CPU execution.',
    topics: ['Pointers & Dynamic Memory', 'Structures & Unions', 'Procedural Logic', 'Standard I/O Operations'],
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    proficiencyLabel: 'Object-Oriented Logic',
    description: 'High-performance programming with standard template library (STL), object-oriented architectures, and algorithmic speed.',
    topics: ['Standard Template Library (STL)', 'Class Hierarchies', 'Polymorphism & Inheritance', 'Memory Efficiency'],
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'programming',
    proficiencyLabel: 'Algorithmic Problem Solving',
    description: 'Designing efficient code architectures through optimal data arrangement and time/space complexity analysis.',
    topics: ['Arrays, Linked Lists & Stacks', 'Trees & Graph Traversal', 'Sorting & Searching Algorithms', 'Asymptotic Complexity (Big-O)'],
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'ai_data',
    proficiencyLabel: 'Analytical Modeling',
    description: 'Extracting meaningful trends from structured datasets through statistical analysis, cleaning, and exploratory data analysis (EDA).',
    topics: ['Exploratory Data Analysis (EDA)', 'Statistical Distributions', 'Data Cleansing & Wrangling', 'Visual Charting & Insights'],
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    category: 'ai_data',
    proficiencyLabel: 'Intelligent Systems',
    description: 'Foundations of autonomous decision systems, search strategies, knowledge representation, and heuristic optimization.',
    topics: ['Search Algorithms (A*, Minimax)', 'Knowledge Representation', 'Heuristic Evaluation', 'Automated Decision Systems'],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'ai_data',
    proficiencyLabel: 'Predictive Modeling',
    description: 'Supervised and unsupervised learning paradigms, feature engineering, classification, regression, and model evaluation.',
    topics: ['Linear & Logistic Regression', 'Decision Trees & Ensembles', 'K-Means Clustering', 'Evaluation Metrics & Overfitting Prevention'],
  },
  {
    id: 'iot',
    name: 'Internet of Things (IoT)',
    category: 'systems',
    proficiencyLabel: 'Connected Hardware',
    description: 'Interfacing microcontrollers with environmental analog/digital sensors, actuator controls, and wireless cloud telemetry.',
    topics: ['NodeMCU ESP8266 & Wi-Fi', 'Sensor Telemetry (Analog/Digital)', 'Relay Actuation & Relay Logic', 'Blynk IoT Cloud Integration'],
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'professional',
    proficiencyLabel: 'Professional Skill',
    description: 'Articulating technical concepts clearly in oral presentations, technical project documentation, and peer discussions.',
    topics: ['Technical Documentation', 'Presentation of Complex Concepts', 'Active Listening', 'Cross-Domain Articulation'],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    category: 'professional',
    proficiencyLabel: 'Professional Skill',
    description: 'Thriving in multi-disciplinary student cohorts, coordinating project modules, and collaborating toward common goals.',
    topics: ['Collaborative Problem-Solving', 'Peer Code Review', 'Task Coordination & Sprint Ownership', 'Conflict Resolution'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'smart-farming-iot',
    title: 'IoT-based Smart Farming and Crop Monitoring System',
    tagline: 'Automated Precision Irrigation & Real-Time Environmental Telemetry via Blynk IoT',
    description: 'An intelligent agriculture system that monitors soil moisture and environmental conditions in real time, automates irrigation based on soil moisture levels, and enables remote monitoring through the Blynk IoT platform.',
    category: 'Internet of Things & Embedded Systems',
    image: '/src/assets/images/smart_farming_iot_system_1790675168305.jpg',
    overview: [
      'Addresses water scarcity and irregular irrigation by deploying an autonomous feedback loop between soil moisture levels and water pump actuation.',
      'Constantly samples moisture content in the root zone via a capacitive/resistive soil moisture sensor, sending calibrated analog signals to the NodeMCU ESP8266 microcontroller.',
      'Instantly displays live soil condition metrics locally on a 16x2 LCD screen using an I2C communication interface to minimize GPIO pin usage.',
      'Transmits real-time moisture readings and irrigation status to the Blynk IoT cloud platform over Wi-Fi, allowing agriculturalists to monitor crops remotely on mobile devices.',
      'Switches a 9V DC submersible water pump on and off using an optocoupled 5V relay module with hysteresis logic to prevent rapid valve bouncing.',
    ],
    components: [
      {
        name: 'NodeMCU ESP8266',
        role: 'Central Processing & Wi-Fi Gateway',
        specs: 'Tensilica L106 32-bit RISC core, 80MHz, integrated 802.11 b/g/n Wi-Fi transceiver with GPIO control.',
      },
      {
        name: 'Soil Moisture Sensor',
        role: 'Analog Soil Hydration Sensing',
        specs: 'Dual-probe sensor measuring volumetric water content through soil conductivity, calibrated for dry/wet thresholds.',
      },
      {
        name: 'Relay Module (5V)',
        role: 'Isolated Power Switching',
        specs: 'Optocoupled single-channel relay with flyback diode protection to safely trigger 9V DC pump from 3.3V/5V logic.',
      },
      {
        name: 'LCD Display with I2C Backpack',
        role: 'Local Real-Time Visual Feedback',
        specs: '16x2 character display driven via PCF8574 I2C adapter, consuming only SDA and SCL pins on NodeMCU.',
      },
      {
        name: '9V Mini DC Water Pump',
        role: 'Irrigation Actuator',
        specs: 'Submersible direct-current centrifugal pump delivering targeted water flow through flexible irrigation tubing.',
      },
      {
        name: 'Breadboard & Jumper Wires',
        role: 'Prototyping Circuit Substrate',
        specs: 'Solderless breadboard layout with color-coded male-to-male and male-to-female DuPont jumper wire connections.',
      },
      {
        name: '5V Power Supply / Battery',
        role: 'System Power Distribution',
        specs: 'Regulated voltage delivery supplying steady operating current to the ESP8266 microcontroller and sensor rails.',
      },
    ],
    techStack: [
      'NodeMCU ESP8266',
      'Embedded C / C++ (Arduino)',
      'Blynk IoT Platform',
      'I2C Protocol',
      'Analog-to-Digital Conversion',
      'Hardware Relay Interfacing',
      'Wi-Fi Telemetry',
    ],
    features: [
      'Automated closed-loop irrigation triggered when moisture falls below critical threshold',
      'Cloud synchronization to the Blynk mobile app for live graph analytics',
      'Clear on-site readability via high-contrast 16x2 LCD screen',
      'Over-the-air monitoring reducing manual farm inspection effort and water waste',
    ],
    },

  {
    id: 'innovexa',
    title: 'INNOVEXA',
    tagline: 'Smart Healthcare & Emergency Alert System',
    description:
      'A technology-focused project designed around smart healthcare support and emergency alert functionality.',

    category: 'HEALTHCARE • EMERGENCY • TECHNOLOGY',

    image: '/src/assets/images/innovexa.jpg',

    overview: [
      'In critical healthcare scenarios, latency in alerting family members or emergency contacts can result in delayed assistance.',
      'The goal was to conceptualize a rapid, dependable alert trigger for emergency situations.',
      'Structured an alert transmission workflow providing automated messaging and status notifications to designated medical contacts upon distress trigger detection.',
      'Co-developed system architecture logic, alert dispatch routines, and interface prototyping for seamless emergency response simulation.',
    ],

    components: [
      {
        name: 'Emergency Alert Trigger',
        role: 'Distress trigger detection',
        specs:
          'Rapid, dependable alert trigger concept designed for critical healthcare scenarios.',
      },
      {
        name: 'Alert Dispatch Workflow',
        role: 'Emergency message transmission',
        specs:
          'Structured workflow providing automated messaging and status notifications to designated medical contacts.',
      },
      {
        name: 'User & Contact Records',
        role: 'Contact organization',
        specs:
          'Structured modular user and contact records for emergency communication.',
      },
      {
        name: 'Interface Prototype',
        role: 'Emergency response simulation',
        specs:
          'Interface prototyping for seamless emergency response simulation.',
      },
    ],

    techStack: [
      'HEALTHCARE',
      'EMERGENCY',
      'TECHNOLOGY',
    ],

    features: [
      'Rapid and dependable emergency alert trigger',
      'Automated messaging to designated medical contacts',
      'Status notifications for emergency events',
      'Fault-tolerant notification approach with fallback mechanisms',
      'Modular user and contact record structure',
    ],
  },
];
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  {
    id: 'ibm-skillsbuild-python',
    title: 'Data Analysis with Python',
    issuer: 'IBM SkillsBuild',
    credentialName: 'Certificate of Competency: Data Analysis with Python',
    date: 'Certified Academic Credential',
    skillsAcquired: [
      'Data Cleansing & Wrangling in Python',
      'Exploratory Data Analysis (EDA)',
      'Pandas, NumPy, and Matplotlib Workflows',
      'Statistical Correlation & Hypothesis Exploration',
      'Model Evaluation & Data Pipeline Structuring',
    ],
    summary: 'Comprehensive curriculum focused on practical data extraction, statistical summaries, predictive regression models, and data storytelling using Python analytical libraries.',
    image: '',
    credentialId: 'IBM-SB-DA-PY-2024',
  },
  {
    id: 'wadhwani-foundation',
    title: 'Certificate of Completion',
    issuer: 'Wadhwani Foundation',
    credentialName: 'Professional Employability & Core Soft Skills Certification',
    date: 'Certified Completion',
    skillsAcquired: [
      'Professional Workplace Communication',
      'Collaborative Team Dynamics & Leadership',
      'Critical Thinking & Structured Problem Formulation',
      'Time Management & Professional Ethics',
    ],
    summary: 'Rigorous skill development program emphasizing workplace readiness, high-impact verbal and written communication, design thinking, and collaborative execution.',
    image: '/src/assets/images/certificate_wadhwani_1790675202476.jpg',
    credentialId: 'WF-CORE-COMPL-2024',
  },
];

export const LEARNING_JOURNEY_DATA: JourneyMilestone[] = [
  {
    id: 'milestone-1',
    phase: 'Phase 01',
    domain: 'Procedural & Object-Oriented Programming',
    title: 'Foundations in C & C++',
    description: 'Commenced technical journey by mastering structured control flow, pointer manipulation, and memory management in C. Transitioned into C++ to comprehend object-oriented paradigms, classes, inheritance, and the Standard Template Library.',
    technologies: ['C Language', 'Pointers & Dynamic Memory', 'C++', 'Object-Oriented Programming (OOP)'],
    keyTakeaways: [
      'Acquired deep appreciation for how high-level code interacts with CPU registers and RAM',
      'Implemented custom memory allocation and structured record management',
    ],
  },
  {
    id: 'milestone-2',
    phase: 'Phase 02',
    domain: 'Core Computational Foundations',
    title: 'Data Structures & Algorithmic Problem Solving',
    description: 'Systematically mastered fundamental linear and non-linear data structures. Practiced implementing stacks, queues, linked lists, binary trees, and sorting algorithms while analyzing time and space complexities using Big-O notation.',
    technologies: ['Arrays & Linked Lists', 'Stacks & Queues', 'Binary Search Trees', 'Asymptotic Complexity Analysis'],
    keyTakeaways: [
      'Cultivated structured problem-solving intuition for algorithmic efficiency',
      'Learned to choose appropriate data structures based on real-world constraints',
    ],
  },
  {
    id: 'milestone-3',
    phase: 'Phase 03',
    domain: 'Data Science & Analytical Tools',
    title: 'Python & Data Analysis Mastery',
    description: 'Adopted Python as the core language for computational modeling. Expanded into analytical ecosystems with NumPy and Pandas, completing the IBM SkillsBuild certification in Data Analysis with Python and building pipelines for data cleaning and EDA.',
    technologies: ['Python 3', 'Pandas & NumPy', 'Data Wrangling', 'Exploratory Data Analysis'],
    keyTakeaways: [
      'Cleaned and transformed messy tabular data into actionable statistical insights',
      'Formulated exploratory questions to uncover trends and correlations',
    ],
  },
  {
    id: 'milestone-4',
    phase: 'Phase 04',
    domain: 'Embedded Systems & Physical Computing',
    title: 'Internet of Things (IoT) Engineering',
    description: 'Applied software logic to physical environments through microcontroller programming. Designed and constructed the IoT-based Smart Farming and Crop Monitoring System utilizing NodeMCU ESP8266, soil moisture sensors, LCD, and Blynk IoT cloud integration.',
    technologies: ['NodeMCU ESP8266', 'Analog Sensor Telemetry', 'Blynk IoT Platform', 'I2C Communication'],
    keyTakeaways: [
      'Bridged hardware circuitry with cloud-based remote telemetry',
      'Engineered autonomous closed-loop irrigation actuation with relay controls',
    ],
  },
  {
    id: 'milestone-5',
    phase: 'Phase 05',
    domain: 'Intelligent Systems & Predictive Modeling',
    title: 'Artificial Intelligence & Machine Learning Progression',
    description: 'Currently advancing in the AI and Data Science curriculum at REVA University. Deepening understanding of supervised machine learning algorithms, evaluation metrics, feature engineering, and neural network foundations.',
    technologies: ['Supervised Learning', 'Regression & Classification', 'Model Evaluation', 'AI Search Algorithms'],
    keyTakeaways: [
      'Building strong theoretical and mathematical intuition for predictive models',
      'Actively exploring cutting-edge AI developments and real-world system applications',
    ],
  },
];
