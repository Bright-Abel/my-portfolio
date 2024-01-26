import ProjectCard from './ProjectCard';
// import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useFetchProjects } from './FetchData';

const Project = () => {
  const { project, isLoading, isError } = useFetchProjects();
  console.log(project);

  if (isLoading) {
    return (
      <section className="py-20 align-element" id="projects">
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-3xl font-medium tracking-wide capitalize">
            <span className="text-teal-600 ">w</span>eb creations
          </h2>
        </div>
        <div className="loading align-element mt-16"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 align-element" id="projects">
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-3xl font-medium tracking-wide capitalize">
            <span className="text-teal-600 ">w</span>eb creations
          </h2>
        </div>
        <div className=" align-element pt-16">
          <h2 className="  text-5xl font-bold animate-bounce tracking-wide capitalize text-red-400">
            {isError}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="projects">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wide capitalize">
          <span className="text-teal-600 ">w</span>eb creations
        </h2>
      </div>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {project.map((item) => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Project;
