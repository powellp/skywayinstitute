export interface CourseModule {
  title: string
  topics: string[]
}

export interface TrainingOption {
  type: string
  schedule: string
  duration: string
  features: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface CourseData {
  id: string
  title: string
  description: string
  image: string
  category: string
  subcategory?: string
  level: string
  duration: string
  featured?: boolean
  overview: string
  recognition?: string
  learningOutcomes: string[]
  targetAudience: string[]
  curriculum: {
    modules: CourseModule[]
  }
  benefits: string[]
  trainingOptions: TrainingOption[]
  faqs: FAQ[]
  examInfo?: string
  materials?: string
}
