import { iataCourseData } from "@/app/courses/aviation/iata/course-data"
import type { CourseData } from "./course-types"

// Map IATA course data to our CourseData structure
const mappedIataCourses: CourseData[] = iataCourseData.map((course) => ({
  ...course,
  category: "Aviation",
  subcategory: "IATA",
  level: course.level || "Professional",
  duration: course.duration || "4-5 days",
  curriculum: course.curriculum || {
    modules: [
      {
        title: "Introduction",
        topics: ["Overview of the course", "Industry context", "Key concepts"],
      },
      {
        title: "Core Modules",
        topics: ["Technical knowledge", "Practical applications", "Case studies"],
      },
      {
        title: "Advanced Topics",
        topics: ["Specialized techniques", "Industry best practices", "Future trends"],
      },
    ],
  },
  learningOutcomes: course.features ||
    course.learningOutcomes || [
      "Understand key industry concepts",
      "Apply practical skills in real-world scenarios",
      "Develop professional competence",
    ],
  targetAudience: course.targetAudience || ["Aviation professionals", "Industry newcomers", "Career changers"],
  benefits: course.benefits || [
    "Industry-recognized certification",
    "Practical skills development",
    "Career advancement opportunities",
  ],
  trainingOptions: course.trainingOptions || [
    {
      type: "Regular Program",
      schedule: "Weekdays",
      duration: "4-5 days",
      features: [
        "Expert instruction",
        "Comprehensive materials",
        "Hands-on exercises",
        "Certification upon completion",
      ],
    },
    {
      type: "Weekend Program",
      schedule: "Weekends",
      duration: "3 weekends",
      features: [
        "Flexible schedule",
        "Same curriculum as regular program",
        "Ideal for working professionals",
        "Certification upon completion",
      ],
    },
  ],
  faqs: course.faqs || [
    {
      question: "Is this course recognized by the industry?",
      answer: "Yes, this is an IATA-certified course recognized worldwide.",
    },
    {
      question: "What are the prerequisites?",
      answer: "There are no formal prerequisites, though basic knowledge of the aviation industry is helpful.",
    },
  ],
}))

// Add a sample cybersecurity course for testing
const cybersecurityCourses: CourseData[] = [
  {
    id: "certified-ethical-hacker",
    title: "Certified Ethical Hacker (CEH)",
    description: "Learn to think like a hacker and protect systems from cyber threats",
    image: "/placeholder.svg?height=600&width=800",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "5 days",
    featured: true,
    overview:
      "The Certified Ethical Hacker (CEH) course is designed to help you master advanced attack techniques and methodologies used by hackers. This comprehensive ethical hacking course will prepare you to assess the security of computer systems by looking for weaknesses and vulnerabilities using the same knowledge and tools as malicious hackers.",
    recognition: "This course is recognized by EC-Council and prepares you for the CEH certification exam.",
    learningOutcomes: [
      "Understand ethical hacking methodology",
      "Master network scanning techniques",
      "Learn system hacking and penetration testing",
      "Develop skills in web application hacking",
      "Understand malware threats and countermeasures",
      "Apply social engineering techniques ethically",
    ],
    targetAudience: [
      "Security professionals",
      "Site administrators",
      "Network administrators",
      "Security officers",
      "IT professionals looking to enhance their security skills",
    ],
    curriculum: {
      modules: [
        {
          title: "Introduction to Ethical Hacking",
          topics: [
            "Hacking concepts and methodology",
            "Ethical hacking scope and limitations",
            "Information security controls",
            "Penetration testing process",
          ],
        },
        {
          title: "Footprinting and Reconnaissance",
          topics: [
            "Footprinting methodologies",
            "OSINT techniques",
            "Website and DNS reconnaissance",
            "Social media intelligence gathering",
          ],
        },
        {
          title: "Scanning Networks",
          topics: [
            "Network scanning techniques",
            "TCP/IP port scanning",
            "Vulnerability scanning",
            "Banner grabbing and OS fingerprinting",
          ],
        },
        {
          title: "System Hacking",
          topics: ["Password cracking techniques", "Privilege escalation", "Maintaining access", "Covering tracks"],
        },
      ],
    },
    benefits: [
      "Globally recognized certification",
      "Hands-on lab experience",
      "Real-world security scenarios",
      "Career advancement opportunities",
      "Comprehensive understanding of security vulnerabilities",
      "Practical skills applicable immediately",
    ],
    trainingOptions: [
      {
        type: "Classroom Training",
        schedule: "Weekdays, 9:00 AM - 5:00 PM",
        duration: "5 days (40 hours)",
        features: ["Face-to-face instruction", "Hands-on lab exercises", "Real-world scenarios", "Exam preparation"],
      },
      {
        type: "Virtual Classroom",
        schedule: "Weekdays, 9:00 AM - 5:00 PM",
        duration: "5 days (40 hours)",
        features: [
          "Live online instruction",
          "Virtual lab environment",
          "Interactive sessions",
          "Digital learning materials",
        ],
      },
      {
        type: "Self-Paced",
        schedule: "Flexible",
        duration: "3 months access",
        features: [
          "Study at your own pace",
          "24/7 access to materials",
          "Online lab environment",
          "Email support from instructors",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need programming experience for this course?",
        answer:
          "While programming experience is helpful, it's not required. Basic understanding of networking concepts and operating systems is more important.",
      },
      {
        question: "Is the certification exam included in the course fee?",
        answer:
          "No, the certification exam voucher is not included in the standard course fee. It can be purchased separately or as part of a package.",
      },
      {
        question: "How long is the CEH certification valid?",
        answer:
          "The CEH certification is valid for 3 years. After that, you'll need to earn EC-Council Continuing Education Credits or retake the exam to maintain certification.",
      },
      {
        question: "What is the passing score for the CEH exam?",
        answer: "The passing score for the CEH exam is 70% out of 125 questions. The exam duration is 4 hours.",
      },
    ],
    examInfo:
      "The CEH exam consists of 125 multiple-choice questions to be completed in 4 hours. The passing score is 70%. The exam covers all aspects of ethical hacking, from reconnaissance to maintaining access and covering tracks.",
    materials:
      "Course materials include the official EC-Council courseware, practice labs, and additional resources to help you prepare for the certification exam.",
  },
]

// Combine all course data
const allCourses: CourseData[] = [...mappedIataCourses, ...cybersecurityCourses]

export async function getAllCourses(): Promise<CourseData[]> {
  return allCourses
}

export async function getCoursesByCategory(category: string): Promise<CourseData[]> {
  const courses = allCourses.filter((course) => course.category.toLowerCase() === category.toLowerCase())
  if (!courses.length) {
    console.warn(`No courses found for category: ${category}`)
  }
  return courses
}

export async function getCourseBySlug(category: string, slug: string): Promise<CourseData | undefined> {
  // Try to find by ID first
  let course = allCourses.find(
    (course) => course.category.toLowerCase() === category.toLowerCase() && course.id === slug,
  )

  // If not found, try to find by title slug
  if (!course) {
    course = allCourses.find(
      (course) =>
        course.category.toLowerCase() === category.toLowerCase() &&
        course.title.toLowerCase().replace(/\s+/g, "-") === slug,
    )
  }

  if (!course) {
    console.warn(`Course not found with category: ${category} and slug: ${slug}`)
  }

  return course
}

export async function getFeaturedCourses(limit = 6): Promise<CourseData[]> {
  // First try to get courses explicitly marked as featured
  let featured = allCourses.filter((course) => course.featured)

  // If not enough, add some popular courses
  if (featured.length < limit) {
    const popular = allCourses.filter((course) => !course.featured).slice(0, limit - featured.length)

    featured = [...featured, ...popular]
  }

  return featured.slice(0, limit)
}
