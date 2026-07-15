// src/data/NotesData.js

export const notesData = {
  "igcse": {
    title: "IGCSE",
    description: "Comprehensive revision notes for the Cambridge IGCSE curriculum. Well-structured, concise notes covering every topic in detail to accelerate your understanding.",
    subjects: [
      {
        id: "ig-phy", name: "Physics", code: "0625", icon: "bolt",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "120",
        description: "Detailed notes on forces, energy, waves, electricity, and nuclear physics."
      },
      {
        id: "ig-chem", name: "Chemistry", code: "0620", icon: "science",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "110",
        description: "Comprehensive notes covering atoms, reactions, organic chemistry, and more."
      },
      {
        id: "ig-bio", name: "Biology", code: "0610", icon: "biotech",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "130",
        description: "In-depth notes on cells, organisms, genetics, and ecology."
      },
      {
        id: "ig-math", name: "Mathematics", code: "0580", icon: "calculate",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "140",
        description: "Structured notes on algebra, geometry, statistics, and number theory."
      },
      {
        id: "ig-addmath", name: "Additional Mathematics", code: "0606", icon: "functions",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "80",
        description: "Advanced mathematics notes for calculus, trigonometry, and more."
      },
      {
        id: "ig-econ", name: "Economics", code: "0455", icon: "monitoring",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "90",
        description: "Micro and macro economics notes with real-world examples."
      },
      {
        id: "ig-acc", name: "Accounting", code: "0452", icon: "account_balance",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "85",
        description: "Foundational accounting principles, ledgers, and financial statements."
      },
      {
        id: "ig-bus", name: "Business Studies", code: "0450", icon: "business_center",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "95",
        description: "Business environment, marketing, operations, and finance notes."
      },
      {
        id: "ig-geo", name: "Geography", code: "0460", icon: "public",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "75",
        description: "Physical and human geography notes with case studies."
      },
      {
        id: "ig-ict", name: "ICT", code: "0417", icon: "computer",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "70",
        description: "Information and communication technology theory and applications."
      },
      {
        id: "ig-cs", name: "Computer Science", code: "0478", icon: "terminal",
        tag: "NOTES", tagColor: "bg-error-container text-error", resources: "100",
        description: "Systems, logic, algorithms, and programming concepts."
      },
      {
        id: "ig-travel", name: "Travel and Tourism", code: "0471", icon: "flight",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "60",
        description: "Tourism industry, destinations, and customer service notes."
      },
      {
        id: "ig-socio", name: "Sociology", code: "0495", icon: "groups",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "65",
        description: "Social structures, culture, identity, and research methods."
      }
    ]
  },
  "o-levels": {
    title: "O Levels",
    description: "Concise and exam-focused revision notes for the Cambridge O Level curriculum. Master every concept with structured, easy-to-follow notes.",
    subjects: [
      {
        id: "ol-phy", name: "Physics", code: "5054", icon: "bolt",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "100",
        description: "Notes covering general physics, thermal physics, waves, and atomic physics."
      },
      {
        id: "ol-chem", name: "Chemistry", code: "5070", icon: "science",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "95",
        description: "Comprehensive chemistry notes on reactions, bonding, and organic chemistry."
      },
      {
        id: "ol-bio", name: "Biology", code: "5090", icon: "biotech",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "110",
        description: "Detailed biology notes on cells, organisms, and ecology."
      },
      {
        id: "ol-math", name: "Mathematics", code: "4024", icon: "calculate",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "120",
        description: "Core mathematics notes covering algebra, geometry, and statistics."
      },
      {
        id: "ol-addmath", name: "Additional Mathematics", code: "4037", icon: "functions",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "75",
        description: "Advanced mathematics preparation notes for higher studies."
      },
      {
        id: "ol-econ", name: "Economics", code: "2281", icon: "monitoring",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "85",
        description: "Macro and micro economics notes with diagrams and analysis."
      },
      {
        id: "ol-acc", name: "Accounting", code: "7707", icon: "account_balance",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "80",
        description: "Accounting principles, ledgers, and financial statement notes."
      },
      {
        id: "ol-bus", name: "Business Studies", code: "7115", icon: "business_center",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "90",
        description: "Marketing, operations, and business environment notes."
      },
      {
        id: "ol-cs", name: "Computer Science", code: "2210", icon: "terminal",
        tag: "NOTES", tagColor: "bg-error-container text-error", resources: "95",
        description: "Algorithm design, hardware, and programming notes."
      },
      {
        id: "ol-socio", name: "Sociology", code: "2251", icon: "groups",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "60",
        description: "Social structures, institutions, and sociological research notes."
      }
    ]
  },
  "a-levels": {
    title: "A Levels",
    description: "In-depth revision notes for the Cambridge A Level curriculum. Master complex concepts with structured, topic-wise notes covering the complete syllabus.",
    subjects: [
      {
        id: "al-phy", name: "Physics", code: "9702", icon: "bolt",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "150",
        description: "From kinematics to quantum physics, comprehensive notes for every topic."
      },
      {
        id: "al-chem", name: "Chemistry", code: "9701", icon: "science",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "140",
        description: "Physical, inorganic, and organic chemistry notes in one place."
      },
      {
        id: "al-bio", name: "Biology", code: "9700", icon: "biotech",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "135",
        description: "Complete biology notes from cell structure to genetic technology."
      },
      {
        id: "al-math", name: "Mathematics", code: "9709", icon: "calculate",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "160",
        description: "Pure mathematics, mechanics, and statistics notes."
      },
      {
        id: "al-econ", name: "Economics", code: "9708", icon: "monitoring",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "100",
        description: "Micro and macro economic theory notes with diagrams."
      },
      {
        id: "al-acc", name: "Accounting", code: "9706", icon: "account_balance",
        tag: "NOTES", tagColor: "bg-primary-fixed text-primary", resources: "90",
        description: "Advanced accounting notes covering financial and cost accounting."
      },
      {
        id: "al-bus", name: "Business", code: "9609", icon: "business_center",
        tag: "NOTES", tagColor: "bg-secondary-fixed text-primary", resources: "95",
        description: "Business strategy, marketing, and management notes."
      },
      {
        id: "al-it", name: "IT", code: "9626", icon: "computer",
        tag: "NOTES", tagColor: "bg-tertiary-fixed text-primary", resources: "70",
        description: "Information technology systems and applications notes."
      },
      {
        id: "al-cs", name: "Computer Science", code: "9618", icon: "terminal",
        tag: "NOTES", tagColor: "bg-error-container text-error", resources: "120",
        description: "Theory, programming, and advanced computing notes."
      }
    ]
  }
};
