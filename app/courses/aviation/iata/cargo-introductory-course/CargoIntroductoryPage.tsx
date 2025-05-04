"use client"

import IATACourseTemplate from "@/components/iata-course-template"

const cargoIntroductoryCourse = {
  title: "IATA Cargo Introductory Course",
  description:
    "Introduction to air cargo operations, documentation, and handling procedures for those entering the cargo sector.",
  image: "/placeholder.svg?height=600&width=800",
  overview:
    "The IATA Cargo Introductory Course provides a comprehensive foundation in air cargo operations, documentation, and handling procedures. This course is ideal for individuals entering the cargo sector or professionals looking to enhance their knowledge of air cargo operations. As an IATA Authorized Training Center, SKYWAY Institute delivers this course with the highest standards of quality and industry relevance.",
  recognition:
    "Skyway Institute is an IATA Authorized Training Centre, recognized for its excellence in aviation training. Our cargo training programs are developed in accordance with IATA standards and are designed to meet the requirements of the global air cargo industry.",
  learningOutcomes: [
    "Understand the fundamentals of air cargo operations and industry structure",
    "Learn essential cargo documentation and procedures",
    "Master cargo handling equipment and techniques",
    "Gain knowledge of dangerous goods regulations and compliance",
    "Understand cargo security requirements and protocols",
    "Develop skills in cargo acceptance, loading, and delivery processes",
  ],
  targetAudience: [
    "Entry-level cargo staff",
    "Freight forwarders and logistics professionals",
    "Airline cargo personnel",
    "Ground handling agents",
    "Supply chain professionals",
    "Individuals seeking a career in air cargo",
  ],
  curriculum: {
    modules: [
      {
        title: "Introduction to Air Cargo Industry",
        topics: [
          "Global air cargo market overview",
          "Key players in the air cargo supply chain",
          "Types of cargo aircraft and capacity",
          "Air cargo industry trends and challenges",
          "Regulatory framework for air cargo",
        ],
      },
      {
        title: "Cargo Documentation and Procedures",
        topics: [
          "Air Waybill (AWB) completion and processing",
          "Cargo manifests and flight documentation",
          "Customs documentation requirements",
          "Electronic documentation systems",
          "Special handling codes and procedures",
        ],
      },
      {
        title: "Cargo Handling Operations",
        topics: [
          "Cargo acceptance procedures",
          "Cargo build-up and break-down",
          "ULD management and control",
          "Cargo loading principles and weight distribution",
          "Special cargo handling (perishables, valuables, live animals)",
        ],
      },
      {
        title: "Dangerous Goods and Security",
        topics: [
          "IATA Dangerous Goods Regulations overview",
          "Classification of dangerous goods",
          "Packaging, marking, and labeling requirements",
          "Cargo security screening methods",
          "Known shipper programs and secure supply chain",
        ],
      },
    ],
  },
  benefits: [
    "Globally recognized IATA certification enhancing your employability",
    "Comprehensive understanding of air cargo operations",
    "Practical knowledge applicable to real-world cargo environments",
    "Networking opportunities with industry professionals",
    "Career advancement in the air cargo sector",
    "Access to IATA's global network and resources",
    "Training delivered by certified instructors with industry experience",
    "Flexible learning options to accommodate your schedule",
    "Hands-on training with cargo documentation and systems",
  ],
  trainingOptions: [
    {
      type: "Weekday Classes",
      schedule: "Monday to Wednesday",
      duration: "3 weeks (4 hours/day)",
      price: "AED 3,800",
      features: [
        "Morning batch: 9:00 AM - 1:00 PM",
        "Evening batch: 5:30 PM - 9:30 PM",
        "IATA certified curriculum",
        "Practical documentation exercises",
        "Cargo handling demonstrations",
        "IATA certification upon completion",
      ],
    },
    {
      type: "Weekend Classes",
      schedule: "Friday and Saturday",
      duration: "4 weeks (6 hours/day)",
      price: "AED 3,800",
      features: [
        "Timing: 10:00 AM - 4:00 PM",
        "IATA certified curriculum",
        "Practical documentation exercises",
        "Cargo handling demonstrations",
        "IATA certification upon completion",
        "Ideal for working professionals",
      ],
    },
    {
      type: "Corporate Training",
      schedule: "Customized",
      duration: "Flexible",
      price: "Contact for Quote",
      features: [
        "Tailored to your organization's needs",
        "On-site training available",
        "Customized schedule and duration",
        "Group discounts available",
        "IATA materials for all participants",
        "Dedicated instructor for your team",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the air cargo industry?",
      answer:
        "The air cargo industry involves the transportation of goods by air. It includes airlines, freight forwarders, ground handlers, and other stakeholders involved in moving cargo from origin to destination using aircraft.",
    },
    {
      question: "What career opportunities are available in air cargo?",
      answer:
        "Career opportunities in air cargo include cargo agent, cargo handler, dangerous goods specialist, cargo sales representative, cargo operations manager, and supply chain coordinator, among others.",
    },
    {
      question: "What is an Air Waybill (AWB)?",
      answer:
        "An Air Waybill (AWB) is the most important document in air cargo. It serves as a contract of carriage between the shipper and the carrier, a receipt for goods, and contains information about the shipment including origin, destination, and contents.",
    },
    {
      question: "What are ULDs in air cargo?",
      answer:
        "Unit Load Devices (ULDs) are containers or pallets used to load cargo onto aircraft. They come in various types and sizes designed to fit different aircraft and cargo types, helping to optimize space and streamline loading/unloading processes.",
    },
    {
      question: "How is dangerous goods handling regulated in air cargo?",
      answer:
        "Dangerous goods handling in air cargo is regulated by the IATA Dangerous Goods Regulations (DGR), which is based on the International Civil Aviation Organization (ICAO) Technical Instructions. These regulations cover classification, packaging, documentation, and handling of dangerous goods.",
    },
    {
      question: "What is the difference between air freight and air cargo?",
      answer:
        "The terms air freight and air cargo are often used interchangeably. However, air cargo is a broader term that includes all goods transported by air, while air freight specifically refers to the commercial transportation of goods by air for which a fee is charged.",
    },
  ],
}

export default function CargoIntroductoryPage() {
  return <IATACourseTemplate course={cargoIntroductoryCourse} />
}
