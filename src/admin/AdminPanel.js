import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SkillsManager from './SkillsManager';
import ProjectsManager from './ProjectsManager';

const AdminPanel = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/skills" element={<SkillsManager />} />
        <Route path="/admin/projects" element={<ProjectsManager />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminPanel;
