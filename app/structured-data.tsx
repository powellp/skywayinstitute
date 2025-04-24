export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "SKYWAY Institute",
  url: "https://skywayinstitute.com",
  logo: "https://skywayinstitute.com/logo.png",
  description:
    "Dubai's Premier Destination for Professional Growth. SKYWAY Institute delivers high-impact training programs tailored to your goals.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "United Arab Emirates",
  },
  telephone: "+971 4 XXX XXXX",
  email: "info@skywayinstitute.com",
  sameAs: [
    "https://www.facebook.com/skywayinstitute",
    "https://www.instagram.com/skywayinstitute",
    "https://twitter.com/skywayinstitute",
    "https://www.linkedin.com/company/skywayinstitute",
  ],
}

export const courseSchema = (courseName: string, courseDescription: string, provider = "SKYWAY Institute") => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseName,
    description: courseDescription,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://skywayinstitute.com",
    },
  }
}

export const faqSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
