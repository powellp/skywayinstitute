import type { CourseData } from "@/lib/course-types"

export const cybersecurityCourseData: CourseData[] = [
  {
    id: "certified-ethical-hacker",
    title: "Certified Ethical Hacker (CEH)",
    description: "Learn to think like a hacker and protect systems from cyber threats",
    image: "/placeholder.svg?height=600&width=800&text=CEH",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "5 weeks",
    featured: true,
    overview:
      "The Certified Ethical Hacker (CEH) course is designed to help you master advanced step-by-step methodologies that hackers use, including writing virus codes and reverse engineering. This course will immerse you in a hands-on environment where you'll learn how to scan, test, hack, and secure target systems.",
    recognition:
      "The CEH certification is recognized worldwide as a standard for ethical hacking and penetration testing professionals. SKYWAY Institute is an EC-Council Accredited Training Center, ensuring that our training meets the highest standards in the industry.",
    learningOutcomes: [
      "Understand ethical hacking methodology and its importance in securing systems",
      "Master the five phases of ethical hacking: reconnaissance, scanning, gaining access, maintaining access, and covering tracks",
      "Learn advanced network packet analysis and penetration testing techniques",
      "Develop skills in system hacking, session hijacking, and social engineering",
      "Understand web server and application vulnerabilities and how to secure them",
      "Gain practical experience with real-world hacking tools and countermeasures",
      "Prepare thoroughly for the EC-Council CEH certification exam",
    ],
    targetAudience: [
      "Security professionals who want to understand how to protect systems by learning how hackers think",
      "Network administrators responsible for network and system security",
      "IT professionals looking to advance their career in cybersecurity",
      "Security officers, auditors, and security specialists",
      "Anyone interested in understanding the techniques used by hackers",
    ],
    curriculum: {
      modules: [
        {
          title: "Introduction to Ethical Hacking",
          topics: [
            "Ethics and legal aspects of ethical hacking",
            "Hacking methodology and frameworks",
            "Information security controls",
            "Penetration testing process",
            "Types of security assessments",
          ],
        },
        {
          title: "Footprinting and Reconnaissance",
          topics: [
            "Footprinting methodologies and tools",
            "OSINT (Open Source Intelligence) gathering",
            "Website and DNS reconnaissance",
            "Email and social media footprinting",
            "Competitive intelligence and Google hacking",
          ],
        },
        {
          title: "Scanning and Enumeration",
          topics: [
            "Network scanning techniques",
            "TCP/IP port scanning",
            "Vulnerability scanning",
            "Banner grabbing and OS fingerprinting",
            "Enumeration of network resources",
          ],
        },
        {
          title: "System Hacking Techniques",
          topics: [
            "Password cracking techniques",
            "Privilege escalation methods",
            "Executing applications and hiding files",
            "Rootkits and backdoors",
            "Covering tracks and clearing logs",
          ],
        },
        {
          title: "Malware and Social Engineering",
          topics: [
            "Types of malware and their propagation",
            "Trojan and virus analysis",
            "Social engineering techniques",
            "Phishing attacks and countermeasures",
            "Identity theft prevention",
          ],
        },
        {
          title: "Web Application Hacking",
          topics: [
            "Web application vulnerabilities (OWASP Top 10)",
            "Cross-site scripting (XSS) attacks",
            "SQL injection techniques",
            "Session hijacking",
            "Web application security tools",
          ],
        },
        {
          title: "Wireless Network Hacking",
          topics: [
            "Wireless encryption vulnerabilities",
            "Wireless hacking methodology",
            "Wireless hacking tools",
            "Bluetooth and mobile device attacks",
            "Wireless security best practices",
          ],
        },
        {
          title: "Cloud Computing Security",
          topics: [
            "Cloud computing threats and vulnerabilities",
            "Cloud security architecture",
            "Virtualization security issues",
            "Container security",
            "Cloud security best practices",
          ],
        },
      ],
    },
    benefits: [
      "Globally recognized EC-Council certification enhancing your employability",
      "Hands-on experience with real-world ethical hacking tools and techniques",
      "Understanding of both offensive and defensive security strategies",
      "Ability to conduct professional security assessments",
      "Knowledge to implement effective security controls",
      "Access to EC-Council's resources and community",
      "Career advancement opportunities in the rapidly growing cybersecurity field",
      "Practical skills that can be immediately applied in the workplace",
    ],
    trainingOptions: [
      {
        type: "Regular Program",
        schedule: "Monday to Wednesday",
        duration: "5 weeks (3 hours/day)",
        features: [
          "Morning batch: 9:00 AM - 12:00 PM",
          "Evening batch: 6:00 PM - 9:00 PM",
          "EC-Council certified curriculum",
          "Hands-on lab exercises",
          "Practice tests and exam preparation",
          "Official EC-Council courseware",
          "CEH exam voucher included",
        ],
      },
      {
        type: "Weekend Program",
        schedule: "Friday and Saturday",
        duration: "7 weeks (6 hours/day)",
        features: [
          "Timing: 10:00 AM - 4:00 PM",
          "EC-Council certified curriculum",
          "Hands-on lab exercises",
          "Practice tests and exam preparation",
          "Official EC-Council courseware",
          "CEH exam voucher included",
          "Ideal for working professionals",
        ],
      },
      {
        type: "Bootcamp",
        schedule: "Sunday to Thursday",
        duration: "2 weeks (8 hours/day)",
        features: [
          "Intensive training format",
          "Timing: 9:00 AM - 5:00 PM",
          "EC-Council certified curriculum",
          "Extended hands-on lab sessions",
          "Daily practice tests",
          "Official EC-Council courseware",
          "CEH exam voucher included",
          "Post-course support for 30 days",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need prior experience in cybersecurity to take the CEH course?",
        answer:
          "While not mandatory, having basic knowledge of networking concepts, operating systems, and some security fundamentals is recommended. Familiarity with Linux, Windows, and basic networking protocols will help you get the most out of the course.",
      },
      {
        question: "Is the CEH exam included in the course fee?",
        answer:
          "Yes, the course fee includes one CEH exam voucher. The exam can be scheduled at your convenience within one year of completing the course.",
      },
      {
        question: "What is the format of the CEH exam?",
        answer:
          "The CEH exam consists of 125 multiple-choice questions to be completed in 4 hours. A passing score of 70% is required to earn the certification. The exam can be taken at any EC-Council Authorized Testing Center.",
      },
      {
        question: "How hands-on is the CEH training?",
        answer:
          "Our CEH training is highly practical, with approximately 60% of the course time dedicated to hands-on lab exercises. You'll work with real-world tools in a safe, virtualized environment to practice the techniques you learn.",
      },
      {
        question: "What job roles can I pursue after getting CEH certified?",
        answer:
          "CEH certification can help you pursue roles such as Ethical Hacker, Penetration Tester, Security Analyst, Security Engineer, Security Consultant, Information Security Manager, and Security Auditor. The certification is highly regarded in the cybersecurity industry and can open doors to various opportunities.",
      },
      {
        question: "How often do I need to renew my CEH certification?",
        answer:
          "The CEH certification is valid for three years. To maintain your certification, you need to earn EC-Council Continuing Education Credits through various professional activities or retake the exam.",
      },
    ],
    examInfo:
      "The CEH exam (312-50) consists of 125 multiple-choice questions to be completed in 4 hours. The exam covers all aspects of ethical hacking, from reconnaissance to maintaining access and covering tracks. A passing score of 70% is required to earn the certification. Our course includes exam preparation materials and practice tests to ensure you're fully prepared.",
    materials:
      "Students receive the official EC-Council courseware, including the CEH textbook, access to the iLabs platform for hands-on practice, practice exam questions, and additional reference materials. You'll also get access to our custom lab environment where you can practice the techniques learned in a safe, legal setting.",
  },
  {
    id: "certified-network-defender",
    title: "Certified Network Defender (CND)",
    description: "Master the art of defending networks against sophisticated cyber attacks",
    image: "/placeholder.svg?height=600&width=800&text=CND",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "4 weeks",
    overview:
      "The Certified Network Defender (CND) program is designed to equip network administrators with the skills to protect, detect, and respond to network security threats. This comprehensive course covers network security technologies, tools, and techniques to defend against modern cyber threats.",
    recognition:
      "The CND certification is recognized globally and is accredited by ANSI under the ANSI/ISO/IEC 17024 standard. SKYWAY Institute is an EC-Council Accredited Training Center, ensuring our training meets the highest industry standards.",
    learningOutcomes: [
      "Design and implement security policies and controls to protect network infrastructure",
      "Deploy effective network security tools and technologies",
      "Monitor network traffic to identify suspicious activities and potential threats",
      "Perform vulnerability assessments and risk management",
      "Implement secure network architecture principles",
      "Respond to and recover from network security incidents",
      "Apply data protection techniques and cryptography",
      "Prepare thoroughly for the EC-Council CND certification exam",
    ],
    targetAudience: [
      "Network administrators responsible for network security",
      "Security professionals who want to enhance their network defense skills",
      "IT professionals looking to specialize in network security",
      "System and network engineers",
      "Security analysts and consultants",
      "Anyone interested in network defense strategies and techniques",
    ],
    curriculum: {
      modules: [
        {
          title: "Computer Network and Defense Fundamentals",
          topics: [
            "Network security fundamentals",
            "Network defense principles",
            "Security policies and frameworks",
            "Network security controls",
            "Defense-in-depth strategies",
          ],
        },
        {
          title: "Network Security Threats and Vulnerabilities",
          topics: [
            "Common network attacks and threats",
            "Vulnerability assessment",
            "Threat intelligence",
            "Attack vectors and methodologies",
            "Social engineering techniques",
          ],
        },
        {
          title: "Network Security Controls and Devices",
          topics: [
            "Firewalls and their deployment",
            "Intrusion Detection and Prevention Systems",
            "Network Access Control (NAC)",
            "VPNs and secure remote access",
            "Security device configuration and management",
          ],
        },
        {
          title: "Data Security and Cryptography",
          topics: [
            "Cryptographic concepts and algorithms",
            "Public Key Infrastructure (PKI)",
            "Data encryption techniques",
            "Secure communication protocols",
            "Digital signatures and certificates",
          ],
        },
        {
          title: "Network Monitoring and Analysis",
          topics: [
            "Network traffic analysis",
            "Security monitoring tools",
            "Log management and analysis",
            "Network forensics",
            "Security Information and Event Management (SIEM)",
          ],
        },
        {
          title: "Incident Response and Recovery",
          topics: [
            "Incident response planning and procedures",
            "Incident handling and management",
            "Digital forensics basics",
            "Business continuity planning",
            "Disaster recovery strategies",
          ],
        },
        {
          title: "Wireless Network Security",
          topics: [
            "Wireless security protocols",
            "Wireless network threats",
            "Securing wireless networks",
            "Wireless security tools",
            "Mobile device security",
          ],
        },
        {
          title: "Cloud Network Security",
          topics: [
            "Cloud security fundamentals",
            "Securing cloud infrastructure",
            "Cloud network security controls",
            "Virtualization security",
            "Cloud security best practices",
          ],
        },
      ],
    },
    benefits: [
      "Globally recognized EC-Council certification enhancing your employability",
      "Practical skills in implementing network security controls and technologies",
      "Ability to detect and respond to network security incidents",
      "Knowledge to secure both traditional and cloud-based networks",
      "Understanding of network security compliance requirements",
      "Access to EC-Council's resources and community",
      "Career advancement opportunities in the network security field",
      "Hands-on experience with network security tools and technologies",
    ],
    trainingOptions: [
      {
        type: "Regular Program",
        schedule: "Monday to Wednesday",
        duration: "4 weeks (3 hours/day)",
        features: [
          "Morning batch: 9:00 AM - 12:00 PM",
          "Evening batch: 6:00 PM - 9:00 PM",
          "EC-Council certified curriculum",
          "Hands-on lab exercises",
          "Practice tests and exam preparation",
          "Official EC-Council courseware",
          "CND exam voucher included",
        ],
      },
      {
        type: "Weekend Program",
        schedule: "Friday and Saturday",
        duration: "6 weeks (6 hours/day)",
        features: [
          "Timing: 10:00 AM - 4:00 PM",
          "EC-Council certified curriculum",
          "Hands-on lab exercises",
          "Practice tests and exam preparation",
          "Official EC-Council courseware",
          "CND exam voucher included",
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
          "EC-Council materials for all participants",
          "Focus on specific network security challenges relevant to your organization",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between CEH and CND certifications?",
        answer:
          "While CEH focuses on offensive security (ethical hacking techniques), CND focuses on defensive security (protecting networks from attacks). CEH teaches you to think like a hacker, while CND teaches you to defend against hackers. Both certifications complement each other, with CND being more relevant for those in network administration and defense roles.",
      },
      {
        question: "What prerequisites are recommended for the CND course?",
        answer:
          "It's recommended to have at least 2 years of experience in IT networking, along with a basic understanding of network security concepts. Familiarity with network devices, protocols, and operating systems is beneficial. Having CompTIA Network+ or Security+ certification is helpful but not required.",
      },
      {
        question: "Is the CND exam included in the course fee?",
        answer:
          "Yes, the course fee includes one CND exam voucher. The exam can be scheduled at your convenience within one year of completing the course.",
      },
      {
        question: "What is the format of the CND exam?",
        answer:
          "The CND exam consists of 100 multiple-choice questions to be completed in 4 hours. A passing score of 70% is required to earn the certification. The exam can be taken at any EC-Council Authorized Testing Center or online through a proctored exam.",
      },
      {
        question: "How hands-on is the CND training?",
        answer:
          "Our CND training includes extensive hands-on components, with approximately 50% of the course time dedicated to practical exercises. You'll work with real network security tools and technologies in a virtualized environment to apply the defensive techniques you learn.",
      },
      {
        question: "How often do I need to renew my CND certification?",
        answer:
          "The CND certification is valid for three years. To maintain your certification, you need to earn EC-Council Continuing Education Credits through various professional activities or retake the exam.",
      },
    ],
    examInfo:
      "The CND exam (312-38) consists of 100 multiple-choice questions to be completed in 4 hours. The exam covers all aspects of network defense, from security policies to incident response. A passing score of 70% is required to earn the certification. Our course includes exam preparation materials and practice tests to ensure you're fully prepared.",
    materials:
      "Students receive the official EC-Council courseware, including the CND textbook, access to the iLabs platform for hands-on practice, practice exam questions, and additional reference materials. You'll also get access to our custom lab environment where you can practice implementing network security controls and technologies.",
  },
]
