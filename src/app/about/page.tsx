import Image from "next/image";

const About = () => {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex flex-col items-center py-16">
      {/* ========== About Me / Introduction ========== */}
      <section className="w-full max-w-6xl bg-white/10 rounded-3xl shadow-2xl p-10 mb-16 border border-red-700 backdrop-blur">
        <h1 className="text-4xl font-bold text-red-400 mb-6">About Me</h1>
        <p className="text-xl text-gray-200 mb-10">
          Hi, I'm Daniel Baidya, a passionate developer focused on building
          functional and beautiful web applications. I completed my bachelor's
          degree in Information Management from KCMIT. I have always been
          intrested in coding and developement. Right now I am still learning
          and working on NextJs and Typescript.
        </p>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <Image
            src="/aboutMe.JPG"
            alt="Daniel Baidya"
            width={280}
            height={280}
            className="rounded-xl border-2 shadow-lg object-cover"
          />
          {/* ========== About Me / data list ========== */}

          <ul className="text-gray-300 text-lg space-y-2">
            <li>
              <span className="font-semibold text-white">Location:</span>{" "}
              Kathmandu, Nepal
            </li>
            <li>
              <span className="font-semibold text-white">Experience:</span>{" "}
              Fresher
            </li>
            <li>
              <span className="font-semibold text-white">Specialty:</span> React
              , NextJs, Typescript
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              dbaidya.me@gmail.com
            </li>
            <li>
              <span className="font-semibold text-white">Contact:</span>{" "}
              9863861483{" "}
            </li>
          </ul>
        </div>
      </section>

      {/* ========== My Journey / Timeline ========== */}
      <section className="w-full max-w-5xl bg-white/10 rounded-3xl shadow-2xl p-10 mb-16 border border-red-700 backdrop-blur transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-red-400 mb-6">My Journey</h2>
        <ul className="timeline text-xl text-gray-200 space-y-4">
          <li>
            <span className="font-semibold text-white">2022:</span> Started
            learning web development and JavaScript.
          </li>
          <li>
            <span className="font-semibold text-white">2023:</span> Completed a
            web development course and built several projects.
          </li>
          <li>
            <span className="font-semibold text-white">2024:</span> Joined Web
            Royale Pvt Ltd as a Web Consultant. And completed traineeship as a
            frontend develoepr on Monal Tech Pvt Ltd.
          </li>
          <li>
            <span className="font-semibold text-white">2025:</span> Working at
            Ek ra Sunya Inc as a Next.js Developer.
          </li>
        </ul>
      </section>

      {/* ========== Core Values ========== */}
      <section className="w-full max-w-5xl bg-white/10 rounded-3xl shadow-2xl p-10 mb-16 border border-red-700 backdrop-blur transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-red-400 mb-6">Core Values</h2>
        <ul className="list-disc text-xl pl-6 text-gray-200 space-y-2">
          <li>Continuous learning and growth</li>
          <li>Building with integrity and transparency</li>
          <li>Delivering value through innovation</li>
          <li>Collaboration and open communication</li>
        </ul>
      </section>

      {/* ========== Hobbies & Interests ========== */}
      <section className="w-full max-w-5xl bg-white/10 rounded-3xl shadow-2xl p-10 mb-16 border border-red-700 backdrop-blur transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Hobbies & Interests
        </h2>
        <p className="text-gray-200 text-xl">
          When I'm not coding, I enjoy hanging out with my cousin brothers. I
          love going to chill places to hangout and play games. I also enjoy
          bike rides and spending rest of the time watching movie and with
          family.
        </p>
      </section>
    </main>
  );
};

export default About;
