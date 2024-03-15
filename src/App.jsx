import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen mt-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
