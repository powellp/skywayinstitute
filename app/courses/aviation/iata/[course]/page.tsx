import type { Metadata } from "next"
import { iataCourseData } from "../course-data"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Calendar, Clock } from "lucide-react"

// Map of client page course IDs to course-data.ts IDs or templates
const courseMapping: Record<string, any> = {
  // Direct mappings to existing courses in iataCourseData
  "passenger-ground-services": { dataId: "passenger-ground-services" },
  "dangerous-goods-regulations": { dataId: "dangerous-goods-regulations" },
  "air-transport-fundamentals": { dataId: "air-transport-fundamentals" },
  "aviation-security-awareness": { dataId: "aviation-security-awareness" },
  "travel-and-tourism": { dataId: "travel-and-tourism" },
  "airline-customer-service": { dataId: "airline-customer-service" },
  "airport-ramp-services": { dataId: "airport-ramp-services" },

  // Special cases that need custom handling
  "airport-operations-fundamentals": {
    dataId: "airport-operations",
    title: "IATA Airport Operations Fundamentals",
  },

  // For courses not in course-data.ts, provide templates
  "airline-cabin-crew-training": {
    template: {
      id: "airline-cabin-crew-training",
      title: "IATA Airline Cabin Crew Training",
      description:
        "Comprehensive training for aspiring cabin crew members covering safety procedures, customer service, and emergency management.",
      image: "/images/iata/cabin-crew.jpg",
      overview:
        "The IATA Airline Cabin Crew Training course provides comprehensive training for aspiring cabin crew members. This course covers essential aspects of cabin service, safety procedures, and emergency management. As an IATA Authorized Training Center, SKYWAY Institute delivers this course with expert instructors and practical applications to prepare you for a successful career in the aviation industry.",
      recognition:
        "SKYWAY Institute is an IATA Authorized Training Centre, recognized for its excellence in aviation training. Our cabin crew training program is developed in accordance with IATA standards and is designed to meet the requirements of airlines worldwide.",
      learningOutcomes: [
        "Master cabin safety procedures and equipment",
        "Develop excellent customer service skills",
        "Learn emergency response protocols",
        "Understand passenger handling techniques",
        "Apply grooming and presentation standards",
        "Gain knowledge of airline operations and terminology",
      ],
      targetAudience: [
        "Aspiring cabin crew members",
        "Current airline employees seeking career advancement",
        "Customer service professionals transitioning to aviation",
        "Travel and tourism graduates",
        "Individuals seeking a career in the airline industry",
      ],
      curriculum: {
        modules: [
          {
            title: "Introduction to Aviation and Cabin Crew Role",
            topics: [
              "Aviation industry overview",
              "Cabin crew responsibilities and duties",
              "Airline organizational structure",
              "Industry regulations and standards",
              "Professional image and grooming",
            ],
          },
          {
            title: "Cabin Safety and Emergency Procedures",
            topics: [
              "Aircraft safety equipment",
              "Emergency evacuation procedures",
              "Firefighting techniques",
              "First aid and medical emergencies",
              "Ditching and survival techniques",
              "Security procedures and threat management",
            ],
          },
          {
            title: "Passenger Service Excellence",
            topics: [
              "Customer service principles",
              "Passenger boarding and deplaning",
              "In-flight service procedures",
              "Special passenger handling",
              "Cultural awareness and sensitivity",
              "Conflict management and resolution",
            ],
          },
          {
            title: "Practical Skills and Simulations",
            topics: [
              "Service delivery techniques",
              "Announcement and communication skills",
              "Emergency simulation exercises",
              "Teamwork and crew resource management",
              "Problem-solving in cabin scenarios",
              "Mock interview preparation",
            ],
          },
        ],
      },
      benefits: [
        "Globally recognized IATA certification enhancing your employability",
        "Practical training in cabin service procedures",
        "Customer service skills development",
        "Emergency response training",
        "Career advancement in the airline industry",
        "Access to IATA's global network and resources",
        "Training delivered by certified instructors with industry experience",
        "Interview preparation and career guidance",
      ],
      trainingOptions: [
        {
          type: "Regular Program",
          schedule: "Sunday to Wednesday",
          duration: "4 weeks (3 hours/day)",
          features: [
            "Morning batch: 9:00 AM - 12:00 PM",
            "Evening batch: 6:00 PM - 9:00 PM",
            "IATA certified curriculum",
            "Practical service training",
            "Emergency procedure simulations",
            "IATA certification upon completion",
          ],
        },
        {
          type: "Weekend Program",
          schedule: "Friday and Saturday",
          duration: "6 weeks (6 hours/day)",
          features: [
            "Timing: 10:00 AM - 4:00 PM",
            "IATA certified curriculum",
            "Practical service training",
            "Emergency procedure simulations",
            "IATA certification upon completion",
            "Ideal for working professionals",
          ],
        },
        {
          type: "Intensive Program",
          schedule: "Sunday to Thursday",
          duration: "2 weeks (6 hours/day)",
          features: [
            "Timing: 9:00 AM - 3:00 PM",
            "IATA certified curriculum",
            "Practical service training",
            "Emergency procedure simulations",
            "IATA certification upon completion",
            "Fast-track option for quick career entry",
          ],
        },
      ],
      faqs: [
        {
          question: "What are the physical requirements for cabin crew?",
          answer:
            "Airlines typically require cabin crew to be at least 21 years old, have a minimum height of 5'2\" (157 cm), be able to reach overhead compartments (usually 212 cm reach), have good vision (corrected is acceptable), and be physically fit to perform emergency duties. Weight should be proportionate to height.",
        },
        {
          question: "Do I need to speak multiple languages to become cabin crew?",
          answer:
            "While fluency in English is mandatory, speaking additional languages is a significant advantage. Many airlines prioritize candidates who speak the language of their hub country or major destinations. Languages like Arabic, Mandarin, Spanish, French, and German are particularly valuable.",
        },
        {
          question: "What career progression opportunities exist for cabin crew?",
          answer:
            "Cabin crew can progress to senior cabin crew, purser, cabin service supervisor, cabin service trainer, safety trainer, recruitment officer, or move into ground operations, customer service management, or other airline departments. The experience also transfers well to hospitality, tourism, and customer service roles.",
        },
        {
          question: "How does this course prepare me for airline interviews?",
          answer:
            "The course includes interview preparation modules covering common questions, group exercises, assessment day formats, and personal presentation. You'll participate in mock interviews, receive feedback on your performance, and learn how to highlight your strengths and address potential concerns.",
        },
        {
          question: "What is the difference between IATA certification and airline-specific training?",
          answer:
            "IATA certification provides industry-standard knowledge and skills recognized globally, giving you a competitive advantage in the hiring process. Once hired by an airline, you'll undergo additional airline-specific training focused on their particular aircraft, procedures, and service standards.",
        },
        {
          question: "Can this course help me if I'm already working as cabin crew?",
          answer:
            "Yes, this course is valuable for current cabin crew seeking to enhance their skills, prepare for advancement, or transition to international airlines. The IATA certification adds credibility to your resume and the comprehensive curriculum may fill knowledge gaps from airline-specific training.",
        },
      ],
      examInfo:
        "The course assessment includes practical demonstrations, role-play evaluations, and a written examination covering all aspects of cabin crew duties. A minimum score of 70% is required to pass. Successful candidates receive an IATA certificate recognized throughout the aviation industry.",
      materials:
        "Participants receive comprehensive course materials including the IATA Cabin Crew manual, safety procedure guides, service standard references, and interview preparation resources. These materials serve as valuable references during the course and in your professional career.",
    },
  },
  "airport-ramp-service": {
    dataId: "airport-ramp-services",
  },
  "cargo-introductory-course": {
    template: {
      id: "cargo-introductory-course",
      title: "IATA Cargo Introductory Course",
      description:
        "Introduction to air cargo operations, documentation, and handling procedures for those entering the cargo sector.",
      image: "/placeholder.svg?height=600&width=800",
      overview:
        "The IATA Cargo Introductory Course provides a comprehensive introduction to air cargo operations. This course covers essential aspects of cargo handling, documentation, and regulatory requirements. As an IATA Authorized Training Center, SKYWAY Institute delivers this course with expert instructors and practical applications to prepare you for a successful career in the air cargo industry.",
      recognition:
        "SKYWAY Institute is an IATA Authorized Training Centre, recognized for its excellence in aviation training. Our cargo training programs are developed in accordance with IATA standards and are designed to meet the requirements of airlines, freight forwarders, and cargo handling companies worldwide.",
      learningOutcomes: [
        "Understand air cargo industry structure and stakeholders",
        "Learn cargo documentation and procedures",
        "Develop knowledge of cargo handling equipment and techniques",
        "Understand dangerous goods regulations basics",
        "Learn cargo security requirements",
        "Gain insights into special cargo handling procedures",
      ],
      targetAudience: [
        "Entry-level cargo staff",
        "Freight forwarder employees",
        "Airline cargo personnel",
        "Logistics professionals transitioning to air cargo",
        "Supply chain management students",
        "Ground handling staff working with cargo",
      ],
      curriculum: {
        modules: [
          {
            title: "Introduction to Air Cargo",
            topics: [
              "Air cargo industry overview",
              "Key stakeholders and their roles",
              "Types of cargo carriers and operations",
              "Air cargo supply chain",
              "Industry trends and challenges",
            ],
          },
          {
            title: "Cargo Documentation and Procedures",
            topics: [
              "Air Waybill completion and processing",
              "Cargo manifests and flight documentation",
              "Customs documentation requirements",
              "Electronic documentation systems",
              "Cargo rating principles",
            ],
          },
          {
            title: "Cargo Handling Operations",
            topics: [
              "Cargo acceptance procedures",
              "Cargo build-up and break-down",
              "ULD handling and control",
              "Warehouse operations",
              "Cargo loading and securing",
            ],
          },
          {
            title: "Cargo Regulations and Security",
            topics: [
              "Dangerous goods awareness",
              "Security screening procedures",
              "Known shipper programs",
              "Cargo security regulations",
              "Special cargo handling requirements",
            ],
          },
        ],
      },
      benefits: [
        "Globally recognized IATA certification enhancing your employability",
        "Practical knowledge of cargo documentation and procedures",
        "Understanding of cargo handling operations",
        "Awareness of cargo security requirements",
        "Career advancement opportunities in the air cargo sector",
        "Networking with industry professionals",
        "Training delivered by certified instructors with industry experience",
        "Foundation for specialized cargo courses",
      ],
      trainingOptions: [
        {
          type: "Regular Program",
          schedule: "Sunday to Tuesday",
          duration: "3 weeks (3 hours/day)",
          features: [
            "Morning batch: 9:00 AM - 12:00 PM",
            "Evening batch: 6:00 PM - 9:00 PM",
            "IATA certified curriculum",
            "Practical documentation exercises",
            "Case studies and simulations",
            "IATA certification upon completion",
          ],
        },
        {
          type: "Weekend Program",
          schedule: "Friday and Saturday",
          duration: "4 weeks (6 hours/day)",
          features: [
            "Timing: 10:00 AM - 4:00 PM",
            "IATA certified curriculum",
            "Practical documentation exercises",
            "Case studies and simulations",
            "IATA certification upon completion",
            "Ideal for working professionals",
          ],
        },
        {
          type: "Corporate Training",
          schedule: "Customized",
          duration: "Flexible",
          features: [
            "Tailored to your organization's needs",
            "On-site training available",
            "Customized schedule and duration",
            "Group discounts available",
            "IATA materials for all participants",
            "Focus on specific cargo operations relevant to your organization",
          ],
        },
      ],
      faqs: [
        {
          question: "Do I need prior experience in cargo to take this course?",
          answer:
            "No prior experience is required. This course is designed as an entry-level program that provides a comprehensive introduction to air cargo operations. It's suitable for beginners and those with limited exposure to the air cargo industry.",
        },
        {
          question: "What career opportunities are available after completing this course?",
          answer:
            "After completing this course, you can pursue careers in cargo acceptance, cargo documentation, warehouse operations, cargo sales, cargo customer service, and various entry-level positions with airlines, freight forwarders, and cargo handling companies.",
        },
        {
          question: "Does this course cover dangerous goods regulations in detail?",
          answer:
            "This course provides an awareness-level introduction to dangerous goods regulations. For in-depth knowledge and certification in dangerous goods handling, we recommend the specialized IATA Dangerous Goods Regulations (DGR) course after completing this introductory program.",
        },
        {
          question: "Will I learn how to complete an Air Waybill?",
          answer:
            "Yes, the course includes detailed instruction on completing Air Waybills correctly, including all required fields, special handling codes, rating information, and other essential elements. You'll get practical exercises to develop this critical skill.",
        },
        {
          question: "How is this course different from the IATA Dangerous Goods Regulations course?",
          answer:
            "The Cargo Introductory Course provides a broad overview of all aspects of air cargo operations, with dangerous goods awareness being just one component. The DGR course is specialized, focusing exclusively and in-depth on the regulations for transporting dangerous goods by air.",
        },
        {
          question: "Does the course cover e-freight and digital cargo documentation?",
          answer:
            "Yes, the course includes an introduction to electronic documentation systems, e-freight initiatives, and digital transformation in the air cargo industry. You'll learn about both traditional paper-based processes and modern electronic alternatives.",
        },
      ],
      examInfo:
        "The course assessment includes practical exercises, case studies, and a written examination covering all aspects of air cargo operations. A minimum score of 70% is required to pass. Successful candidates receive an IATA certificate recognized throughout the aviation industry.",
      materials:
        "Participants receive comprehensive course materials including the IATA Cargo Introductory manual, documentation templates, reference guides, and practical worksheets. These materials serve as valuable resources during the course and in your professional role.",
    },
  },
  // Add templates for other courses as needed
}

// Default template generator for courses without specific templates
function generateDefaultTemplate(courseId: string, courseInfo: any) {
  const title = courseInfo?.title || `IATA ${courseId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`

  return {
    id: courseId,
    title: title,
    description: courseInfo?.description || "IATA certified training program for aviation professionals.",
    image: courseInfo?.image || "/placeholder.svg?height=600&width=800",
    overview:
      courseInfo?.overview ||
      `The ${title} course provides comprehensive training for aviation professionals. This IATA-certified program is delivered by SKYWAY Institute with the highest standards of quality and industry relevance.`,
    recognition:
      "SKYWAY Institute is an IATA Authorized Training Centre, recognized for its excellence in aviation training. Our programs are developed in accordance with IATA standards and are designed to meet industry requirements worldwide.",
    learningOutcomes: courseInfo?.features || [
      "Develop essential industry knowledge and skills",
      "Learn international standards and best practices",
      "Understand regulatory requirements",
      "Apply practical techniques in real-world scenarios",
      "Enhance professional competence in the aviation sector",
    ],
    targetAudience: [
      "Aviation professionals",
      "Industry newcomers seeking certification",
      "Professionals looking to advance their careers",
      "Organizations requiring staff certification",
    ],
    curriculum: {
      modules: [
        {
          title: "Introduction and Fundamentals",
          topics: [
            "Industry overview and context",
            "Regulatory framework",
            "Key principles and concepts",
            "Industry terminology and standards",
          ],
        },
        {
          title: "Core Knowledge and Skills",
          topics: [
            "Essential procedures and processes",
            "Technical requirements and specifications",
            "Documentation and record-keeping",
            "Quality assurance principles",
          ],
        },
        {
          title: "Practical Applications",
          topics: [
            "Case studies and scenarios",
            "Problem-solving techniques",
            "Best practices implementation",
            "Performance optimization strategies",
          ],
        },
        {
          title: "Professional Development",
          topics: [
            "Career advancement pathways",
            "Continuing education opportunities",
            "Industry networking",
            "Professional ethics and conduct",
          ],
        },
      ],
    },
    benefits: [
      "Globally recognized IATA certification",
      "Enhanced career opportunities",
      "Practical skills development",
      "Industry-relevant knowledge",
      "Professional networking opportunities",
      "Training delivered by certified instructors",
    ],
    trainingOptions: [
      {
        type: "Regular Program",
        schedule: "Weekdays",
        duration: "4 weeks",
        features: [
          "IATA certified curriculum",
          "Expert instruction",
          "Practical exercises",
          "IATA certification upon completion",
          "Career guidance",
        ],
      },
      {
        type: "Weekend Program",
        schedule: "Friday and Saturday",
        duration: "6 weeks",
        features: [
          "IATA certified curriculum",
          "Expert instruction",
          "Practical exercises",
          "IATA certification upon completion",
          "Ideal for working professionals",
        ],
      },
      {
        type: "Corporate Training",
        schedule: "Customized",
        duration: "Flexible",
        features: [
          "Tailored to your organization's needs",
          "On-site training available",
          "Customized schedule",
          "Group discounts available",
          "IATA materials for all participants",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, this course is designed to accommodate both beginners and those with some industry experience. The curriculum provides a solid foundation while also offering valuable insights for more experienced professionals.",
      },
      {
        question: "What certification will I receive upon completion?",
        answer:
          "Upon successful completion of the course and passing the assessment, you will receive an official IATA certificate that is recognized globally throughout the aviation industry.",
      },
      {
        question: "How will this course benefit my career?",
        answer:
          "This IATA certification enhances your professional credibility, demonstrates your commitment to industry standards, and provides you with practical skills that employers value. Many organizations require or prefer IATA certification for certain positions.",
      },
      {
        question: "What is the format of the final assessment?",
        answer:
          "The assessment typically includes a combination of multiple-choice questions, practical exercises, and case studies. It is designed to test both your theoretical knowledge and practical application of the course content.",
      },
    ],
    examInfo:
      "The course includes a final assessment to evaluate your understanding of the material. A minimum passing score is required to receive your IATA certification. The assessment is designed to test both theoretical knowledge and practical application.",
    materials:
      "Participants receive comprehensive course materials including IATA manuals, workbooks, and reference guides. These materials serve as valuable resources during the course and in your professional career.",
  }
}

export async function generateMetadata({ params }: { params: { course: string } }): Promise<Metadata> {
  const courseId = params.course

  // Try to find the course in our mapping
  const mappedCourse = courseMapping[courseId]

  if (mappedCourse) {
    // If it has a template, use that
    if (mappedCourse.template) {
      return {
        title: `${mappedCourse.template.title} | SKYWAY Institute`,
        description: mappedCourse.template.description,
      }
    }

    // If it maps to a course in iataCourseData
    if (mappedCourse.dataId) {
      const course = iataCourseData.find((c) => c.id === mappedCourse.dataId)
      if (course) {
        return {
          title: `${mappedCourse.title || course.title} | SKYWAY Institute`,
          description: course.description,
        }
      }
    }
  }

  // Try direct match in iataCourseData
  let course = iataCourseData.find((c) => c.id === courseId)

  // If not found, try case-insensitive match
  if (!course) {
    course = iataCourseData.find((c) => c.id.toLowerCase() === courseId.toLowerCase())
  }

  // If still not found, try matching by slug
  if (!course) {
    course = iataCourseData.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseId.toLowerCase())
  }

  if (course) {
    return {
      title: `${course.title} | SKYWAY Institute`,
      description: course.description,
    }
  }

  // For any other course ID, generate a default title
  const formattedTitle = courseId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  return {
    title: `IATA ${formattedTitle} | SKYWAY Institute`,
    description: `IATA certified ${formattedTitle} training program for aviation professionals.`,
  }
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const courseId = params.course
  let courseData

  // Try to find the course in our mapping
  const mappedCourse = courseMapping[courseId]

  if (mappedCourse) {
    // If it has a template, use that
    if (mappedCourse.template) {
      courseData = mappedCourse.template
    }
    // If it maps to a course in iataCourseData
    else if (mappedCourse.dataId) {
      courseData = iataCourseData.find((c) => c.id === mappedCourse.dataId)

      // Apply any title override
      if (courseData && mappedCourse.title) {
        courseData = { ...courseData, title: mappedCourse.title }
      }
    }
  }

  // If not found through mapping, try direct match in iataCourseData
  if (!courseData) {
    courseData = iataCourseData.find((c) => c.id === courseId)
  }

  // If still not found, try case-insensitive match
  if (!courseData) {
    courseData = iataCourseData.find((c) => c.id.toLowerCase() === courseId.toLowerCase())
  }

  // If still not found, try matching by slug
  if (!courseData) {
    courseData = iataCourseData.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseId.toLowerCase())
  }

  // If course is still not found, generate a default template
  if (!courseData) {
    // Find the course info from IATAClientPage if available
    const courseInfo = null // This would come from IATAClientPage if we had access to it here
    courseData = generateDefaultTemplate(courseId, courseInfo)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{courseData.title}</h1>
              <p className="mt-6 text-xl text-skyway-100">{courseData.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-skyway-800"
                >
                  <Link href="/courses/aviation/iata">View All IATA Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={courseData.image || "/placeholder.svg?height=600&width=800"}
                alt={courseData.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-600">{courseData.overview}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IATA Recognition</h3>
                <p className="text-gray-600">{courseData.recognition}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Outcomes</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courseData.learningOutcomes?.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who Should Attend</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courseData.targetAudience?.map((audience: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {courseData.curriculum?.modules.map((module: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Module {index + 1}: {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic: string, topicIndex: number) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {courseData.examInfo && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Examination</h3>
                  <p className="text-gray-600">{courseData.examInfo}</p>
                </div>
              )}

              {courseData.materials && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Course Materials</h3>
                  <p className="text-gray-600">{courseData.materials}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courseData.benefits?.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {courseData.faqs?.map((faq: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Training Options</h2>
            <p className="mt-4 text-xl text-gray-500">Choose the training format that best fits your schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.trainingOptions?.map((option: any, index: number) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{option.type}</h3>
                    <Award className="h-6 w-6 text-skyway-600" />
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-skyway-600 mr-2" />
                      <span className="text-gray-600">{option.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                      <span className="text-gray-600">{option.duration}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to advance your aviation career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our {courseData.title} course and gain the skills and knowledge to excel in the aviation
                  industry.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-skyway-800"
                  >
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate params for all courses in iataCourseData
  const directParams = iataCourseData.map((course) => ({
    course: course.id,
  }))

  // Also generate params for title-based slugs
  const titleParams = iataCourseData.map((course) => ({
    course: course.title.toLowerCase().replace(/\s+/g, "-"),
  }))

  // Add special case courses from our mapping
  const specialCases = Object.keys(courseMapping).map((course) => ({ course }))

  // Combine all params, removing duplicates
  const allParams = [...directParams, ...titleParams, ...specialCases]
  const uniqueParams = Array.from(new Set(allParams.map((p) => p.course))).map((course) => ({ course }))

  return uniqueParams
}
