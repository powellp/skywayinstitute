"use client"

import IATACourseTemplate from "@/components/iata-course-template"

const cabinCrewCourse = {
  title: "IATA Airline Cabin Crew Training",
  description:
    "Comprehensive training for aspiring cabin crew members covering safety procedures, customer service, and emergency management.",
  image: "/images/iata/cabin-crew.jpg",
  overview:
    "The IATA Airline Cabin Crew Training program is designed to prepare you for a successful career as a cabin crew member. This comprehensive course covers all essential aspects of cabin crew duties, from safety procedures and emergency management to customer service excellence and grooming standards. As an IATA Authorized Training Center, SKYWAY Institute delivers this course with the highest standards of quality and industry relevance.",
  recognition:
    "Skyway Institute is an IATA Authorized Training Centre, recognized for its excellence in aviation training. Our cabin crew training program is developed in accordance with IATA standards and is designed to meet the requirements of international airlines.",
  learningOutcomes: [
    "Master cabin safety procedures and equipment operation",
    "Develop exceptional customer service skills for diverse passenger needs",
    "Learn emergency response protocols and crisis management",
    "Understand passenger handling techniques for various situations",
    "Acquire knowledge of aviation regulations relevant to cabin crew",
    "Perfect grooming and presentation standards required by airlines",
  ],
  targetAudience: [
    "Aspiring cabin crew members",
    "Individuals looking to start a career in aviation",
    "Professionals transitioning to the airline industry",
    "Current cabin crew seeking IATA certification",
    "Travel and tourism graduates",
  ],
  curriculum: {
    modules: [
      {
        title: "Introduction to Aviation and Cabin Crew Role",
        topics: [
          "History of aviation and cabin crew profession",
          "Airline organizational structure",
          "Cabin crew roles and responsibilities",
          "Aviation regulations and compliance",
          "Airline terminology and codes",
        ],
      },
      {
        title: "Safety and Emergency Procedures",
        topics: [
          "Aircraft safety equipment and usage",
          "Emergency evacuation procedures",
          "Fire fighting techniques",
          "First aid and medical emergencies",
          "Decompression and oxygen administration",
          "Ditching and water survival",
        ],
      },
      {
        title: "Customer Service Excellence",
        topics: [
          "Passenger psychology and behavior management",
          "Communication skills and conflict resolution",
          "Special passenger handling (children, elderly, VIPs)",
          "Cultural sensitivity and diversity",
          "Complaint handling and service recovery",
        ],
      },
      {
        title: "Professional Standards and Career Development",
        topics: [
          "Grooming and uniform standards",
          "Health and wellbeing for cabin crew",
          "Time management and fatigue control",
          "Interview preparation and CV building",
          "Career progression in aviation",
        ],
      },
    ],
  },
  benefits: [
    "Globally recognized IATA certification enhancing your employability",
    "Practical training from experienced cabin crew instructors",
    "Mock interview sessions with airline industry experts",
    "Hands-on training with actual aircraft equipment",
    "Personalized grooming and image consultation",
    "Networking opportunities with airline recruiters",
    "Career counseling and placement assistance",
    "Access to IATA's global network and resources",
    "Confidence building through simulated flight scenarios",
  ],
  trainingOptions: [
    {
      type: "Regular Program",
      schedule: "Monday to Thursday",
      duration: "4 weeks (4 hours/day)",
      price: "AED 4,500",
      features: [
        "Morning batch: 9:00 AM - 1:00 PM",
        "Evening batch: 5:30 PM - 9:30 PM",
        "IATA certified curriculum",
        "Practical training sessions",
        "Mock interviews and assessments",
        "Grooming workshop included",
      ],
    },
    {
      type: "Weekend Program",
      schedule: "Friday and Saturday",
      duration: "6 weeks (8 hours/day)",
      price: "AED 4,500",
      features: [
        "Timing: 9:00 AM - 5:00 PM",
        "IATA certified curriculum",
        "Practical training sessions",
        "Mock interviews and assessments",
        "Grooming workshop included",
        "Ideal for working professionals",
      ],
    },
    {
      type: "Intensive Program",
      schedule: "Sunday to Thursday",
      duration: "2 weeks (8 hours/day)",
      price: "AED 5,200",
      features: [
        "Timing: 9:00 AM - 5:00 PM",
        "Accelerated learning program",
        "Extended practical sessions",
        "One-on-one coaching",
        "Priority placement assistance",
        "Premium grooming workshop",
      ],
    },
  ],
  faqs: [
    {
      question: "What are the height requirements for cabin crew?",
      answer:
        "Height requirements vary by airline, but generally, cabin crew should be between 157-185 cm (5'2\" - 6'1\") with a reach of at least 212 cm (6'11\") while standing on tiptoes. This is to ensure you can reach emergency equipment in the overhead compartments.",
    },
    {
      question: "Do I need to speak multiple languages to become cabin crew?",
      answer:
        "While fluency in English is mandatory, speaking additional languages is a significant advantage. Many international airlines prefer multilingual candidates, especially for routes to countries where those languages are spoken.",
    },
    {
      question: "What is the age requirement for cabin crew?",
      answer:
        "Most airlines require cabin crew to be at least 21 years old. There is typically no upper age limit as long as you meet the physical requirements and can pass the medical assessments.",
    },
    {
      question: "Can I become cabin crew if I wear glasses or contact lenses?",
      answer:
        "Yes, you can become cabin crew if you wear glasses or contact lenses. Your vision should be correctable to 20/20, and you should carry a spare pair of glasses or lenses on duty.",
    },
    {
      question: "How long does it take to become a cabin crew member after completing the course?",
      answer:
        "After completing the course, the hiring process typically takes 1-3 months, depending on the airline's recruitment schedule. This includes applications, interviews, assessments, and pre-employment checks.",
    },
    {
      question: "What career progression opportunities exist for cabin crew?",
      answer:
        "Cabin crew can progress to senior cabin crew, purser, cabin service director, cabin crew instructor, recruitment officer, or move to ground operations, training departments, or management roles within the airline.",
    },
  ],
}

export default function AirlineCabinCrewPage() {
  return <IATACourseTemplate course={cabinCrewCourse} />
}
