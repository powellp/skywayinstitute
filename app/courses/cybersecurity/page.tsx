import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle2, Briefcase, GraduationCap, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Cybersecurity Courses | SKYWAY Institute",
  description:
    "Equip yourself with the technical knowledge, tools, and practical skills needed to protect networks, systems, and data from digital attacks.",
  keywords:
    "cybersecurity, ethical hacking, network security, information security, cyber laws, cloud security, UAE cybersecurity, Dubai IT courses",
}

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Cybersecurity</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Protect networks, systems, and data from digital attacks with our comprehensive cybersecurity training
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Course Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              As businesses and governments worldwide face increasing cyber threats, cybersecurity has become one of the
              most critical and fastest-growing areas in IT. Our Cybersecurity courses equip participants with the
              technical knowledge, tools, and practical skills needed to protect networks, systems, and data from
              digital attacks — making them highly sought-after professionals in the UAE and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 mx-auto text-skyway-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Who Should Join</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "IT professionals looking to specialize in cybersecurity",
                "System administrators & network engineers",
                "Graduates with IT, engineering, or technical backgrounds",
                "Security officers and compliance professionals",
                "Anyone pursuing a career in digital security",
                "Students preparing for global certifications (CompTIA, CEH, CISSP, etc.)",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Modules / Topics Covered</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Fundamentals of Cybersecurity",
                  topics: [
                    "Introduction to Information Security",
                    "Types of Threats & Vulnerabilities",
                    "Cyber Attack Methods",
                    "Security Policies & Best Practices",
                    "Overview of Regulatory Compliance (GDPR, ISO 27001)",
                  ],
                },
                {
                  title: "Network Security",
                  topics: [
                    "Network Protocols & Models",
                    "Securing Network Infrastructure",
                    "VPNs & Firewalls",
                    "Intrusion Detection & Prevention Systems (IDS/IPS)",
                    "Wireless Network Security",
                    "Network Security Monitoring",
                  ],
                },
                {
                  title: "Ethical Hacking & Penetration Testing",
                  topics: [
                    "Ethical Hacking Concepts",
                    "Vulnerability Assessment",
                    "Penetration Testing Process",
                    "Common Hacking Tools & Techniques",
                    "Web Application Security",
                    "Reporting & Documentation",
                  ],
                },
                {
                  title: "Information Security Management",
                  topics: [
                    "IT Security Risk Management",
                    "Asset Management",
                    "Business Continuity & Disaster Recovery Planning",
                    "Security Awareness & Training Programs",
                    "Incident Response Management",
                  ],
                },
                {
                  title: "Cyber Laws & Compliance",
                  topics: [
                    "Cybercrime & Legal Framework",
                    "Data Protection Laws in UAE",
                    "Digital Evidence & Forensics Basics",
                    "Compliance Frameworks (ISO 27001, PCI DSS)",
                    "Reporting Obligations & Legal Liabilities",
                  ],
                },
                {
                  title: "Cloud Security",
                  topics: [
                    "Cloud Computing Fundamentals",
                    "Cloud Threat Models",
                    "Identity & Access Management in the Cloud",
                    "Data Protection & Encryption in Cloud",
                    "Cloud Security Best Practices",
                  ],
                },
                {
                  title: "Security Tools & Practical Labs",
                  topics: [
                    "Wireshark",
                    "Kali Linux",
                    "Metasploit",
                    "Nmap",
                    "Snort",
                    "Password Cracking & Encryption Tools",
                  ],
                },
              ].map((module, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-skyway-800 mb-4">
                    {index + 1}. {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learning Outcomes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our comprehensive approach ensures you gain the skills needed for a successful cybersecurity career
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Technical Expertise",
                description:
                  "Understand and manage security risks, threats, and vulnerabilities with hands-on experience using essential cybersecurity tools",
                icon: <Shield className="h-6 w-6 text-skyway-600" />,
              },
              {
                title: "Practical Skills",
                description:
                  "Implement secure networks, firewalls, and defense systems, and conduct ethical hacking and penetration testing",
                icon: <CheckCircle2 className="h-6 w-6 text-skyway-600" />,
              },
              {
                title: "Career Readiness",
                description:
                  "Learn UAE-specific laws and international compliance standards to prepare for entry-level to advanced cybersecurity careers",
                icon: <Briefcase className="h-6 w-6 text-skyway-600" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 mx-auto text-skyway-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Career Scope & Market Demand</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Cybersecurity specialists are in high demand in the UAE's finance, government, telecom, aviation,
              healthcare, and IT sectors — driven by strict compliance regulations and increased digitalization.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Job Roles:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Cybersecurity Analyst",
                "Network Security Engineer",
                "Ethical Hacker / Pen Tester",
                "Security Operations Center (SOC) Analyst",
                "Compliance & Risk Manager",
                "Information Security Officer",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 mx-auto text-skyway-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Certification</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">SKYWAY Institute Certificate of Completion</p>
              <p className="text-gray-700 mb-4">Preparation Support for International Certifications:</p>
              <ul className="space-y-2">
                {[
                  "CompTIA Security+",
                  "Certified Ethical Hacker (CEH)",
                  "Certified Information Systems Security Professional (CISSP)",
                  "ISO 27001 Lead Implementer",
                ].map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Duration */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 mx-auto text-skyway-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Course Duration & Delivery Mode</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-700">1 to 3 months (depending on course level)</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mode</h3>
                  <p className="text-gray-700">Onsite (Dubai) / Online (Live Interactive)</p>
                </div>
              </div>
            </div>
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
                  <span className="block">Ready to start your cybersecurity career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join our comprehensive cybersecurity program and become a sought-after security professional.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
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
