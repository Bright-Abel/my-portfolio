import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wide capitalize">
          tech <span className="text-teal-600 animate-pulse">s</span>tack
        </h2>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
