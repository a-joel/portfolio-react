import React, { useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, BadgeCheck } from 'lucide-react';

const certificationsData = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "Dec 2024",
    link: "#",
    skills: ["React", "UX/UI", "JavaScript"]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Nov 2024",
    link: "#",
    skills: ["Cloud Security", "Deployment", "EC2"]
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Oct 2024",
    link: "#",
    skills: ["Node.js", "MongoDB", "Express"]
  },
  {
    title: "Legacy JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "Sep 2024",
    link: "#",
    skills: ["Algorithms", "Data Structures"]
  }
];

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {/* Subtle dark spotlight for depth on white */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.04), transparent 70%)`,
        }}
      />
      <div className="relative p-6">{children}</div>
    </div>
  );
};

export default function Certifications() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <BadgeCheck className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Licenses & Certifications</h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <SpotlightCard key={index}>
              <div className="flex h-full flex-col justify-between gap-5">
                {/* Top: Icon + Title + Issuer */}
                <div>
                  <div className="m-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{cert.issuer}</p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer: Date + Link */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{cert.date}</span>
                  </div>
                  <a
                    href={cert.link}
                    className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Verify
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}