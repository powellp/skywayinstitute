import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Business Management Courses in Dubai | SkywayInstitute",
  description:
    "Elevate your leadership skills with SkywayInstitute's comprehensive business management courses in Dubai. KHDA approved training for professionals.",
}

export default function BusinessManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Business Management Courses in Dubai
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Elevate Your Leadership Skills with SkywayInstitute
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              In the dynamic business environment of Dubai, effective business management is crucial for driving
              organizational success. SkywayInstitute offers comprehensive business management courses designed to
              empower professionals with the skills needed to lead, inspire, and manage teams effectively. Whether
              you're aiming to enhance your leadership abilities, improve operational efficiency, or advance your
              career, our courses provide the tools and knowledge necessary to achieve your goals.
            </p>

            <Tabs defaultValue="overview" className="mt-12">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="approach">Our Approach</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Why Choose SkywayInstitute?</h2>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>
                          <strong>Extensive Course Offerings:</strong> With over 200 certification courses, we cater to
                          both technical and soft skills, ensuring a well-rounded development program for your
                          employees.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>
                          <strong>Tailored Training Solutions:</strong> Our programs are customized to align with your
                          company's specific requirements, ensuring relevance and effectiveness.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>
                          <strong>Practical Learning Experiences:</strong> Engage your team with interactive and
                          hands-on activities that enhance learning retention and application.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Accreditations</h2>
                    <p>
                      SkywayInstitute is proud to be accredited by renowned organizations such as EC-Council, CompTIA,
                      and Autodesk. These partnerships ensure that our courses are up-to-date with the latest industry
                      standards, providing your team with current and applicable knowledge.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">Industry Expertise</h2>
                    <p>
                      Serving over 10 industrial sectors, SkywayInstitute demonstrates versatility and expertise across
                      various fields. Whether your business operates in healthcare, finance, or technology, our training
                      programs are adapted to meet your specific needs.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">Benefits of Business Management Training in Dubai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Outcome-Based Education</h3>
                    <p>
                      We prepare students to meet future challenges by providing them with the skills and knowledge
                      necessary to succeed in their chosen field.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Cutting Edge Curriculum</h3>
                    <p>
                      Our curriculum is designed to provide students with the practical skills and knowledge needed for
                      success in today's dynamic workplace.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Increased Business Profits</h3>
                    <p>
                      Trained employees will not only have the correct skills to do their jobs effectively and
                      efficiently but also will increase profits in every aspect of the business.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Improved Performance</h3>
                    <p>
                      Training and performance are interconnected. Training can help improve your performance at the
                      workplace to deliver what the management is looking for.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Personalized Feedback</h3>
                    <p>
                      We offer personalized feedback so that each student gets the right help at the right time to
                      develop themselves according to their own pace and needs!
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Improved Communication</h3>
                    <p>
                      Our Management Training Institute can help you learn how to communicate more effectively in a
                      business and achieve your goals more easily.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Improved Career Opportunities</h3>
                    <p>
                      Management training programs can help you develop and update your skills. It will also give you
                      the skills to compete for better-paying jobs.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Improved Decision-Making Skills</h3>
                    <p>
                      We offer courses designed specifically to improve your decision-making abilities as a business
                      leader!
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">
                  Features of SkywayInstitute's Business Management Training Course in Dubai
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">World-Class Courses</h3>
                    <p>
                      SkywayInstitute is a professionally run multi-skilling institute imparting world-class skill
                      courses and keeping up with International standards.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Interactive, Hands-On Learning</h3>
                    <p>
                      Our interactive, hands-on learning and training allow you to experience real-world situations in
                      our classroom settings.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">100s of In-Demand Courses</h3>
                    <p>
                      We offer hundreds of in-demand courses that let you learn new skills and technologies to improve
                      your chances of getting hired easily.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Offline/Online Combinational Coaching</h3>
                    <p>
                      We provide not only offline (classroom training) but also online training services for students
                      who opt for distant learning.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">Industry-Leading Trainers</h3>
                    <p>
                      Our management training centre has versatile, certified, and experienced trainers who have proven
                      expertise in their areas of knowledge.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-skyway-700">8+ Accreditations</h3>
                    <p>
                      Our career development centre has over Eight accreditations from national and international
                      accrediting bodies to offer skill development training.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">Our Business Management Courses</h2>
                <p className="mb-6">
                  Below is a detailed list of our business management courses, each designed to meet the unique needs of
                  professionals in the field:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Course Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Duration
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Corporate Days
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Certification Body
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Modes of Training
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Administration and Office Management Best Practices
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">70 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SkywayInstitute & KHDA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Classroom / Online</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Administrative, Personal Assistant and Secretarial Duties
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SkywayInstitute & KHDA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Classroom / Online</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Advanced Documents and Records Management Compliance
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SkywayInstitute & KHDA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Classroom / Online</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Advanced Office Management and Effective Administration Skills
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SkywayInstitute & KHDA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Classroom / Online</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Advanced Organizational Development (OD) Practitioners Programme
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SkywayInstitute & KHDA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Classroom / Online</td>
                      </tr>
                      {/* Add more courses as needed */}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">
                    This is just a sample of our extensive course catalog. Contact us to learn about all available
                    business management courses.
                  </p>
                  <Button asChild size="lg" className="bg-skyway-600 hover:bg-skyway-700">
                    <Link href="/contact">Request Full Course Catalog</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="approach" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">Structured Training Approach</h2>
                <p className="mb-6">Our five-step training approach ensures a clear and structured framework:</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-skyway-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Identifying Objectives</h3>
                      <p className="mt-1">
                        We work closely with you to understand your business goals and tailor our programs accordingly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-skyway-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Customizing the Course</h3>
                      <p className="mt-1">
                        Our experts craft a personalized curriculum that aligns with your company's objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-skyway-600 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Delivering Training</h3>
                      <p className="mt-1">
                        Flexible delivery methods include in-person and online sessions to accommodate your team's
                        needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-skyway-600 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Evaluating Outcomes</h3>
                      <p className="mt-1">
                        Post-training assessments and feedback collection ensure the effectiveness of our programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-skyway-600 flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Awarding Certifications</h3>
                      <p className="mt-1">
                        Upon completion, participants receive accredited certificates from Dubai Knowledge and Human
                        Development Authority (KHDA) and ISO 9001:2015.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Become an excellent manager through strong leadership.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Supervise and sort out your department to meet specific goals.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Administer, inspire, and train your employees, creating a strong team.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Interview candidates, hire them, and retain the necessary people.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Deal with divergences, attendance, critical difficulties, and terminations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Delegate, manage time, resolve problems, and make precise decisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>
                          Learn the fundamentals of Administration Training, including business types, ethics, law,
                          finances, and accounting.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>
                          Understand the fundamentals of Business Operations Management, customer service, and human
                          resources.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-skyway-600 font-bold mr-2">•</span>
                        <span>Grasp the fundamentals of sales and Business Management Marketing.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to elevate your team's performance?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Contact SkywayInstitute today to explore how our business management training programs can benefit
                  your organization. Let us help you build a stronger, more capable workforce.
                </p>
                <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900"
                  >
                    <Link href="/courses">Explore Other Courses</Link>
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
