// src/data/topicalData.js

export const topicalData = {
  "o-levels": {
    title: "O Levels",
    description: "Explore core subjects tailored for the Cambridge O Level curriculum. Access highly detailed topical breakdowns to target specific weaknesses.",
    subjects: [
      { 
        id: "ol-math", name: "Mathematics", code: "4024", icon: "calculate", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.2k",
        description: "Master everyday mathematics, geometry, and algebra with comprehensive topical questions.",
        components: [
          { id: "p1", name: "Paper 1 - Non-Calculator", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "calculate", description: "Foundational mathematics without the use of a calculator.", topics: [
            { id: "t1", number: "01", name: "Numbers", count: "Questions" },
            { id: "t2", number: "02", name: "Ordering", count: "Questions" },
            { id: "t3", number: "03", name: "Estimation", count: "Questions" },
            { id: "t4", number: "04", name: "Forces & Multiples, HCF and LCM", count: "Questions" },
            { id: "t5", number: "05", name: "Limits of Accuracy", count: "Questions" },
            { id: "t6", number: "06", name: "Ratio, Proportion, Rate", count: "Questions" },
            { id: "t7", number: "07", name: "Percentages", count: "Questions" },
            { id: "t8", number: "08", name: "Polygons", count: "Questions" },
            { id: "t9", number: "09", name: "Simple and Compound Interests", count: "Questions" },
            { id: "t10", number: "10", name: "Standard Form", count: "Questions" },
            { id: "t11", number: "11", name: "Indices", count: "Questions" },
            { id: "t12", number: "12", name: "Variation", count: "Questions" },
            { id: "t13", number: "13", name: "Time", count: "Questions" },
            { id: "t14", number: "14", name: "Money", count: "Questions" },
            { id: "t15", number: "15", name: "Personal and Small Business Finance", count: "Questions" },
            { id: "t16", number: "16", name: "Algebraic Representation and Formulae", count: "Questions" },
            { id: "t17", number: "17", name: "Algebraic Manipulation", count: "Questions" },
            { id: "t18", number: "18", name: "Solutions of Equations and Inequalities", count: "Questions" },
            { id: "t19", number: "19", name: "Graphical Representation of Inequalities", count: "Questions" },
            { id: "t20", number: "20", name: "Graphs in Practical Situation", count: "Questions" },
            { id: "t21", number: "21", name: "Graphs of Functions", count: "Questions" },
            { id: "t22", number: "22", name: "Functional Notation", count: "Questions" },
            { id: "t23", number: "23", name: "Coordinate Geometry", count: "Questions" },
            { id: "t24", number: "24", name: "Geometrical Constructions", count: "Questions" },
            { id: "t25", number: "25", name: "Loci", count: "Questions" },
            { id: "t26", number: "26", name: "Mensuration", count: "Questions" },
            { id: "t27", number: "27", name: "Angles and Circle Properties", count: "Questions" },
            { id: "t28", number: "28", name: "Symmetry", count: "Questions" },
            { id: "t29", number: "29", name: "Similarity and Congruence", count: "Questions" },
            { id: "t30", number: "30", name: "Trigonometry", count: "Questions" },
            { id: "t31", number: "31", name: "Matrices", count: "Questions" },
            { id: "t32", number: "32", name: "Transformation", count: "Questions" },
            { id: "t33", number: "33", name: "Probability", count: "Questions" },
            { id: "t34", number: "34", name: "Categorical, Numerical and Grouped Data", count: "Questions" },
            { id: "t35", number: "35", name: "Statistical Diagrams", count: "Questions" },
            { id: "t36", number: "36", name: "Vectors in Two Dimensions", count: "Questions" },
            { id: "t37", number: "37", name: "Set Language and Notation", count: "Questions" },
            { id: "t38", number: "38", name: "Sequences", count: "Questions" },
            { id: "t39", number: "39", name: "Everyday Mathematics", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Calculator", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "functions", description: "Advanced mathematical applications allowing calculator use.", topics: [
            { id: "t1", number: "01", name: "Numbers, Estimation, Indices", count: "Questions" },
            { id: "t2", number: "02", name: "Ratio, Proportion, Limits of Accuracy, Time", count: "Questions" },
            { id: "t3", number: "03", name: "Percentages", count: "Questions" },
            { id: "t4", number: "04", name: "Money", count: "Questions" },
            { id: "t5", number: "05", name: "Simple Interest and Compound Interest", count: "Questions" },
            { id: "t6", number: "06", name: "Algebraic Expressions and Manipulation", count: "Questions" },
            { id: "t7", number: "07", name: "Solutions of Equations", count: "Questions" },
            { id: "t8", number: "08", name: "Linear and Graphical Inequalities", count: "Questions" },
            { id: "t9", number: "09", name: "Sequences and Patterns", count: "Questions" },
            { id: "t10", number: "10", name: "Variation", count: "Questions" },
            { id: "t11", number: "11", name: "Graphs in Practical Situations", count: "Questions" },
            { id: "t12", number: "12", name: "Graphs of Functions", count: "Questions" },
            { id: "t13", number: "13", name: "Function Notation", count: "Questions" },
            { id: "t14", number: "14", name: "Coordinate Geometry", count: "Questions" },
            { id: "t15", number: "15", name: "Geometrical Constructions", count: "Questions" },
            { id: "t16", number: "16", name: "Similarity and Congruence", count: "Questions" },
            { id: "t17", number: "17", name: "Symmetry", count: "Questions" },
            { id: "t18", number: "18", name: "Angle Properties, Polygons", count: "Questions" },
            { id: "t19", number: "19", name: "Circle Properties", count: "Questions" },
            { id: "t20", number: "20", name: "Loci", count: "Questions" },
            { id: "t21", number: "21", name: "Mensuration", count: "Questions" },
            { id: "t22", number: "22", name: "Bearings and Trigonometry", count: "Questions" },
            { id: "t23", number: "23", name: "Vectors in Two Dimensions", count: "Questions" },
            { id: "t24", number: "24", name: "Probability", count: "Questions" },
            { id: "t25", number: "25", name: "Statistics", count: "Questions" },
            { id: "t26", number: "26", name: "Set Language and Notation", count: "Questions" },
            { id: "t27", number: "27", name: "Matrices", count: "Questions" },
            { id: "t28", number: "28", name: "Transformations", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-chem", name: "Chemistry", code: "5070", icon: "science", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "950",
        description: "Comprehensive chemistry resources.",
        components: [] 
      },
      { 
        id: "ol-bio", name: "Biology", code: "5090", icon: "biotech", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.1k",
        description: "Detailed breakdowns of human and plant biology.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Foundational multiple choice covering biological processes.", topics: [
            { id: "t1", number: "01", name: "Cells", count: "Questions" },
            { id: "t2", number: "02", name: "Classification", count: "Questions" },
            { id: "t3", number: "03", name: "Movement Into and Out of Cells", count: "Questions" },
            { id: "t4", number: "04", name: "Biological Molecules", count: "Questions" },
            { id: "t5", number: "05", name: "Enzymes", count: "Questions" },
            { id: "t6", number: "06", name: "Plant Nutrition", count: "Questions" },
            { id: "t7", number: "07", name: "Transport in Flowering Plants", count: "Questions" },
            { id: "t8", number: "08", name: "Human Nutrition", count: "Questions" },
            { id: "t9", number: "09", name: "Gas Exchange in Humans", count: "Questions" },
            { id: "t10", number: "10", name: "Respiration", count: "Questions" },
            { id: "t11", number: "11", name: "Transport in Humans", count: "Questions" },
            { id: "t12", number: "12", name: "Disease and Immunity", count: "Questions" },
            { id: "t13", number: "13", name: "Excretion in Humans", count: "Questions" },
            { id: "t14", number: "14", name: "Coordination and Control", count: "Questions" },
            { id: "t15", number: "15", name: "Coordination and Response in Plants", count: "Questions" },
            { id: "t16", number: "16", name: "Development of Organisms and Continuity of Life", count: "Questions" },
            { id: "t17", number: "17", name: "Inheritance", count: "Questions" },
            { id: "t18", number: "18", name: "Biotechnology and Genetic Modification", count: "Questions" },
            { id: "t19", number: "19", name: "Relationships of Organisms with One Another and with the Environment", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Theory", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Structured application of biology concepts.", topics: [
            { id: "t1", number: "01", name: "Cells", count: "Questions" },
            { id: "t2", number: "02", name: "Classification", count: "Questions" },
            { id: "t3", number: "03", name: "Movement Into and Out of Cells", count: "Questions" },
            { id: "t4", number: "04", name: "Biological Molecules", count: "Questions" },
            { id: "t5", number: "05", name: "Enzymes", count: "Questions" },
            { id: "t6", number: "06", name: "Plant Nutrition", count: "Questions" },
            { id: "t7", number: "07", name: "Transport in Flowering Plants", count: "Questions" },
            { id: "t8", number: "08", name: "Human Nutrition", count: "Questions" },
            { id: "t9", number: "09", name: "Gas Exchange in Humans", count: "Questions" },
            { id: "t10", number: "10", name: "Respiration", count: "Questions" },
            { id: "t11", number: "11", name: "Transport in Humans", count: "Questions" },
            { id: "t12", number: "12", name: "Disease and Immunity", count: "Questions" },
            { id: "t13", number: "13", name: "Excretion in Humans", count: "Questions" },
            { id: "t14", number: "14", name: "Coordination and Control", count: "Questions" },
            { id: "t15", number: "15", name: "Coordination and Response in Plants", count: "Questions" },
            { id: "t16", number: "16", name: "Development of Organisms and Continuity of Life", count: "Questions" },
            { id: "t17", number: "17", name: "Inheritance", count: "Questions" },
            { id: "t18", number: "18", name: "Biotechnology and Genetic Modification", count: "Questions" },
            { id: "t19", number: "19", name: "Relationships of Organisms with One Another and with the Environment", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-phy", name: "Physics", code: "5054", icon: "bolt", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "840",
        description: "From general physics to space exploration.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Foundational multiple choice covering general physics.", topics: [
            { id: "t1", number: "01", name: "General Physics", count: "Questions" },
            { id: "t2", number: "02", name: "Thermal Physics", count: "Questions" },
            { id: "t3", number: "03", name: "Properties of Waves, Including Light and Sound", count: "Questions" },
            { id: "t4", number: "04", name: "Electricity and Magnetism", count: "Questions" },
            { id: "t5", number: "05", name: "Atomic Physics", count: "Questions" },
            { id: "t6", number: "06", name: "Space Physics", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Theory", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Structured questions on forces, waves, and energy.", topics: [
            { id: "t1", number: "01", name: "Motion, Forces and Energy", count: "Questions" },
            { id: "t2", number: "02", name: "Thermal Physics", count: "Questions" },
            { id: "t3", number: "03", name: "Waves", count: "Questions" },
            { id: "t4", number: "04", name: "Electricity and Magnetism", count: "Questions" },
            { id: "t5", number: "05", name: "Nuclear Physics", count: "Questions" },
            { id: "t6", number: "06", name: "Space Physics", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-cs", name: "Computer Science", code: "2210", icon: "terminal", tag: "TOPICAL PAPERS", tagColor: "bg-error-container text-error", resources: "1.5k",
        description: "Algorithm design, logic, and hardware systems.",
        components: [
          { id: "p1", name: "Paper 1 - Computer Systems", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "memory", description: "Hardware, networks, and data transmission.", topics: [
            { id: "t1", number: "01", name: "Data representation", count: "Questions" },
            { id: "t2", number: "02", name: "Data transmission", count: "Questions" },
            { id: "t3", number: "03", name: "Hardware", count: "Questions" },
            { id: "t4", number: "04", name: "Software", count: "Questions" },
            { id: "t5", number: "05", name: "The internet and its uses", count: "Questions" },
            { id: "t6", number: "06", name: "Automated and emerging technologies", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Algorithms, programming and logic", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "code", description: "Software design, databases, and problem solving.", topics: [
            { id: "t1", number: "01", name: "Algorithm design and problem-solving", count: "Questions" },
            { id: "t2", number: "02", name: "Programming", count: "Questions" },
            { id: "t3", number: "03", name: "Databases", count: "Questions" },
            { id: "t4", number: "04", name: "Boolean logic", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-econ", name: "Economics", code: "2281", icon: "monitoring", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "620",
        description: "Macro and micro economic indicators and policies.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core economic problems and market functions.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Problem: Choice and the Allocation of Resources", count: "Questions" },
            { id: "t2", number: "02", name: "The Allocation of Resources: How the Market Works; Market Failure", count: "Questions" },
            { id: "t3", number: "03", name: "The Individual as Producer, Consumer and Borrower", count: "Questions" },
            { id: "t4", number: "04", name: "The Private Firm as Producer and Employer", count: "Questions" },
            { id: "t5", number: "05", name: "Role Of Government in Economy", count: "Questions" },
            { id: "t6", number: "06", name: "Economic Indicators", count: "Questions" },
            { id: "t7", number: "07", name: "Developed and Developing Economies: Trends in Production, Population and Living Standards", count: "Questions" },
            { id: "t8", number: "08", name: "International Aspects", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Questions", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Detailed economic structures and policies.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Problem", count: "Questions" },
            { id: "t2", number: "02", name: "Demand, Supply and Equilibrium", count: "Questions" },
            { id: "t3", number: "03", name: "Elasticity", count: "Questions" },
            { id: "t4", number: "04", name: "Economic Systems", count: "Questions" },
            { id: "t5", number: "05", name: "Market Failure", count: "Questions" },
            { id: "t6", number: "06", name: "Money and Banking", count: "Questions" },
            { id: "t7", number: "07", name: "Households", count: "Questions" },
            { id: "t8", number: "08", name: "Workers", count: "Questions" },
            { id: "t9", number: "09", name: "Firms", count: "Questions" },
            { id: "t10", number: "10", name: "Firms and Production", count: "Questions" },
            { id: "t11", number: "11", name: "Firms Costs, Revenue and Objectives", count: "Questions" },
            { id: "t12", number: "12", name: "Market Structures", count: "Questions" },
            { id: "t13", number: "13", name: "Macroeconomic Aims of Government", count: "Questions" },
            { id: "t14", number: "14", name: "Macroeconomic Policies", count: "Questions" },
            { id: "t15", number: "15", name: "Economic Growth", count: "Questions" },
            { id: "t16", number: "16", name: "Employment and Unemployment", count: "Questions" },
            { id: "t17", number: "17", name: "Inflation and Deflation", count: "Questions" },
            { id: "t18", number: "18", name: "Economic Development", count: "Questions" },
            { id: "t19", number: "19", name: "International Trade and Globalization", count: "Questions" },
            { id: "t20", number: "20", name: "Foreign Exchange Rates", count: "Questions" },
            { id: "t21", number: "21", name: "Current Account of Balance of Payments", count: "Questions" },
            { id: "t22", number: "22", name: "Other small topics", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-acc", name: "Accounting", code: "7707", icon: "account_balance", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "780",
        description: "Foundational accounting principles and financial statements.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core bookkeeping and statement rules.", topics: [
            { id: "t1", number: "01", name: "Accounting Basics", count: "Questions" },
            { id: "t2", number: "02", name: "Books of Original Entry", count: "Questions" },
            { id: "t3", number: "03", name: "Cash Book and Discounts", count: "Questions" },
            { id: "t4", number: "04", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t5", number: "05", name: "Irrecoverable Debts and Provision for Doubtful Debts", count: "Questions" },
            { id: "t6", number: "06", name: "Accounting for Non-Current Assets", count: "Questions" },
            { id: "t7", number: "07", name: "Trial Balance", count: "Questions" },
            { id: "t8", number: "08", name: "Income Statements of Sole Traders", count: "Questions" },
            { id: "t9", number: "09", name: "Sole Traders Statements of Financial Position", count: "Questions" },
            { id: "t10", number: "10", name: "Adjustments in Financial Statements", count: "Questions" },
            { id: "t11", number: "11", name: "Accounting Concepts", count: "Questions" },
            { id: "t12", number: "12", name: "Capital and Revenue", count: "Questions" },
            { id: "t13", number: "13", name: "Errors not Affecting Agreement of Trial Balance", count: "Questions" },
            { id: "t14", number: "14", name: "Errors Effecting Agreement of Trial Balance", count: "Questions" },
            { id: "t15", number: "15", name: "Control Accounts", count: "Questions" },
            { id: "t16", number: "16", name: "Accounts from Incomplete Records", count: "Questions" },
            { id: "t17", number: "17", name: "Accounts of Non-Profit Organisations", count: "Questions" },
            { id: "t18", number: "18", name: "Manufacturing Accounts", count: "Questions" },
            { id: "t19", number: "19", name: "Partnership Accounts", count: "Questions" },
            { id: "t20", number: "20", name: "Company Accounts", count: "Questions" },
            { id: "t21", number: "21", name: "Ratio Analysis", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Written Paper", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Detailed accounting adjustments and concepts.", topics: [
            { id: "t1", number: "01", name: "Accounting Basics", count: "Questions" },
            { id: "t2", number: "02", name: "Books of Original Entry", count: "Questions" },
            { id: "t3", number: "03", name: "Cash Book and Petty Cash Book", count: "Questions" },
            { id: "t4", number: "04", name: "Accounts of Income and Expenses", count: "Questions" },
            { id: "t5", number: "05", name: "Inventory Valuation", count: "Questions" },
            { id: "t6", number: "06", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t7", number: "07", name: "Accounting Concepts", count: "Questions" },
            { id: "t8", number: "08", name: "Accounting for Depreciation", count: "Questions" },
            { id: "t9", number: "09", name: "Bad and Doubtful Debts", count: "Questions" },
            { id: "t10", number: "10", name: "Financial Statements of Sole Traders", count: "Questions" },
            { id: "t11", number: "11", name: "Partnership Accounts", count: "Questions" },
            { id: "t12", number: "12", name: "Capital and Revenue", count: "Questions" },
            { id: "t13", number: "13", name: "Correction of Errors", count: "Questions" },
            { id: "t14", number: "14", name: "Control Accounts", count: "Questions" },
            { id: "t15", number: "15", name: "Accounts from Incomplete Records", count: "Questions" },
            { id: "t16", number: "16", name: "Accounts of Non-Profit Organisations", count: "Questions" },
            { id: "t17", number: "17", name: "Manufacturing Accounts", count: "Questions" },
            { id: "t18", number: "18", name: "Company Accounts", count: "Questions" },
            { id: "t19", number: "19", name: "Ratio Analysis", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-bus", name: "Business Studies", code: "7115", icon: "business_center", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "890",
        description: "Marketing, operations, and external business influences.",
        components: [
          { id: "p1", name: "Paper 1 - Short Answer and Data Response", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Business fundamentals and activity analysis.", topics: [
            { id: "t1", number: "01", name: "Understanding Business Activity", count: "Questions" },
            { id: "t2", number: "02", name: "People in Business", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operations Management", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Information and Decisions", count: "Questions" },
            { id: "t6", number: "06", name: "External Influences on Business Activity", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Case Study", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Applying business knowledge to real-world scenarios.", topics: [
            { id: "t1", number: "01", name: "Understanding Business Activity", count: "Questions" },
            { id: "t2", number: "02", name: "People in Business", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operations Management", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Information and Decisions", count: "Questions" },
            { id: "t6", number: "06", name: "External Influences on Business Activity", count: "Questions" },
            { id: "t7", number: "07", name: "Case Study Extracts", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ol-addmath", name: "Additional Mathematics", code: "4037", icon: "functions", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "500",
        description: "Advanced mathematical preparation for higher studies.",
        components: [] 
      }
    ]
  },
  "igcse": {
    title: "IGCSE",
    description: "Explore core subjects tailored for the Cambridge IGCSE curriculum. Access highly detailed topical breakdowns to target specific weaknesses.",
    subjects: [
      { 
        id: "ig-math", name: "Mathematics", code: "0580", icon: "calculate", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.4k",
        description: "Numbers, geometry, statistics, and algebraic logic.",
        components: [
          { id: "p2", name: "Paper 2 - Non-calculator (Extended)", type: "Extended", tagColor: "bg-secondary-fixed text-primary", icon: "calculate", description: "Extended non-calculator syllabus applications.", topics: [
            { id: "t1", number: "01", name: "Numbers", count: "Questions" },
            { id: "t2", number: "02", name: "Algebra", count: "Questions" },
            { id: "t3", number: "03", name: "Mensuration", count: "Questions" },
            { id: "t4", number: "04", name: "Geometry", count: "Questions" },
            { id: "t5", number: "05", name: "Trigonometry", count: "Questions" },
            { id: "t6", number: "06", name: "Lines", count: "Questions" },
            { id: "t7", number: "07", name: "Graphs", count: "Questions" },
            { id: "t8", number: "08", name: "Sets", count: "Questions" },
            { id: "t9", number: "09", name: "Vectors", count: "Questions" },
            { id: "t10", number: "10", name: "Matrices", count: "Questions" },
            { id: "t11", number: "11", name: "Transformation", count: "Questions" },
            { id: "t12", number: "12", name: "Statistics", count: "Questions" },
            { id: "t13", number: "13", name: "Probability", count: "Questions" },
            { id: "t14", number: "14", name: "Functions", count: "Questions" },
            { id: "t15", number: "15", name: "Linear Programming", count: "Questions" },
            { id: "t16", number: "16", name: "Sequences", count: "Questions" },
            { id: "t17", number: "17", name: "Differentiation", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Calculator (Extended)", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "functions", description: "Extended calculator syllabus applications.", topics: [
            { id: "t1", number: "01", name: "Numbers", count: "Questions" },
            { id: "t2", number: "02", name: "Algebra", count: "Questions" },
            { id: "t3", number: "03", name: "Mensuration", count: "Questions" },
            { id: "t4", number: "04", name: "Geometry", count: "Questions" },
            { id: "t5", number: "05", name: "Trigonometry", count: "Questions" },
            { id: "t6", number: "06", name: "Lines", count: "Questions" },
            { id: "t7", number: "07", name: "Graphs", count: "Questions" },
            { id: "t8", number: "08", name: "Sets", count: "Questions" },
            { id: "t9", number: "09", name: "Vectors", count: "Questions" },
            { id: "t10", number: "10", name: "Matrices", count: "Questions" },
            { id: "t11", number: "11", name: "Transformation", count: "Questions" },
            { id: "t12", number: "12", name: "Statistics", count: "Questions" },
            { id: "t13", number: "13", name: "Probability", count: "Questions" },
            { id: "t14", number: "14", name: "Functions", count: "Questions" },
            { id: "t15", number: "15", name: "Linear Programming", count: "Questions" },
            { id: "t16", number: "16", name: "Sequences", count: "Questions" },
            { id: "t17", number: "17", name: "Differentiation", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-addmath", name: "Additional Mathematics", code: "0606", icon: "functions", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "600",
        description: "Advanced supplementary mathematics preparation.",
        components: [] 
      },
      { 
        id: "ig-ict", name: "ICT", code: "0417", icon: "computer", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.1k",
        description: "Information and communication technology theory.",
        components: [
          { id: "p1", name: "Paper 1 - Theory", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "memory", description: "Complete overview of ICT systems and applications.", topics: [
            { id: "t1", number: "01", name: "Types And Components of Computer Systems", count: "Questions" },
            { id: "t2", number: "02", name: "Input And Output Devices", count: "Questions" },
            { id: "t3", number: "03", name: "Storage Devices and Media", count: "Questions" },
            { id: "t4", number: "04", name: "Networks And the Effects of Using Them", count: "Questions" },
            { id: "t5", number: "05", name: "The Effects of Using It", count: "Questions" },
            { id: "t6", number: "06", name: "Ict Applications", count: "Questions" },
            { id: "t7", number: "07", name: "The Systems Life Cycle", count: "Questions" },
            { id: "t8", number: "08", name: "Safety And Security", count: "Questions" },
            { id: "t9", number: "09", name: "Audience", count: "Questions" },
            { id: "t10", number: "10", name: "Communication", count: "Questions" },
            { id: "t11", number: "11", name: "File Management", count: "Questions" },
            { id: "t12", number: "12", name: "Images", count: "Questions" },
            { id: "t13", number: "13", name: "Layout", count: "Questions" },
            { id: "t14", number: "14", name: "Styles", count: "Questions" },
            { id: "t15", number: "15", name: "Proofing", count: "Questions" },
            { id: "t16", number: "16", name: "Graphs And Charts", count: "Questions" },
            { id: "t17", number: "17", name: "Document Production", count: "Questions" },
            { id: "t18", number: "18", name: "Data Manipulation", count: "Questions" },
            { id: "t19", number: "19", name: "Presentations", count: "Questions" },
            { id: "t20", number: "20", name: "Data Analysis", count: "Questions" },
            { id: "t21", number: "21", name: "Website Authoring", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-cs", name: "Computer Science", code: "0478", icon: "terminal", tag: "TOPICAL PAPERS", tagColor: "bg-error-container text-error", resources: "1.3k",
        description: "Systems, logic, algorithms, and binary architectures.",
        components: [
          { id: "p1", name: "Paper 1 - Computer Systems", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "memory", description: "Hardware, networks, and data transmission.", topics: [
            { id: "t1", number: "01", name: "Data representation", count: "Questions" },
            { id: "t2", number: "02", name: "Data transmission", count: "Questions" },
            { id: "t3", number: "03", name: "Hardware", count: "Questions" },
            { id: "t4", number: "04", name: "Software", count: "Questions" },
            { id: "t5", number: "05", name: "The internet and its uses", count: "Questions" },
            { id: "t6", number: "06", name: "Automated and emerging technologies", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Algorithms, programming and logic", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "code", description: "Software design, databases, and problem solving.", topics: [
            { id: "t1", number: "01", name: "Algorithm design and problem-solving", count: "Questions" },
            { id: "t2", number: "02", name: "Programming", count: "Questions" },
            { id: "t3", number: "03", name: "Databases", count: "Questions" },
            { id: "t4", number: "04", name: "Boolean logic", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-bio", name: "Biology", code: "0610", icon: "biotech", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "900",
        description: "Life processes, organisms, and biotechnology.",
        components: [
          { id: "p2", name: "Paper 2 - Multiple Choice (Extended)", type: "Extended", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Extended syllabus multiple choice concepts.", topics: [
            { id: "t1", number: "01", name: "Characteristics & Classification of living organisms", count: "Questions" },
            { id: "t2", number: "02", name: "Organization & Maintenance of the Organism", count: "Questions" },
            { id: "t3", number: "03", name: "Movement in and out of Cells", count: "Questions" },
            { id: "t4", number: "04", name: "Biological Molecules", count: "Questions" },
            { id: "t5", number: "05", name: "Enzymes", count: "Questions" },
            { id: "t6", number: "06", name: "Plant Nutrition", count: "Questions" },
            { id: "t7", number: "07", name: "Human Nutrition", count: "Questions" },
            { id: "t8", number: "08", name: "Transport in Plants", count: "Questions" },
            { id: "t9", number: "09", name: "Transport in Animals", count: "Questions" },
            { id: "t10", number: "10", name: "Diseases & Immunity", count: "Questions" },
            { id: "t11", number: "11", name: "Gas Exchange in Humans", count: "Questions" },
            { id: "t12", number: "12", name: "Respiration", count: "Questions" },
            { id: "t13", number: "13", name: "Excretion in Humans", count: "Questions" },
            { id: "t14", number: "14", name: "Co-Ordination & Response", count: "Questions" },
            { id: "t15", number: "15", name: "Drugs", count: "Questions" },
            { id: "t16", number: "16", name: "Reproduction", count: "Questions" },
            { id: "t17", number: "17", name: "Inheritance", count: "Questions" },
            { id: "t18", number: "18", name: "Variation & Selection", count: "Questions" },
            { id: "t19", number: "19", name: "Organisms & Their Environment", count: "Questions" },
            { id: "t20", number: "20", name: "Biotechnology & Genetic Engineering", count: "Questions" },
            { id: "t21", number: "21", name: "Human Influences on Ecosystem", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Theory (Extended)", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Extended theory and structured biology questions.", topics: [
            { id: "t1", number: "01", name: "Characteristics & Classification of living organisms", count: "Questions" },
            { id: "t2", number: "02", name: "Organization & Maintenance of the Organism", count: "Questions" },
            { id: "t3", number: "03", name: "Movement in and out of Cells", count: "Questions" },
            { id: "t4", number: "04", name: "Biological Molecules", count: "Questions" },
            { id: "t5", number: "05", name: "Enzymes", count: "Questions" },
            { id: "t6", number: "06", name: "Plant Nutrition", count: "Questions" },
            { id: "t7", number: "07", name: "Human Nutrition", count: "Questions" },
            { id: "t8", number: "08", name: "Transport in Plants", count: "Questions" },
            { id: "t9", number: "09", name: "Transport in Animals", count: "Questions" },
            { id: "t10", number: "10", name: "Diseases & Immunity", count: "Questions" },
            { id: "t11", number: "11", name: "Gas Exchange in Humans", count: "Questions" },
            { id: "t12", number: "12", name: "Respiration", count: "Questions" },
            { id: "t13", number: "13", name: "Excretion in Humans", count: "Questions" },
            { id: "t14", number: "14", name: "Co-Ordination & Response", count: "Questions" },
            { id: "t15", number: "15", name: "Drugs", count: "Questions" },
            { id: "t16", number: "16", name: "Reproduction", count: "Questions" },
            { id: "t17", number: "17", name: "Inheritance", count: "Questions" },
            { id: "t18", number: "18", name: "Variation & Selection", count: "Questions" },
            { id: "t19", number: "19", name: "Organisms & Their Environment", count: "Questions" },
            { id: "t20", number: "20", name: "Biotechnology & Genetic Engineering", count: "Questions" },
            { id: "t21", number: "21", name: "Human Influences on Ecosystem", count: "Questions" }
          ]},
          { id: "p6", name: "Paper 6 - Alternative To Practical", type: "Practical", tagColor: "bg-surface-variant text-on-surface-variant", icon: "biotech", description: "Evaluating experimental methodology and lab techniques.", topics: [
            { id: "t1", number: "01", name: "Characteristics & Classification of living organisms", count: "Questions" },
            { id: "t2", number: "02", name: "Organization & Maintenance of the Organism", count: "Questions" },
            { id: "t3", number: "03", name: "Movement in and out of Cells", count: "Questions" },
            { id: "t4", number: "04", name: "Biological Molecules", count: "Questions" },
            { id: "t5", number: "05", name: "Enzymes", count: "Questions" },
            { id: "t6", number: "06", name: "Plant Nutrition", count: "Questions" },
            { id: "t7", number: "07", name: "Human Nutrition", count: "Questions" },
            { id: "t8", number: "08", name: "Transport in Plants", count: "Questions" },
            { id: "t9", number: "09", name: "Transport in Animals", count: "Questions" },
            { id: "t10", number: "10", name: "Diseases & Immunity", count: "Questions" },
            { id: "t11", number: "11", name: "Gas Exchange in Humans", count: "Questions" },
            { id: "t12", number: "12", name: "Respiration", count: "Questions" },
            { id: "t13", number: "13", name: "Excretion in Humans", count: "Questions" },
            { id: "t14", number: "14", name: "Co-Ordination & Response", count: "Questions" },
            { id: "t15", number: "15", name: "Drugs", count: "Questions" },
            { id: "t16", number: "16", name: "Reproduction", count: "Questions" },
            { id: "t17", number: "17", name: "Inheritance", count: "Questions" },
            { id: "t18", number: "18", name: "Variation & Selection", count: "Questions" },
            { id: "t19", number: "19", name: "Organisms & Their Environment", count: "Questions" },
            { id: "t20", number: "20", name: "Biotechnology & Genetic Engineering", count: "Questions" },
            { id: "t21", number: "21", name: "Human Influences on Ecosystem", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-phy", name: "Physics", code: "0625", icon: "bolt", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "850",
        description: "Kinematics, forces, and atomic energy.",
        components: [
          { id: "p2", name: "Paper 2 - Multiple Choice (Extended)", type: "Extended", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Extended syllabus multiple choice concepts.", topics: [
            { id: "t1", number: "01", name: "Measurement and Units", count: "Questions" },
            { id: "t2", number: "02", name: "Forces and Motions", count: "Questions" },
            { id: "t3", number: "03", name: "Forces and Pressure", count: "Questions" },
            { id: "t4", number: "04", name: "Forces and Energy", count: "Questions" },
            { id: "t5", number: "05", name: "Thermal Effects", count: "Questions" },
            { id: "t6", number: "06", name: "Waves and Sounds", count: "Questions" },
            { id: "t7", number: "07", name: "Rays and Waves", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity", count: "Questions" },
            { id: "t9", number: "09", name: "Magnets and Currents", count: "Questions" },
            { id: "t10", number: "10", name: "Electricity and Electronics", count: "Questions" },
            { id: "t11", number: "11", name: "Radioactivity", count: "Questions" },
            { id: "t12", number: "12", name: "Space Physics", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Theory (Extended)", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Extended theory and structured physics questions.", topics: [
            { id: "t1", number: "01", name: "Measurement and Units", count: "Questions" },
            { id: "t2", number: "02", name: "Forces and Motions", count: "Questions" },
            { id: "t3", number: "03", name: "Forces and Pressure", count: "Questions" },
            { id: "t4", number: "04", name: "Forces and Energy", count: "Questions" },
            { id: "t5", number: "05", name: "Thermal Effects", count: "Questions" },
            { id: "t6", number: "06", name: "Waves and Sounds", count: "Questions" },
            { id: "t7", number: "07", name: "Rays and Waves", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity", count: "Questions" },
            { id: "t9", number: "09", name: "Magnets and Currents", count: "Questions" },
            { id: "t10", number: "10", name: "Electricity and Electronics", count: "Questions" },
            { id: "t11", number: "11", name: "Radioactivity", count: "Questions" },
            { id: "t12", number: "12", name: "Space Physics", count: "Questions" }
          ]},
          { id: "p6", name: "Paper 6 - Alternative To Practical", type: "Practical", tagColor: "bg-surface-variant text-on-surface-variant", icon: "bolt", description: "Evaluating experimental methodology and lab techniques.", topics: [
            { id: "t1", number: "01", name: "Measurement and Units", count: "Questions" },
            { id: "t2", number: "02", name: "Forces and Motions", count: "Questions" },
            { id: "t3", number: "03", name: "Forces and Pressure", count: "Questions" },
            { id: "t4", number: "04", name: "Forces and Energy", count: "Questions" },
            { id: "t5", number: "05", name: "Thermal Effects", count: "Questions" },
            { id: "t6", number: "06", name: "Waves and Sounds", count: "Questions" },
            { id: "t7", number: "07", name: "Rays and Waves", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity", count: "Questions" },
            { id: "t9", number: "09", name: "Magnets and Currents", count: "Questions" },
            { id: "t10", number: "10", name: "Electricity and Electronics", count: "Questions" },
            { id: "t11", number: "11", name: "Radioactivity", count: "Questions" },
            { id: "t12", number: "12", name: "Space Physics", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-chem", name: "Chemistry", code: "0620", icon: "science", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "920",
        description: "Reactions, stoichiometry, and organic structures.",
        components: [
          { id: "p2", name: "Paper 2 - Multiple Choice (Extended)", type: "Extended", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Extended syllabus multiple choice concepts.", topics: [
            { id: "t1", number: "01", name: "States of Matter", count: "Questions" },
            { id: "t2", number: "02", name: "Separating Substances", count: "Questions" },
            { id: "t3", number: "03", name: "Atoms & Elements", count: "Questions" },
            { id: "t4", number: "04", name: "Atoms Combining", count: "Questions" },
            { id: "t5", number: "05", name: "Reacting Masses & Chemical Equations", count: "Questions" },
            { id: "t6", number: "06", name: "Using Moles", count: "Questions" },
            { id: "t7", number: "07", name: "Redox Reactions", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity & Chemical Changes", count: "Questions" },
            { id: "t9", number: "09", name: "Energy Changes & Reversible Reactions", count: "Questions" },
            { id: "t10", number: "10", name: "The Speed of a Reaction", count: "Questions" },
            { id: "t11", number: "11", name: "Acids & Bases", count: "Questions" },
            { id: "t12", number: "12", name: "The Periodic Table", count: "Questions" },
            { id: "t13", number: "13", name: "The Behavior of Metals", count: "Questions" },
            { id: "t14", number: "14", name: "Making Use of Metals", count: "Questions" },
            { id: "t15", number: "15", name: "Air & Water", count: "Questions" },
            { id: "t16", number: "16", name: "Some Non-Metals & Their Compounds", count: "Questions" },
            { id: "t17", number: "17", name: "Organic Chemistry", count: "Questions" },
            { id: "t18", number: "18", name: "Polymers", count: "Questions" },
            { id: "t19", number: "19", name: "In the Lab (Chemical Test & Salt Analysis)", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Theory (Extended)", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Extended theory and structured chemistry questions.", topics: [
            { id: "t1", number: "01", name: "States of Matter", count: "Questions" },
            { id: "t2", number: "02", name: "Separating Substances", count: "Questions" },
            { id: "t3", number: "03", name: "Atoms & Elements", count: "Questions" },
            { id: "t4", number: "04", name: "Atoms Combining", count: "Questions" },
            { id: "t5", number: "05", name: "Reacting Masses & Chemical Equations", count: "Questions" },
            { id: "t6", number: "06", name: "Using Moles", count: "Questions" },
            { id: "t7", number: "07", name: "Redox Reactions", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity & Chemical Changes", count: "Questions" },
            { id: "t9", number: "09", name: "Energy Changes & Reversible Reactions", count: "Questions" },
            { id: "t10", number: "10", name: "The Speed of a Reaction", count: "Questions" },
            { id: "t11", number: "11", name: "Acids & Bases", count: "Questions" },
            { id: "t12", number: "12", name: "The Periodic Table", count: "Questions" },
            { id: "t13", number: "13", name: "The Behavior of Metals", count: "Questions" },
            { id: "t14", number: "14", name: "Making Use of Metals", count: "Questions" },
            { id: "t15", number: "15", name: "Air & Water", count: "Questions" },
            { id: "t16", number: "16", name: "Some Non-Metals & Their Compounds", count: "Questions" },
            { id: "t17", number: "17", name: "Organic Chemistry", count: "Questions" },
            { id: "t18", number: "18", name: "Polymers", count: "Questions" },
            { id: "t19", number: "19", name: "In the Lab (Chemical Test & Salt Analysis)", count: "Questions" }
          ]},
          { id: "p6", name: "Paper 6 - Alternative To Practical", type: "Practical", tagColor: "bg-surface-variant text-on-surface-variant", icon: "science", description: "Evaluating experimental methodology and lab techniques.", topics: [
            { id: "t1", number: "01", name: "States of Matter", count: "Questions" },
            { id: "t2", number: "02", name: "Separating Substances", count: "Questions" },
            { id: "t3", number: "03", name: "Atoms & Elements", count: "Questions" },
            { id: "t4", number: "04", name: "Atoms Combining", count: "Questions" },
            { id: "t5", number: "05", name: "Reacting Masses & Chemical Equations", count: "Questions" },
            { id: "t6", number: "06", name: "Using Moles", count: "Questions" },
            { id: "t7", number: "07", name: "Redox Reactions", count: "Questions" },
            { id: "t8", number: "08", name: "Electricity & Chemical Changes", count: "Questions" },
            { id: "t9", number: "09", name: "Energy Changes & Reversible Reactions", count: "Questions" },
            { id: "t10", number: "10", name: "The Speed of a Reaction", count: "Questions" },
            { id: "t11", number: "11", name: "Acids & Bases", count: "Questions" },
            { id: "t12", number: "12", name: "The Periodic Table", count: "Questions" },
            { id: "t13", number: "13", name: "The Behavior of Metals", count: "Questions" },
            { id: "t14", number: "14", name: "Making Use of Metals", count: "Questions" },
            { id: "t15", number: "15", name: "Air & Water", count: "Questions" },
            { id: "t16", number: "16", name: "Some Non-Metals & Their Compounds", count: "Questions" },
            { id: "t17", number: "17", name: "Organic Chemistry", count: "Questions" },
            { id: "t18", number: "18", name: "Polymers", count: "Questions" },
            { id: "t19", number: "19", name: "In the Lab (Chemical Test & Salt Analysis)", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-econ", name: "Economics", code: "0455", icon: "monitoring", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "700",
        description: "Macro and micro economic indicators and policies.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core economic problems and market functions.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Problem: Choice and the Allocation of Resources", count: "Questions" },
            { id: "t2", number: "02", name: "The Allocation of Resources: How the Market Works; Market Failure", count: "Questions" },
            { id: "t3", number: "03", name: "The Individual as Producer, Consumer and Borrower", count: "Questions" },
            { id: "t4", number: "04", name: "The Private Firm as Producer and Employer", count: "Questions" },
            { id: "t5", number: "05", name: "Role Of Government in Economy", count: "Questions" },
            { id: "t6", number: "06", name: "Economic Indicators", count: "Questions" },
            { id: "t7", number: "07", name: "Developed and Developing Economies: Trends in Production, Population and Living Standards", count: "Questions" },
            { id: "t8", number: "08", name: "International Aspects", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Questions", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Detailed economic structures and policies.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Problem", count: "Questions" },
            { id: "t2", number: "02", name: "Demand, Supply and Equilibrium", count: "Questions" },
            { id: "t3", number: "03", name: "Elasticity", count: "Questions" },
            { id: "t4", number: "04", name: "Economic Systems", count: "Questions" },
            { id: "t5", number: "05", name: "Market Failure", count: "Questions" },
            { id: "t6", number: "06", name: "Money and Banking", count: "Questions" },
            { id: "t7", number: "07", name: "Households", count: "Questions" },
            { id: "t8", number: "08", name: "Workers", count: "Questions" },
            { id: "t9", number: "09", name: "Firms", count: "Questions" },
            { id: "t10", number: "10", name: "Firms and Production", count: "Questions" },
            { id: "t11", number: "11", name: "Firms Costs, Revenue and Objectives", count: "Questions" },
            { id: "t12", number: "12", name: "Market Structures", count: "Questions" },
            { id: "t13", number: "13", name: "Macroeconomic Aims of Government", count: "Questions" },
            { id: "t14", number: "14", name: "Macroeconomic Policies", count: "Questions" },
            { id: "t15", number: "15", name: "Economic Growth", count: "Questions" },
            { id: "t16", number: "16", name: "Employment and Unemployment", count: "Questions" },
            { id: "t17", number: "17", name: "Inflation and Deflation", count: "Questions" },
            { id: "t18", number: "18", name: "Economic Development", count: "Questions" },
            { id: "t19", number: "19", name: "International Trade and Globalization", count: "Questions" },
            { id: "t20", number: "20", name: "Foreign Exchange Rates", count: "Questions" },
            { id: "t21", number: "21", name: "Current Account of Balance of Payments", count: "Questions" },
            { id: "t22", number: "22", name: "Other small topics", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-bus", name: "Business Studies", code: "0450", icon: "business_center", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "810",
        description: "Marketing, operations, and external business influences.",
        components: [
          { id: "p1", name: "Paper 1 - Short Answer and Data Response", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Business fundamentals and activity analysis.", topics: [
            { id: "t1", number: "01", name: "Understanding Business Activity", count: "Questions" },
            { id: "t2", number: "02", name: "People in Business", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operations Management", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Information and Decisions", count: "Questions" },
            { id: "t6", number: "06", name: "External Influences on Business Activity", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Case Study", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Applying business knowledge to real-world scenarios.", topics: [
            { id: "t1", number: "01", name: "Understanding Business Activity", count: "Questions" },
            { id: "t2", number: "02", name: "People in Business", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operations Management", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Information and Decisions", count: "Questions" },
            { id: "t6", number: "06", name: "External Influences on Business Activity", count: "Questions" },
            { id: "t7", number: "07", name: "Case Study Extracts", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "ig-acc", name: "Accounting", code: "0452", icon: "account_balance", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "650",
        description: "Foundational accounting principles and financial statements.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "Core", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core bookkeeping and statement rules.", topics: [
            { id: "t1", number: "01", name: "Accounting Basics", count: "Questions" },
            { id: "t2", number: "02", name: "Books of Original Entry", count: "Questions" },
            { id: "t3", number: "03", name: "Cash Book and Discounts", count: "Questions" },
            { id: "t4", number: "04", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t5", number: "05", name: "Irrecoverable Debts and Provision for Doubtful Debts", count: "Questions" },
            { id: "t6", number: "06", name: "Accounting for Non-Current Assets", count: "Questions" },
            { id: "t7", number: "07", name: "Trial Balance", count: "Questions" },
            { id: "t8", number: "08", name: "Income Statements of Sole Traders", count: "Questions" },
            { id: "t9", number: "09", name: "Sole Traders Statements of Financial Position", count: "Questions" },
            { id: "t10", number: "10", name: "Adjustments in Financial Statements", count: "Questions" },
            { id: "t11", number: "11", name: "Accounting Concepts", count: "Questions" },
            { id: "t12", number: "12", name: "Capital and Revenue", count: "Questions" },
            { id: "t13", number: "13", name: "Errors not Affecting Agreement of Trial Balance", count: "Questions" },
            { id: "t14", number: "14", name: "Errors Effecting Agreement of Trial Balance", count: "Questions" },
            { id: "t15", number: "15", name: "Control Accounts", count: "Questions" },
            { id: "t16", number: "16", name: "Accounts from Incomplete Records", count: "Questions" },
            { id: "t17", number: "17", name: "Accounts of Non-Profit Organisations", count: "Questions" },
            { id: "t18", number: "18", name: "Manufacturing Accounts", count: "Questions" },
            { id: "t19", number: "19", name: "Partnership Accounts", count: "Questions" },
            { id: "t20", number: "20", name: "Company Accounts", count: "Questions" },
            { id: "t21", number: "21", name: "Ratio Analysis", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Written Paper", type: "Core", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Detailed accounting adjustments and concepts.", topics: [
            { id: "t1", number: "01", name: "Accounting Basics", count: "Questions" },
            { id: "t2", number: "02", name: "Books of Original Entry", count: "Questions" },
            { id: "t3", number: "03", name: "Cash Book and Petty Cash Book", count: "Questions" },
            { id: "t4", number: "04", name: "Accounts of Income and Expenses", count: "Questions" },
            { id: "t5", number: "05", name: "Inventory Valuation", count: "Questions" },
            { id: "t6", number: "06", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t7", number: "07", name: "Accounting Concepts", count: "Questions" },
            { id: "t8", number: "08", name: "Accounting for Depreciation", count: "Questions" },
            { id: "t9", number: "09", name: "Bad and Doubtful Debts", count: "Questions" },
            { id: "t10", number: "10", name: "Financial Statements of Sole Traders", count: "Questions" },
            { id: "t11", number: "11", name: "Partnership Accounts", count: "Questions" },
            { id: "t12", number: "12", name: "Capital and Revenue", count: "Questions" },
            { id: "t13", number: "13", name: "Correction of Errors", count: "Questions" },
            { id: "t14", number: "14", name: "Control Accounts", count: "Questions" },
            { id: "t15", number: "15", name: "Accounts from Incomplete Records", count: "Questions" },
            { id: "t16", number: "16", name: "Accounts of Non-Profit Organisations", count: "Questions" },
            { id: "t17", number: "17", name: "Manufacturing Accounts", count: "Questions" },
            { id: "t18", number: "18", name: "Company Accounts", count: "Questions" },
            { id: "t19", number: "19", name: "Ratio Analysis", count: "Questions" }
          ]}
        ]
      },
      // { 
      //   id: "ig-coord", name: "Co-ordinated Sciences", code: "0654", icon: "science", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "500",
      //   description: "Combined evaluation of core scientific principles.",
      //   components: [] 
      // },
      // { 
      //   id: "ig-comb", name: "Combined Science", code: "0653", icon: "science", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "450",
      //   description: "Foundational combined scientific modules.",
      //   components: [] 
      // },
      { 
        id: "ig-intmath", name: "International Mathematics", code: "0607", icon: "calculate", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "400",
        description: "Specialized international mathematical frameworks.",
        components: [
          { id: "p2", name: "Paper 2 - Non-calculator (Extended)", type: "Extended", tagColor: "bg-secondary-fixed text-primary", icon: "calculate", description: "Extended non-calculator syllabus applications.", topics: [
            { id: "t1", number: "01", name: "Number", count: "Questions" },
            { id: "t2", number: "02", name: "Algebra", count: "Questions" },
            { id: "t3", number: "03", name: "Functions", count: "Questions" },
            { id: "t4", number: "04", name: "Coordinate Geometry", count: "Questions" },
            { id: "t5", number: "05", name: "Geometry", count: "Questions" },
            { id: "t6", number: "06", name: "Vectors and Transformation", count: "Questions" },
            { id: "t7", number: "07", name: "Mensuration", count: "Questions" },
            { id: "t8", number: "08", name: "Trigonometry", count: "Questions" },
            { id: "t9", number: "09", name: "Sets", count: "Questions" },
            { id: "t10", number: "10", name: "Probability", count: "Questions" },
            { id: "t11", number: "11", name: "Statistics", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Calculator (Extended)", type: "Extended", tagColor: "bg-tertiary-fixed text-primary", icon: "functions", description: "Extended calculator syllabus applications.", topics: [
            { id: "t1", number: "01", name: "Number", count: "Questions" },
            { id: "t2", number: "02", name: "Algebra", count: "Questions" },
            { id: "t3", number: "03", name: "Functions", count: "Questions" },
            { id: "t4", number: "04", name: "Coordinate Geometry", count: "Questions" },
            { id: "t5", number: "05", name: "Geometry", count: "Questions" },
            { id: "t6", number: "06", name: "Vectors and Transformation", count: "Questions" },
            { id: "t7", number: "07", name: "Mensuration", count: "Questions" },
            { id: "t8", number: "08", name: "Trigonometry", count: "Questions" },
            { id: "t9", number: "09", name: "Sets", count: "Questions" },
            { id: "t10", number: "10", name: "Probability", count: "Questions" },
            { id: "t11", number: "11", name: "Statistics", count: "Questions" }
          ]}
        ]
      }
    ]
  },
  "a-levels": {
    title: "A Levels",
    description: "Explore 15+ core subjects tailored for the Cambridge Assessment curriculum. Access curated high-quality notes, past papers, and expert guides in a distraction-free environment.",
    subjects: [
      { 
        id: "al-acc", name: "Accounting", code: "9706", icon: "account_balance", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "1.8k",
        description: "Master financial statements, cost concepts, and management accounting with detailed topical breakdowns.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core accounting concepts and conventions.", topics: [
            { id: "t1", number: "01", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t2", number: "02", name: "Irrecoverable Debts & Doubtful Debts", count: "Questions" },
            { id: "t3", number: "03", name: "Accounting For Non-Current Assets", count: "Questions" },
            { id: "t4", number: "04", name: "Accounting Concepts and Conventions", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Statements of Sole Traders", count: "Questions" },
            { id: "t6", number: "06", name: "Financial Statements of Partnerships", count: "Questions" },
            { id: "t7", number: "07", name: "Capital and Revenue", count: "Questions" },
            { id: "t8", number: "08", name: "Errors and Suspense Accounts", count: "Questions" },
            { id: "t9", number: "09", name: "Control Accounts", count: "Questions" },
            { id: "t10", number: "10", name: "Accounts from Incomplete Records", count: "Questions" },
            { id: "t11", number: "11", name: "Company Accounts - Issue of Shares", count: "Questions" },
            { id: "t12", number: "12", name: "Financial Statements of Companies", count: "Questions" },
            { id: "t13", number: "13", name: "Ratio Analysis", count: "Questions" },
            { id: "t14", number: "14", name: "Computerised Accounting", count: "Questions" },
            { id: "t15", number: "15", name: "Inventory Valuation", count: "Questions" },
            { id: "t16", number: "16", name: "Cost Concepts and Cost Classifications", count: "Questions" },
            { id: "t17", number: "17", name: "Labour Costing", count: "Questions" },
            { id: "t18", number: "18", name: "Job and Batch Order Costing", count: "Questions" },
            { id: "t19", number: "19", name: "Absorption Costing", count: "Questions" },
            { id: "t20", number: "20", name: "Break-Even and Profit Volume Analysis", count: "Questions" },
            { id: "t21", number: "21", name: "Marginal Costing & Decision Making", count: "Questions" },
            { id: "t22", number: "22", name: "Marginal Costing & Limiting Factors", count: "Questions" },
            { id: "t23", number: "23", name: "Marginal & Absorption Statements of Profit or Loss", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Fundamentals Of Accounting", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "Structured questions on fundamental accounting principles.", topics: [
            { id: "t1", number: "01", name: "Bank Reconciliation Statements", count: "Questions" },
            { id: "t2", number: "02", name: "Irrecoverable & Doubtful Debts", count: "Questions" },
            { id: "t3", number: "03", name: "Accounting For Non-Current Assets", count: "Questions" },
            { id: "t4", number: "04", name: "Accounting Concepts", count: "Questions" },
            { id: "t5", number: "05", name: "Financial Statements of Sole Traders", count: "Questions" },
            { id: "t6", number: "06", name: "Financial Statements of Partnerships", count: "Questions" },
            { id: "t7", number: "07", name: "Errors And Suspense Accounts", count: "Questions" },
            { id: "t8", number: "08", name: "Control Accounts", count: "Questions" },
            { id: "t9", number: "09", name: "Accounts From Incomplete Records", count: "Questions" },
            { id: "t10", number: "10", name: "Company Accounts - Issue of Shares", count: "Questions" },
            { id: "t11", number: "11", name: "Financial Statements of Companies", count: "Questions" },
            { id: "t12", number: "12", name: "Ratio Analysis", count: "Questions" },
            { id: "t13", number: "13", name: "Computerised Accounting", count: "Questions" },
            { id: "t14", number: "14", name: "Inventory Valuation", count: "Questions" },
            { id: "t15", number: "15", name: "Absorption Costing", count: "Questions" },
            { id: "t16", number: "16", name: "Break Even & Profit Volume Analysis", count: "Questions" },
            { id: "t17", number: "17", name: "Marginal Costing & Decision Making", count: "Questions" },
            { id: "t18", number: "18", name: "Marginal Costing & Limiting Factors", count: "Questions" },
            { id: "t19", number: "19", name: "Marginal & Absorption Statements of Profit or Loss", count: "Questions" }
          ]},
          { id: "p3", name: "Paper 3 - Financial Accounting", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "account_balance_wallet", description: "Advanced financial accounting including corporate and international standards.", topics: [
            { id: "t1", number: "01", name: "Changes In Partnerships", count: "Questions" },
            { id: "t2", number: "02", name: "Dissolution Of Partnerships", count: "Questions" },
            { id: "t3", number: "03", name: "Sale Of Business", count: "Questions" },
            { id: "t4", number: "04", name: "Purchase Of Business", count: "Questions" },
            { id: "t5", number: "05", name: "Business Mergers", count: "Questions" },
            { id: "t6", number: "06", name: "Financial Statements of Companies", count: "Questions" },
            { id: "t7", number: "07", name: "Issue Of Shares & Debentures", count: "Questions" },
            { id: "t8", number: "08", name: "Statements Of Cash Flows", count: "Questions" },
            { id: "t9", number: "09", name: "International Accounting Standards", count: "Questions" },
            { id: "t10", number: "10", name: "Auditing & Stewardship", count: "Questions" },
            { id: "t11", number: "11", name: "Ratio Analysis", count: "Questions" },
            { id: "t12", number: "12", name: "Clubs And Societies", count: "Questions" },
            { id: "t13", number: "13", name: "Manufacturing Businesses", count: "Questions" },
            { id: "t14", number: "14", name: "Computerised Accounting Systems", count: "Questions" },
            { id: "t15", number: "15", name: "Ethical Considerations", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Cost and Management Accounting", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "analytics", description: "Investment appraisal, standard costing, and budgetary controls.", topics: [
            { id: "t1", number: "01", name: "Budgeting and Budgetary Controls", count: "Questions" },
            { id: "t2", number: "02", name: "Investment Appraisal", count: "Questions" },
            { id: "t3", number: "03", name: "Activity Based Costing", count: "Questions" },
            { id: "t4", number: "04", name: "Standard Costing", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-bus", name: "Business", code: "9609", icon: "business_center", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "780",
        description: "Analyze business environments, marketing, and human resource management using real-world case studies.",
        components: [
          { id: "p1", name: "Paper 1 - Business Concepts 01", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core concepts including environment, people, and marketing.", topics: [
            { id: "t1", number: "01", name: "Business and its environment", count: "Questions" },
            { id: "t2", number: "02", name: "People in organisations", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operation and Project Management", count: "Questions" },
            { id: "t5", number: "05", name: "Finance and Accounting", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Business Concepts 02", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "Structured business concepts and operations.", topics: [
            { id: "t1", number: "01", name: "Business and its environment", count: "Questions" },
            { id: "t2", number: "02", name: "Human Resource Management", count: "Questions" },
            { id: "t3", number: "03", name: "Marketing", count: "Questions" },
            { id: "t4", number: "04", name: "Operations Management", count: "Questions" },
            { id: "t5", number: "05", name: "Finance Accounting", count: "Questions" }
          ]},
          { id: "p3", name: "Paper 3 - Business Decision-Making", type: "A2 Level", tagColor: "bg-surface-variant text-on-surface-variant", icon: "engineering", description: "Advanced business decision making modules are currently being updated.", topics: []},
          { id: "p4", name: "Paper 4 - Business Strategy", type: "A2 Level", tagColor: "bg-surface-variant text-on-surface-variant", icon: "architecture", description: "Business strategy modules are currently being updated.", topics: []}
        ]
      },
      { 
        id: "al-econ", name: "Economics", code: "9708", icon: "monitoring", tag: "TOPICAL PAPERS", tagColor: "bg-tertiary-fixed text-primary", resources: "620",
        description: "Study micro and macro economic theories, market structures, and government interventions.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Foundational micro and macro economic concepts.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Ideas and Resource Allocation", count: "Questions" },
            { id: "t2", number: "02", name: "The Price System and the Micro Economy", count: "Questions" },
            { id: "t3", number: "03", name: "Government Microeconomic Intervention", count: "Questions" },
            { id: "t4", number: "04", name: "The Macro Economy", count: "Questions" },
            { id: "t5", number: "05", name: "Government Macro Intervention", count: "Questions" },
            { id: "t6", number: "06", name: "International Economic Issues", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Data Response and Essays", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "Application of economic theory to real-world data and essay writing.", topics: [
            { id: "t1", number: "01", name: "Economic Systems", count: "Questions" },
            { id: "t2", number: "02", name: "Scarcity, Opportunity Cost, Production Possibility Curve", count: "Questions" },
            { id: "t3", number: "03", name: "Market Equilibrium, Shifts in Demand/Supply Curves", count: "Questions" },
            { id: "t4", number: "04", name: "PED, MED, XED", count: "Questions" },
            { id: "t5", number: "05", name: "PES, Primary Goods, Consumer/Producer Surplus, Indirect Taxes, Subsidies", count: "Questions" },
            { id: "t6", number: "06", name: "Maximum and Minimum Prices", count: "Questions" },
            { id: "t7", number: "07", name: "Merit, Demerit, Private and Public Goods", count: "Questions" },
            { id: "t8", number: "08", name: "Factors of Production, Division of Labour, Labour Productivity", count: "Questions" },
            { id: "t9", number: "09", name: "Income Inequalities", count: "Questions" },
            { id: "t10", number: "10", name: "AD/AS, Circular Flow of National Income, Economic Growth", count: "Questions" },
            { id: "t11", number: "11", name: "Prices Indices, Inflation, Unemployment", count: "Questions" },
            { id: "t12", number: "12", name: "International Trades", count: "Questions" },
            { id: "t13", number: "13", name: "Fiscal, Monetary and Supply Side Policies", count: "Questions" }
          ]},
          { id: "p3", name: "Paper 3 - Multiple Choice", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "assignment", description: "Advanced micro and macro economic multiple choice evaluations.", topics: [
            { id: "t1", number: "01", name: "Basic Economic Ideas and Resource Allocation", count: "Questions" },
            { id: "t2", number: "02", name: "The Price System and The Micro Economy", count: "Questions" },
            { id: "t3", number: "03", name: "Government Microeconomic Intervention", count: "Questions" },
            { id: "t4", number: "04", name: "The Macro Economy", count: "Questions" },
            { id: "t5", number: "05", name: "Government Macro Intervention", count: "Questions" },
            { id: "t6", number: "06", name: "International Economic Issues", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Data Response and Essays", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "In-depth essays and data response for advanced economic scenarios.", topics: [
            { id: "t1", number: "01", name: "Consumers' Equilibrium, Indifference Curve Analysis", count: "Questions" },
            { id: "t2", number: "02", name: "Cost Curves, Size of Firms", count: "Questions" },
            { id: "t3", number: "03", name: "Market Structures", count: "Questions" },
            { id: "t4", number: "04", name: "Economic Efficiency", count: "Questions" },
            { id: "t5", number: "05", name: "Factor Market", count: "Questions" },
            { id: "t6", number: "06", name: "Per Capita Income, Living Standards, Developing Economies", count: "Questions" },
            { id: "t7", number: "07", name: "Equilibrium Income, Keynesian Multiplier", count: "Questions" },
            { id: "t8", number: "08", name: "Macro Economic Policies, Exchange Rates", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-math", name: "Mathematics", code: "9709", icon: "calculate", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.2k",
        description: "Master each syllabus component with precision. Access curated, topic-wise questions spanning over a decade of past papers.",
        components: [
          { id: "p1", name: "Pure Mathematics 1", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "functions", description: "Quadratics, functions, coordinate geometry, circular measure, trigonometry, series, differentiation, and integration.", topics: [
            { id: "t1", number: "01", name: "Coordinates Geometry", count: "Questions" },
            { id: "t2", number: "02", name: "Functions", count: "Questions" },
            { id: "t3", number: "03", name: "Intersection Points", count: "Questions" },
            { id: "t4", number: "04", name: "Differentiation", count: "Questions" },
            { id: "t5", number: "05", name: "Sequences & Series", count: "Questions" },
            { id: "t6", number: "06", name: "Binomial Theorem", count: "Questions" },
            { id: "t7", number: "07", name: "Trigonometry", count: "Questions" },
            { id: "t8", number: "08", name: "Vectors", count: "Questions" },
            { id: "t9", number: "09", name: "Integration", count: "Questions" },
            { id: "t10", number: "10", name: "Radians", count: "Questions" }
          ]},
          { id: "p3", name: "Pure Mathematics 3", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "architecture", description: "Advanced algebra, complex numbers, differential equations, vectors, and advanced calculus methods.", topics: [
            { id: "t1", number: "01", name: "Algebra", count: "Questions" },
            { id: "t2", number: "02", name: "Logarithmic & Exponential Functions", count: "Questions" },
            { id: "t3", number: "03", name: "Trigonometry", count: "Questions" },
            { id: "t4", number: "04", name: "Differentiation", count: "Questions" },
            { id: "t5", number: "05", name: "Integration", count: "Questions" },
            { id: "t6", number: "06", name: "Differentiation Equations", count: "Questions" },
            { id: "t7", number: "07", name: "Numerical Methods", count: "Questions" },
            { id: "t8", number: "08", name: "Complex Numbers", count: "Questions" },
            { id: "t9", number: "09", name: "Vectors", count: "Questions" }
          ]},
          { id: "m1", name: "Mechanics", type: "AS / A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "settings_suggest", description: "Forces and equilibrium, kinematics of motion in a straight line, Newton's laws of motion, energy, work and power.", topics: [
            { id: "t1", number: "01", name: "Forces & Equilibrium", count: "Questions" },
            { id: "t2", number: "02", name: "Kinematics of Motion in A Straight Line", count: "Questions" },
            { id: "t3", number: "03", name: "Newton's Laws of Motion", count: "Questions" },
            { id: "t4", number: "04", name: "Energy, Work & Power", count: "Questions" },
            { id: "t5", number: "05", name: "General Motion in Straight Line", count: "Questions" },
            { id: "t6", number: "06", name: "Momentum", count: "Questions" }
          ]},
          { id: "s1", name: "Probability & Statistics 1", type: "AS / A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "casino", description: "Representation of data, permutations and combinations, probability, discrete random variables and the normal distribution.", topics: [
            { id: "t1", number: "01", name: "Representation Of Data", count: "Questions" },
            { id: "t2", number: "02", name: "Permutation & Combination", count: "Questions" },
            { id: "t3", number: "03", name: "Probability", count: "Questions" },
            { id: "t4", number: "04", name: "Discrete Random Variables", count: "Questions" },
            { id: "t5", number: "05", name: "The Normal Distribution", count: "Questions" },
            { id: "t6", number: "06", name: "The Binomial Distribution", count: "Questions" },
            { id: "t7", number: "07", name: "Geometric Distribution", count: "Questions" }
          ]},
          { id: "s2", name: "Probability & Statistics 2", type: "A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "query_stats", description: "The Poisson distribution, linear combinations of random variables, continuous random variables, sampling and estimation, and hypothesis testing.", topics: [
            { id: "t1", number: "01", name: "Hypothesis Testing Using Binomial Distribution", count: "Questions" },
            { id: "t2", number: "02", name: "Hypothesis Testing Using Normal Distribution", count: "Questions" },
            { id: "t3", number: "03", name: "Poisson Distribution", count: "Questions" },
            { id: "t4", number: "04", name: "Linear Combination of Random Variables", count: "Questions" },
            { id: "t5", number: "05", name: "Continuous Random Variables", count: "Questions" },
            { id: "t6", number: "06", name: "Sampling", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-furmath", name: "Further Mathematics", code: "9231", icon: "functions", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "400",
        description: "Specialized advanced mathematical concepts designed to bridge the gap to university-level engineering and mathematics.",
        components: [
          { id: "p1", name: "Paper 1/2 - Further Pure Mathematics 1", type: "AS / A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "functions", description: "Roots of polynomial equations, rational functions, matrices, and polar coordinates.", topics: [
            { id: "t1", number: "01", name: "Roots Of Polynomial Equations", count: "Questions" },
            { id: "t2", number: "02", name: "Rational Functions and Graphs", count: "Questions" },
            { id: "t3", number: "03", name: "Summation Of Series", count: "Questions" },
            { id: "t4", number: "04", name: "Matrices", count: "Questions" },
            { id: "t5", number: "05", name: "Polar Coordinates", count: "Questions" },
            { id: "t6", number: "06", name: "Vectors", count: "Questions" },
            { id: "t7", number: "07", name: "Proof By Induction", count: "Questions" },
            { id: "t8", number: "08", name: "Hyperbolic Functions", count: "Questions" },
            { id: "t9", number: "09", name: "Differentiation", count: "Questions" },
            { id: "t10", number: "10", name: "Integration", count: "Questions" },
            { id: "t11", number: "11", name: "Complex Numbers", count: "Questions" },
            { id: "t12", number: "12", name: "Differential Equations", count: "Questions" }
          ]},
          { id: "p3", name: "Paper 3 - Further Mechanics", type: "AS / A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "settings_suggest", description: "Circular motion, momentum, impulse, and rigid body equilibrium.", topics: [
            { id: "t1", number: "01", name: "Momentum And Impulse", count: "Questions" },
            { id: "t2", number: "02", name: "Circular Motion", count: "Questions" },
            { id: "t3", number: "03", name: "Equilibrium of a Rigid Body Under Coplanar Forces", count: "Questions" },
            { id: "t4", number: "04", name: "Rotation of a Rigid Body", count: "Questions" },
            { id: "t5", number: "05", name: "Simple Harmonic Motion", count: "Questions" },
            { id: "t6", number: "06", name: "Projectile Motion", count: "Questions" },
            { id: "t7", number: "07", name: "Linear Motion Under Variable Force", count: "Questions" },
            { id: "t8", number: "08", name: "HOOK'S LAW", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Further Probability & Statistics", type: "AS / A2 Level", tagColor: "bg-primary-fixed text-primary", icon: "query_stats", description: "Advanced statistical inference, X2 testing, and generating functions.", topics: [
            { id: "t1", number: "01", name: "Further Work on Distributions", count: "Questions" },
            { id: "t2", number: "02", name: "Inference Using Normal And T-Distributions", count: "Questions" },
            { id: "t3", number: "03", name: "X2 Test", count: "Questions" },
            { id: "t4", number: "04", name: "Bivariate Data Simple", count: "Questions" },
            { id: "t5", number: "05", name: "Non Parametric Test", count: "Questions" },
            { id: "t6", number: "06", name: "Continuous Random Variable", count: "Questions" },
            { id: "t7", number: "07", name: "Probability Generating Function", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-bio", name: "Biology", code: "9700", icon: "biotech", tag: "TOPICAL PAPERS", tagColor: "bg-secondary-fixed text-primary", resources: "1.1k",
        description: "Comprehensive topical breakdown from cell structure and enzymes to genetic technology and evolution.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Core biological mechanisms and cellular structures.", topics: [
            { id: "t1", number: "01", name: "Cell Structure", count: "Questions" },
            { id: "t2", number: "02", name: "Biological molecules", count: "Questions" },
            { id: "t3", number: "03", name: "Enzymes", count: "Questions" },
            { id: "t4", number: "04", name: "Cell Membranes and Transport", count: "Questions" },
            { id: "t5", number: "05", name: "The Mitotic Cell Cycle", count: "Questions" },
            { id: "t6", number: "06", name: "Nucleic Acids and Protein Synthesis", count: "Questions" },
            { id: "t7", number: "07", name: "Transport In Plants", count: "Questions" },
            { id: "t8", number: "08", name: "Transport in Mammals", count: "Questions" },
            { id: "t9", number: "09", name: "Gas Exchange", count: "Questions" },
            { id: "t10", number: "10", name: "Infectious Disease", count: "Questions" },
            { id: "t11", number: "11", name: "Immunity", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Questions", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "In-depth application of core biological concepts.", topics: [
            { id: "t1", number: "01", name: "Cell Structure", count: "Questions" },
            { id: "t2", number: "02", name: "Biological molecules", count: "Questions" },
            { id: "t3", number: "03", name: "Enzymes", count: "Questions" },
            { id: "t4", number: "04", name: "Cell Membranes and Transport", count: "Questions" },
            { id: "t5", number: "05", name: "The Mitotic Cell Cycle", count: "Questions" },
            { id: "t6", number: "06", name: "Nucleic Acids and Protein Synthesis", count: "Questions" },
            { id: "t7", number: "07", name: "Transport In Plants", count: "Questions" },
            { id: "t8", number: "08", name: "Transport in Mammals", count: "Questions" },
            { id: "t9", number: "09", name: "Gas Exchange", count: "Questions" },
            { id: "t10", number: "10", name: "Infectious Disease", count: "Questions" },
            { id: "t11", number: "11", name: "Immunity", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Structured Questions", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Advanced topics including genetic technology, homeostasis, and energy.", topics: [
            { id: "t1", number: "01", name: "Energy and Respiration", count: "Questions" },
            { id: "t2", number: "02", name: "Photosynthesis", count: "Questions" },
            { id: "t3", number: "03", name: "Homeostasis", count: "Questions" },
            { id: "t4", number: "04", name: "Control and Coordination", count: "Questions" },
            { id: "t5", number: "05", name: "Inherited Change", count: "Questions" },
            { id: "t6", number: "06", name: "Selection and Evolution", count: "Questions" },
            { id: "t7", number: "07", name: "Biodiversity, Classification and Conservation", count: "Questions" },
            { id: "t8", number: "08", name: "Genetic Technology", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-chem", name: "Chemistry", code: "9701", icon: "science", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "950",
        description: "A complete repository covering physical, inorganic, and organic chemistry.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Foundational multiple choice covering all three branches of chemistry.", topics: [
            { id: "t1", number: "01", name: "Atoms, Molecules & Stoichiometry", count: "Questions" },
            { id: "t2", number: "02", name: "Atomic Structure", count: "Questions" },
            { id: "t3", number: "03", name: "Chemical Bonding", count: "Questions" },
            { id: "t4", number: "04", name: "States Of Matter", count: "Questions" },
            { id: "t5", number: "05", name: "Chemical Energetics", count: "Questions" },
            { id: "t6", number: "06", name: "Electrochemistry", count: "Questions" },
            { id: "t7", number: "07", name: "Equilibria", count: "Questions" },
            { id: "t8", number: "08", name: "Reaction Kinetics", count: "Questions" },
            { id: "t9", number: "09", name: "The Periodic Table: Chemical Periodicity", count: "Questions" },
            { id: "t10", number: "10", name: "Group 2", count: "Questions" },
            { id: "t11", number: "11", name: "Group 17", count: "Questions" },
            { id: "t12", number: "12", name: "An Introduction to the Chemistry of Transition Elements", count: "Questions" },
            { id: "t13", number: "13", name: "Nitrogen & Sulfur", count: "Questions" },
            { id: "t14", number: "14", name: "An Introduction to Organic Chemistry", count: "Questions" },
            { id: "t15", number: "15", name: "Hydrocarbons", count: "Questions" },
            { id: "t16", number: "16", name: "Halogen Derivatives", count: "Questions" },
            { id: "t17", number: "17", name: "Hydroxy Compounds", count: "Questions" },
            { id: "t18", number: "18", name: "Carbonyl Compounds", count: "Questions" },
            { id: "t19", number: "19", name: "Carboxylic Acids and Derivatives", count: "Questions" },
            { id: "t20", number: "20", name: "Nitrogen Compounds", count: "Questions" },
            { id: "t21", number: "21", name: "Polymerisation", count: "Questions" },
            { id: "t22", number: "22", name: "Analytical Techniques", count: "Questions" },
            { id: "t23", number: "23", name: "Organic Synthesis", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Questions", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "Structured application of foundational chemistry principles.", topics: [
            { id: "t1", number: "01", name: "Atoms, Molecules & Stoichiometry", count: "Questions" },
            { id: "t2", number: "02", name: "Atomic Structure", count: "Questions" },
            { id: "t3", number: "03", name: "Chemical Bonding", count: "Questions" },
            { id: "t4", number: "04", name: "States Of Matter", count: "Questions" },
            { id: "t5", number: "05", name: "Chemical Energetics", count: "Questions" },
            { id: "t6", number: "06", name: "Electrochemistry", count: "Questions" },
            { id: "t7", number: "07", name: "Equilibria", count: "Questions" },
            { id: "t8", number: "08", name: "Reaction Kinetics", count: "Questions" },
            { id: "t9", number: "09", name: "The Periodic Table: Chemical Periodicity", count: "Questions" },
            { id: "t10", number: "10", name: "Group 2", count: "Questions" },
            { id: "t11", number: "11", name: "Group 17", count: "Questions" },
            { id: "t12", number: "12", name: "An Introduction to the Chemistry of Transition Elements", count: "Questions" },
            { id: "t13", number: "13", name: "Nitrogen & Sulfur", count: "Questions" },
            { id: "t14", number: "14", name: "An Introduction to Organic Chemistry", count: "Questions" },
            { id: "t15", number: "15", name: "Hydrocarbons", count: "Questions" },
            { id: "t16", number: "16", name: "Halogen Derivatives", count: "Questions" },
            { id: "t17", number: "17", name: "Hydroxy Compounds", count: "Questions" },
            { id: "t18", number: "18", name: "Carbonyl Compounds", count: "Questions" },
            { id: "t19", number: "19", name: "Carboxylic Acids and Derivatives", count: "Questions" },
            { id: "t20", number: "20", name: "Nitrogen Compounds", count: "Questions" },
            { id: "t21", number: "21", name: "Polymerisation", count: "Questions" },
            { id: "t22", number: "22", name: "Analytical Techniques", count: "Questions" },
            { id: "t23", number: "23", name: "Organic Synthesis", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Structured Questions", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Advanced chemistry covering complex synthesis and physical applications.", topics: [
            { id: "t1", number: "01", name: "Atoms, Molecules & Stoichiometry", count: "Questions" },
            { id: "t2", number: "02", name: "Atomic Structure", count: "Questions" },
            { id: "t3", number: "03", name: "Chemical Bonding", count: "Questions" },
            { id: "t4", number: "04", name: "States Of Matter", count: "Questions" },
            { id: "t5", number: "05", name: "Chemical Energetics", count: "Questions" },
            { id: "t6", number: "06", name: "Electrochemistry", count: "Questions" },
            { id: "t7", number: "07", name: "Equilibria", count: "Questions" },
            { id: "t8", number: "08", name: "Reaction Kinetics", count: "Questions" },
            { id: "t9", number: "09", name: "The Periodic Table: Chemical Periodicity", count: "Questions" },
            { id: "t10", number: "10", name: "Group 2", count: "Questions" },
            { id: "t11", number: "11", name: "Group 17", count: "Questions" },
            { id: "t12", number: "12", name: "An Introduction to the Chemistry of Transition Elements", count: "Questions" },
            { id: "t13", number: "13", name: "Nitrogen & Sulfur", count: "Questions" },
            { id: "t14", number: "14", name: "An Introduction to Organic Chemistry", count: "Questions" },
            { id: "t15", number: "15", name: "Hydrocarbons", count: "Questions" },
            { id: "t16", number: "16", name: "Halogen Derivatives", count: "Questions" },
            { id: "t17", number: "17", name: "Hydroxy Compounds", count: "Questions" },
            { id: "t18", number: "18", name: "Carbonyl Compounds", count: "Questions" },
            { id: "t19", number: "19", name: "Carboxylic Acids and Derivatives", count: "Questions" },
            { id: "t20", number: "20", name: "Nitrogen Compounds", count: "Questions" },
            { id: "t21", number: "21", name: "Polymerisation", count: "Questions" },
            { id: "t22", number: "22", name: "Analytical Techniques", count: "Questions" },
            { id: "t23", number: "23", name: "Organic Synthesis", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-phy", name: "Physics", code: "9702", icon: "bolt", tag: "TOPICAL PAPERS", tagColor: "bg-primary-fixed text-primary", resources: "840",
        description: "From kinematics and dynamics to quantum and medical physics, perfectly structured for revision.",
        components: [
          { id: "p1", name: "Paper 1 - Multiple Choice", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "assignment", description: "Foundational kinematics, waves, and electricity multiple choice.", topics: [
            { id: "t1", number: "01", name: "Physical Quantities and Unit", count: "Questions" },
            { id: "t2", number: "02", name: "Measurement Techniques", count: "Questions" },
            { id: "t3", number: "03", name: "Kinematics", count: "Questions" },
            { id: "t4", number: "04", name: "Dynamics", count: "Questions" },
            { id: "t5", number: "05", name: "Forces, Density and Pressure", count: "Questions" },
            { id: "t6", number: "06", name: "Work, Energy and Power", count: "Questions" },
            { id: "t7", number: "07", name: "Deformation of solids", count: "Questions" },
            { id: "t8", number: "08", name: "Waves", count: "Questions" },
            { id: "t9", number: "09", name: "Superposition", count: "Questions" },
            { id: "t10", number: "10", name: "Current of Electricity", count: "Questions" },
            { id: "t11", number: "11", name: "D.C Circuits", count: "Questions" },
            { id: "t12", number: "12", name: "Particle and Nuclear Physics", count: "Questions" }
          ]},
          { id: "p2", name: "Paper 2 - Structured Questions", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "description", description: "Core mechanics and electrical principles structured evaluation.", topics: [
            { id: "t1", number: "01", name: "Physical Quantities and Unit", count: "Questions" },
            { id: "t2", number: "02", name: "Measurement Techniques", count: "Questions" },
            { id: "t3", number: "03", name: "Kinematics", count: "Questions" },
            { id: "t4", number: "04", name: "Dynamics", count: "Questions" },
            { id: "t5", number: "05", name: "Forces, Density and Pressure", count: "Questions" },
            { id: "t6", number: "06", name: "Work, Energy and Power", count: "Questions" },
            { id: "t7", number: "07", name: "Deformation of solids", count: "Questions" },
            { id: "t8", number: "08", name: "Waves", count: "Questions" },
            { id: "t9", number: "09", name: "Superposition", count: "Questions" },
            { id: "t10", number: "10", name: "Current of Electricity", count: "Questions" },
            { id: "t11", number: "11", name: "D.C Circuits", count: "Questions" },
            { id: "t12", number: "12", name: "Particle and Nuclear Physics", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Structured Questions", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "description", description: "Advanced applications including space, medical, and quantum physics.", topics: [
            { id: "t1", number: "01", name: "Motion in a Circle", count: "Questions" },
            { id: "t2", number: "02", name: "Gravitational Fields", count: "Questions" },
            { id: "t3", number: "03", name: "Ideal Gases", count: "Questions" },
            { id: "t4", number: "04", name: "Temperature", count: "Questions" },
            { id: "t5", number: "05", name: "Thermodynamics/Thermal Properties of Materials", count: "Questions" },
            { id: "t6", number: "06", name: "Oscillations", count: "Questions" },
            { id: "t7", number: "07", name: "Electric Fields", count: "Questions" },
            { id: "t8", number: "08", name: "Capacitance", count: "Questions" },
            { id: "t9", number: "09", name: "Magnetic Fields", count: "Questions" },
            { id: "t10", number: "10", name: "Alternating Currents", count: "Questions" },
            { id: "t11", number: "11", name: "Quantum Physics", count: "Questions" },
            { id: "t12", number: "12", name: "Particle and Nuclear Physics", count: "Questions" },
            { id: "t13", number: "13", name: "Medical Physics", count: "Questions" },
            { id: "t14", number: "14", name: "Space Physics", count: "Questions" }
          ]}
        ]
      },
      { 
        id: "al-cs", name: "Computer Science", code: "9618", icon: "terminal", tag: "TOPICAL PAPERS", tagColor: "bg-error-container text-error", resources: "1.5k",
        description: "From algorithm design to artificial intelligence, thoroughly mapped for the CAIE syllabus.",
        components: [
          { id: "p1", name: "Paper 1 - Theory Fundamentals", type: "AS Level", tagColor: "bg-surface-variant text-on-surface-variant", icon: "memory", description: "Fundamentals module is currently being updated.", topics: []},
          { id: "p2", name: "Paper 2 - Fundamental Problem-solving and Programming Skills", type: "AS Level", tagColor: "bg-secondary-fixed text-primary", icon: "code", description: "Core programming and logic formulation.", topics: [
            { id: "t1", number: "01", name: "Algorithm Design and Problem Solving", count: "Questions" },
            { id: "t2", number: "02", name: "Data Types and Structures", count: "Questions" }
          ]},
          { id: "p3", name: "Paper 3 - Advanced Theory", type: "A2 Level", tagColor: "bg-tertiary-fixed text-primary", icon: "dns", description: "Advanced networking, AI, and system software theory.", topics: [
            { id: "t1", number: "01", name: "Data Representation", count: "Questions" },
            { id: "t2", number: "02", name: "Communication and Internet Technologies", count: "Questions" },
            { id: "t3", number: "03", name: "Hardware and Virtual Machines", count: "Questions" },
            { id: "t4", number: "04", name: "System Software", count: "Questions" },
            { id: "t5", number: "05", name: "Security", count: "Questions" },
            { id: "t6", number: "06", name: "Artificial Intelligence", count: "Questions" },
            { id: "t7", number: "07", name: "Computational Thinking and Problem Solving", count: "Questions" },
            { id: "t8", number: "08", name: "Further Programming", count: "Questions" }
          ]},
          { id: "p4", name: "Paper 4 - Practical", type: "A2 Level", tagColor: "bg-surface-variant text-on-surface-variant", icon: "developer_mode", description: "Practical coding modules are currently being updated.", topics: []}
        ]
      }
    ]
  }
};