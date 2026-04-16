"use client"

import Image from "next/image"
import styles from "./Reviews.module.css"

interface Review {
  name: string
  title: string
  company: string
  quote: string
}

const reviews: Review[] = [
  {
    name: "Rachel K.",
    title: "VP of Engineering",
    company: "Bloomberg",
    quote: "Stephen consistently delivered high-throughput payment services on time and with zero production incidents. His attention to system reliability is exceptional.",
  },
  {
    name: "Daniel O.",
    title: "Senior Product Manager",
    company: "MongoDB",
    quote: "One of the most dependable engineers I've worked with. Stephen took ownership of our core SaaS backend and made it significantly more scalable within months.",
  },
  {
    name: "Priya N.",
    title: "Director of Software Engineering",
    company: "Flatiron Health",
    quote: "Stephen reduced our API latency by 40% while handling millions of daily requests. He communicates clearly and always follows through on commitments.",
  },
  {
    name: "James W.",
    title: "CTO",
    company: "FinEdge Solutions",
    quote: "We brought Stephen in to stabilise a critical fintech pipeline. He diagnosed the bottlenecks quickly and delivered a clean, well-documented solution ahead of schedule.",
  },
  {
    name: "Sofia A.",
    title: "Engineering Manager",
    company: "CloudBase",
    quote: "Stephen's knowledge of distributed systems and AWS infrastructure is top-tier. He mentored junior engineers while shipping production features — a rare combination.",
  },
  {
    name: "Marcus C.",
    title: "Lead Architect",
    company: "DataStream",
    quote: "Excellent collaborator and a strong technical voice. Stephen's microservices work became the foundation for our entire platform rewrite.",
  },
  {
    name: "Aisha P.",
    title: "Head of Product",
    company: "NovaSaaS",
    quote: "Stephen bridged the gap between product and engineering seamlessly. He asked the right questions upfront and delivered exactly what we needed.",
  },
]

const ReviewCard = ({ review }: { review: Review }) => (
  <div className={styles.card}>
    <p className={styles.quote}>"{review.quote}"</p>
    <div className={styles.author}>
      <div>
        <p className={styles.name}>{review.name}</p>
        <p className={styles.role}>{review.title} · {review.company}</p>
      </div>
    </div>
  </div>
)

const Reviews = () => (
  <section id="reviews" className={`section ${styles.reviews}`}>
    <div className="container">
      <h2 className="section-title">Client Reviews</h2>
      <p className="section-subtitle">
        What the people I've worked with have to say.
      </p>
    </div>

    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  </section>
)

export default Reviews
