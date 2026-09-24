// ──────────────────────────────────────────────
// 0ZBIMSTUDIO — Central Data Model
// Only facts explicitly provided by the client.
// ──────────────────────────────────────────────

export const STUDIO_INFO = {
  name: "0ZBIMStudio",
  tagline: "BIM. Architecture. Digital Precision.",
  founderDisplayName: "Arfat",
  founderTitle: "Founder, 0ZBIMStudio",
  email: "0zbimstudio@gmail.com",
  founderImage: "/assets/images/founder.jpeg",
  founderCopy:
    "At the heart of 0ZBIMStudio is a commitment to combining architectural thinking with digital precision. Arfat leads the studio with a focus on structured BIM workflows, accurate modeling, thoughtful documentation, and professional project collaboration.",
  aboutParagraph1:
    "0ZBIMStudio is a BIM and architectural services studio focused on creating accurate, coordinated, and information-rich digital building models. We help transform architectural concepts and technical requirements into structured BIM workflows that support better design decisions, coordination, documentation, and project delivery.",
  aboutParagraph2:
    "Our approach combines architectural understanding, digital modeling, technical documentation, and disciplined coordination to create reliable project information across the design and construction process.",
  contactCopy:
    "Whether you require BIM modeling, architectural documentation, 3D visualization, or project coordination, let's discuss your requirements.",
};

// ── Service Categories ──────────────────────────

export const SERVICE_CATEGORIES = [
  {
    id: "bim",
    number: "01",
    title: "BIM Services",
    summary: "Accurate, coordinated, and information-rich Building Information Models.",
    services: [
      {
        title: "BIM Modeling",
        description:
          "Development of accurate, information-rich Building Information Models tailored to project requirements and levels of detail.",
      },
      {
        title: "Architectural BIM Modeling",
        description:
          "Detailed architectural BIM models covering building elements, spaces, assemblies, and design information.",
      },
      {
        title: "BIM Model Development",
        description:
          "Structured development of BIM models from design information, drawings, references, and project requirements.",
      },
      {
        title: "BIM Coordination",
        description:
          "Coordination of building information and model elements to identify inconsistencies and improve project alignment.",
      },
      {
        title: "BIM Model Review",
        description:
          "Systematic review of BIM models for quality, consistency, completeness, and adherence to project requirements.",
      },
      {
        title: "BIM Documentation",
        description:
          "Generation and organization of drawings and documentation from coordinated BIM models.",
      },
      {
        title: "BIM Conversion",
        description:
          "Conversion and development of existing CAD, PDF, or reference information into structured BIM environments.",
      },
      {
        title: "As-Built BIM Modeling",
        description:
          "Development of digital as-built models based on available project documentation and site information.",
      },
    ],
  },
  {
    id: "architectural",
    number: "02",
    title: "Architectural Services",
    summary: "Precise architectural drafting, documentation, and design development support.",
    services: [
      {
        title: "Architectural Design Support",
        description:
          "Digital support for architectural design development, documentation, and project coordination.",
      },
      {
        title: "Architectural Drafting",
        description:
          "Accurate architectural drafting and documentation for design and construction workflows.",
      },
      {
        title: "Construction Documentation",
        description:
          "Preparation and organization of clear architectural documentation to support construction and coordination.",
      },
      {
        title: "Floor Plans & Elevations",
        description:
          "Detailed development of floor plans, elevations, sections, and related architectural drawings.",
      },
      {
        title: "Architectural Detailing",
        description:
          "Detailed representation of architectural components and assemblies for improved design communication.",
      },
      {
        title: "Design Development",
        description:
          "Translation of design concepts into coordinated digital information and detailed project documentation.",
      },
    ],
  },
  {
    id: "visualization",
    number: "03",
    title: "3D & Visualization",
    summary: "Three-dimensional digital models and architectural visual presentations.",
    services: [
      {
        title: "3D Architectural Modeling",
        description:
          "Creation of detailed three-dimensional digital representations of buildings and architectural environments.",
      },
      {
        title: "Interior 3D Modeling",
        description:
          "Detailed digital modeling of interior spaces, layouts, components, and architectural elements.",
      },
      {
        title: "Exterior 3D Modeling",
        description:
          "Three-dimensional development of building exteriors, façades, site elements, and architectural features.",
      },
      {
        title: "3D Visualization",
        description:
          "Clear and engaging visual representation of architectural concepts and spaces.",
      },
      {
        title: "Architectural Visualization",
        description:
          "Professional visual representation of architectural designs to communicate spatial intent and design quality.",
      },
    ],
  },
  {
    id: "coordination",
    number: "04",
    title: "Coordination & Digital Construction",
    summary: "Disciplined coordination, clash resolution, and digital construction support.",
    services: [
      {
        title: "Design Coordination",
        description:
          "Support for coordinating architectural information across disciplines and project stages.",
      },
      {
        title: "Clash Detection Support",
        description:
          "Identification and documentation of potential conflicts within coordinated project models.",
      },
      {
        title: "Model-Based Documentation",
        description:
          "Extraction and organization of project documentation from structured BIM models.",
      },
      {
        title: "Digital Construction Support",
        description:
          "Digital model and documentation support for more informed construction workflows.",
      },
      {
        title: "Project Model Management",
        description:
          "Structured organization and maintenance of project model information according to project requirements.",
      },
    ],
  },
];

// ── BIM Workflow ────────────────────────────────

export const WORKFLOW_STEPS = [
  {
    number: "01",
    name: "Understand",
    description:
      "Review project requirements, references, drawings, and design intent to establish scope and direction.",
  },
  {
    number: "02",
    name: "Develop",
    description:
      "Build accurate architectural and BIM information structured to project specifications.",
  },
  {
    number: "03",
    name: "Coordinate",
    description:
      "Review model information and coordinate project elements across disciplines.",
  },
  {
    number: "04",
    name: "Document",
    description:
      "Generate structured drawings, schedules, and project documentation from the model.",
  },
  {
    number: "05",
    name: "Refine",
    description:
      "Review, validate, and improve model quality against project requirements.",
  },
  {
    number: "06",
    name: "Deliver",
    description:
      "Provide organized digital project information in agreed formats and handover structure.",
  },
];

// ── Core Principles ─────────────────────────────

export const PRINCIPLES = [
  {
    number: "01",
    title: "Precision",
    description:
      "Detailed digital modeling with attention to project requirements and architectural intent.",
  },
  {
    number: "02",
    title: "Coordination",
    description:
      "Structured BIM workflows designed to improve communication and reduce information gaps.",
  },
  {
    number: "03",
    title: "Clarity",
    description:
      "Organized models and documentation that make complex project information easier to understand.",
  },
  {
    number: "04",
    title: "Efficiency",
    description:
      "Digital workflows designed to support better project organization and delivery.",
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "Professional coordination with architects, engineers, contractors, and project stakeholders.",
  },
  {
    number: "06",
    title: "Quality",
    description:
      "A disciplined approach to model development, review, documentation, and delivery.",
  },
];

// ── Contact Form Project Types ──────────────────

export const PROJECT_TYPES = [
  "BIM Modeling & Coordination",
  "Architectural Drafting & Documentation",
  "3D Modeling & Visualization",
  "Design Coordination & Clash Detection",
  "Construction Documentation",
  "Other",
];
