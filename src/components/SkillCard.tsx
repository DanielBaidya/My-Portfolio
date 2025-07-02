import Image from "next/image";

type SkillCardProps = {
  imgSrc: string;
  name: string;
};

const SkillCard = ({ imgSrc, name }: SkillCardProps) => (
  <div className="bg-white/10 border border-red-700 rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[140px] transition-transform hover:scale-105">
    <Image src={imgSrc} alt={name} width={80} height={80} className="mb-4" />
    <span className="text-xl font-semibold text-white">{name}</span>
  </div>
);

export default SkillCard;
