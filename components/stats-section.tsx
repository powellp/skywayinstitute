export default function StatsSection() {
  return (
    <section className="bg-skyway-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-white md:text-5xl">3000+</div>
            <div className="mt-2 text-sm font-medium text-skyway-300 md:text-base">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white md:text-5xl">50+</div>
            <div className="mt-2 text-sm font-medium text-skyway-300 md:text-base">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white md:text-5xl">100+</div>
            <div className="mt-2 text-sm font-medium text-skyway-300 md:text-base">Courses Offered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white md:text-5xl">95%</div>
            <div className="mt-2 text-sm font-medium text-skyway-300 md:text-base">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
