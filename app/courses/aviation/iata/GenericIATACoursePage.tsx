"use client"

import IATACourseTemplate from "@/components/iata-course-template"
import { iataCourseData } from "./course-data"

export default function GenericIATACoursePage({ courseId }: { courseId: string }) {
  const courseData = iataCourseData.find((course) => course.id === courseId)

  if (!courseData) {
    return <div>Course not found</div>
  }

  return <IATACourseTemplate course={courseData} />
}
