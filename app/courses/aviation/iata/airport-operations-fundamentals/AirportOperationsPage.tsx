"use client"

import IATACourseTemplate from "@/components/iata-course-template"

const airportOperationsCourse = {
  title: "IATA Airport Operations Fundamentals",
  description:
    "Learn essential principles of airport operations, including terminal management, ground handling, and safety procedures.",
  image: "/images/iata/airport-operations.jpg",
  overview:
    "The IATA Airport Operations Training course is one of the most sought-after certification programs in the UAE. This comprehensive program equips participants with essential knowledge and skills in airport operations, including terminal management, ground handling, and safety procedures. As an IATA Authorized Training Center, SKYWAY Institute delivers this course with the highest standards of quality and industry relevance.",
  recognition:
    "Skyway Institute became an IATA Authorized Training Centre in 2009 and was recognized as one of the Top 10 Performing Centres in the Middle East in 2019. IATA is a global trade association representing the world's airlines, and Skyway Institute has consistently been a Top Performing Authorized IATA Training Centre in the Middle East and Africa for several consecutive years.",
  learningOutcomes: [
    "Understand the history of aviation and the economic role of airports",
    "Identify various airport customers, certification processes, and partners",
    "Gain knowledge of the diverse operational and business functions of airports",
    "Acquire the tools to apply your knowledge and skills in an airport setting",
    "Learn about current issues and challenges facing airports",
    "Explore the future of airport operations and technological advancements",
  ],
  targetAudience: [
    "Newly appointed airport or aviation staff",
    "Travel industry professionals",
    "Individuals new to the industry",
    "Members of the public aspiring to work at airports",
    "Professionals seeking career advancement in airport operations",
  ],
  curriculum: {
    modules: [
      {
        title: "Introduction to Aviation and Airports",
        topics: [
          "History of aviation and airports",
          "Economic role of airports",
          "Airport ownership and management models",
          "Airport certification processes",
          "Key stakeholders and partners",
        ],
      },
      {
        title: "Airport Operations",
        topics: [
          "Terminal operations management",
          "Airside operations",
          "Ground handling procedures",
          "Baggage handling systems",
          "Passenger processing",
          "Security procedures",
        ],
      },
      {
        title: "Airport Support Services",
        topics: [
          "Rescue and firefighting services",
          "Emergency response planning",
          "Wildlife management",
          "Winter operations",
          "Maintenance of airport facilities",
        ],
      },
      {
        title: "Current Issues and Future Trends",
        topics: [
          "Environmental challenges and sustainability",
          "Capacity constraints and solutions",
          "Technological advancements in airport operations",
          "Passenger experience enhancement",
          "Future of airport design and operations",
        ],
      },
    ],
  },
  benefits: [
    "Globally recognized IATA certification enhancing your employability",
    "Comprehensive understanding of airport operations and management",
    "Practical knowledge applicable to real-world airport environments",
    "Networking opportunities with industry professionals",
    "Career advancement in the aviation sector",
    "Access to IATA's global network and resources",
    "Training delivered by certified instructors with industry experience",
    "Flexible learning options to accommodate your schedule",
    "Hands-on training and simulations for practical skill development",
  ],
  examInfo:
    "The course spans two months, with flexible scheduling options available for both weekdays and weekends, accommodating freshers, part-time, and full-time working professionals. During the two months of IATA airport certification training, students will participate in continuous assessment tests, online question practice, and mock exams.",
  materials:
    "The IATA study material/toolkit includes a hard copy of the original textbook. We provide a Learning Management System (LMS) for all our IATA students. Skyway Institute, as an authorized training center for IATA courses, offers students online access keys for exam practice.",
  trainingOptions: [
    {
      type: "Weekday Classes",
      schedule: "Monday to Thursday",
      duration: "2 months (3 hours/day)",
      price: "AED 5,500",
      features: [
        "Morning batch: 10:00 AM - 1:00 PM",
        "Evening batch: 6:30 PM - 9:30 PM",
        "Original IATA textbook and materials",
        "Access to online learning platform",
        "Practice exams and assessments",
        "IATA certification upon completion",
      ],
    },
    {
      type: "Weekend Classes",
      schedule: "Friday and Saturday",
      duration: "2.5 months (6 hours/day)",
      price: "AED 5,500",
      features: [
        "Morning batch: 10:00 AM - 4:00 PM",
        "Original IATA textbook and materials",
        "Access to online learning platform",
        "Practice exams and assessments",
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
        "Original IATA materials for all participants",
        "Dedicated instructor for your team",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I become Airport Operations certified?",
      answer:
        "To become Airport Operations certified, you need to complete the IATA Airport Operations Fundamentals course and pass the final assessment. The certification is globally recognized and demonstrates your knowledge and skills in airport operations.",
    },
    {
      question: "What is an airport operations agent?",
      answer:
        "An airport operations agent is responsible for ensuring the smooth functioning of airport operations, including terminal management, ground handling, and safety procedures. They coordinate with various stakeholders to ensure efficient airport operations.",
    },
    {
      question: "What subjects are covered in airport operations?",
      answer:
        "Airport operations covers a wide range of subjects including terminal operations, airside operations, ground handling, baggage handling, passenger processing, security procedures, emergency response, and future trends in airport management.",
    },
    {
      question: "What are the roles of airport operations?",
      answer:
        "Airport operations roles include terminal managers, airside operations officers, ground handling supervisors, baggage handling managers, passenger service coordinators, and airport security officers. These roles ensure the safe and efficient operation of airports.",
    },
    {
      question: "Is prior experience required for this course?",
      answer:
        "No prior experience is required for the IATA Airport Operations Fundamentals course. It is designed for beginners and those new to the aviation industry, as well as professionals seeking to enhance their knowledge and skills.",
    },
    {
      question: "What career opportunities are available after certification?",
      answer:
        "After certification, you can pursue careers in airport management, terminal operations, ground handling, airline operations, aviation security, and consultancy. The certification enhances your employability in the aviation sector globally.",
    },
  ],
}

export default function AirportOperationsPage() {
  return <IATACourseTemplate course={airportOperationsCourse} />
}
