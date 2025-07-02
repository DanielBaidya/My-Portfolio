type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  AccquiredSkill: number;
};

const ExpCard = ({ exp }: { exp: Experience }) => (
  <div className="bg-white/10 border border-red-700 rounded-xl shadow-lg p-8 w-96 transition-transform hover:scale-105">
    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
    <div className="text-red-300 font-semibold mb-2">{exp.company}</div>
    <div className="text-gray-300 text-base mb-2">{exp.period}</div>
    <p className="text-gray-200">{exp.description}</p>
    <div className="text-green-400 font-semibold">
      AccquiredSkill: {exp.AccquiredSkill} / 10
    </div>
  </div>
);

export default ExpCard;
