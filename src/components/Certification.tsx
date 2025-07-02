"use client";

type CertificationCardProps = {
  title: string;
  image: string;
};

const CertificationCard = ({ title, image }: CertificationCardProps) => (
  <div className="bg-white/10 border border-red-700 rounded-xl shadow-lg p-8 flex flex-col items-center w-screen">
    <span className="text-xl font-semibold text-white mb-4">{title}</span>
    <button
      onClick={() => window.open(image, "_blank")}
      className="bg-red-700/80 text-white px-6 py-2 rounded-full text-base font-medium shadow hover:bg-red-400 cursor-pointer transition-colors"
    >
      View Certification
    </button>
  </div>
);

export default CertificationCard;
