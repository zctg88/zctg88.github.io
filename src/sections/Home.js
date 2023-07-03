import ProjectCard from '../shared/ProjectCard';
import './Home.css';

function Home() {
  return (
    <>
      <div className='title-container'>
        <span className='title'>Zach Chin</span>
        <span className='subtitle'>Full-Stack Developer</span>
      </div>

      <div className='project-container'>
        <ProjectCard></ProjectCard>
      </div>
    </>
  )
}

export default Home;