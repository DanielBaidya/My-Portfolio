import Image from "next/image";
import SkillCard from "../components/SkillCard";
import ExpCard from "../components/ExpCard";
import CertificationCard from "../components/Certification";

// Experience data for the Work Experience section
const experiences = [
  {
    company: "Web Royale Pvt Ltd",
    role: "Web Consultant",
    period: "Jan - Sept (2024)",
    description:
      "Improved website rankings and traffic through keyword research, on-page SEO, and link-building strategies.",
    AccquiredSkill: 9,
  },
  {
    company: "Monal Tech Pvt Ltd",
    role: "Frontend Developer (Internship)",
    period: "Nov - Feb (2025)",
    description:
      "Developed modern web apps with React and Typescript. Built multiple practice projects aswell.",
    AccquiredSkill: 8,
  },
  {
    company: "Ek ra Sunya Inc",
    role: "Next Js Developer",
    period: "Jun - (Currently working)",
    description: "Building modern web apps with React,Next.js and TypeScript.",
    AccquiredSkill: 8,
  },
];

// Skills data for the Skills section
const skills = [
  { imgSrc: "/Js.png", name: "JavaScript" },
  { imgSrc: "/java.webp", name: "Java" },
  { imgSrc: "/next.webp", name: "Next Js" },
  { imgSrc: "/react.webp", name: "React" },
  { imgSrc: "/ts.webp", name: "Typescript" },
];

//Certification Section data
const certifications = [
  {
    title: "Web Development Course Completed",
    image: "/coursecertificate.png", // Place this image in your public folder
  },
  {
    title: "Front-End Developer Internship Certificate",
    image: "/certificate.png", // Place this image in your public folder
  },
];

const Home = () => {
  return (
    // Main container with full screen height and background gradient
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-900 flex flex-col items-center justify-center">
      {/* ===================== Profile (Hero) Section ===================== */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-20 w-full max-w-7xl bg-white/10 rounded-3xl shadow-2xl p-10 mt-10 mb-16 border border-red-700 backdrop-blur">
        {/* Left: Description */}
        <div className="flex-1 flex flex-col items-start">
          {/* Name */}
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg typing">
            Hi I&apos;m,{" "}
            <span className="text-red-400 font-semibold">Daniel Baidya.</span>
          </h1>
          {/* Summary */}
          <p className="mb-6 text-lg text-gray-200">
            A passionate developer focused on building functional and beautiful
            web applications with{" "}
            <span className="text-red-400 font-semibold">Next.js</span> and{" "}
            <span className="text-red-400 font-semibold">TypeScript</span>. I
            write code like poetry (with fewer typos), chase performance like it
            owes me money, and treat every deployment like a boss battle.
          </p>
          {/* Download CV link button */}
          <a
            href="/cv.pdf"
            download
            className="bg-red-700/80 text-white px-6 py-2 rounded-full text-base font-medium shadow hover:bg-red-400 cursor-pointer transition-colors fade-in-left"
          >
            Download CV
          </a>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center  md:justify-end">
          <div className="rounded-lg overflow-hidden border-2 border-red-700 shadow-xl w-100 h-100 flex items-center justify-center bg-white/20">
            {/* Profile photo using Next.js Image optimization */}
            <Image
              src="/me.JPG"
              alt="Daniel's Photo"
              width={220}
              height={220}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
      {/* ===================== Skills Section ===================== */}
      <section className="w-full max-w-5xl mb-16">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-8 text-center text-red-400 tracking-wide drop-shadow">
          Skills
        </h2>
        {/* Skill cards displayed side by side */}
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`fade-in-left fade-delay-${index + 1}`}
            >
              <SkillCard imgSrc={skill.imgSrc} name={skill.name} />
            </div>
          ))}
        </div>
      </section>
      {/* ===================== Work Experience Section ===================== */}
      <section className="w-full max-w-screen mb-16">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-8 text-center text-red-400 tracking-wide drop-shadow">
          Work Experience
        </h2>
        {/* Experience cards displayed side by side */}
        <div className="flex flex-wrap justify-center gap-10">
          {experiences.map((exp) => (
            // Each ExpCard receives an experience object as prop
            <ExpCard key={exp.company + exp.role} exp={exp} />
          ))}
        </div>
      </section>
      {/* ==================Certification Section========================= */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-400 tracking-wide drop-shadow">
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
