import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="br-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="some svg" className="w-full h-64" />
        <article>
          <div className="border-b border-gray-200 pb-5">
            <h2 className="text-3xl font-medium tracking-wide capitalize">
              about <span className="text-teal-600 uppercase">m</span>e
            </h2>
          </div>
          <p className="text-slate-500 mt-8 leading-loose">
            I am a resplendent, experienced, and highly dedicated Computer
            Science professional with a wealth of expertise in programming and
            passion for it. I am passionate about working with cutting-edge
            technology and contributing to the dynamic field of computer
            science. I am seeking a challenging role in software development to
            apply my expertise in problem-solving, coding, and software design.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
