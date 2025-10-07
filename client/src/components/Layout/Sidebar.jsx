import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const linkBase =
  'block px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors';
const active = 'bg-primary text-white hover:bg-primary';

export default function Sidebar() {
  const { user } = useAuth();

  const links = [
    { to: '/dashboard', label: 'Dashboard', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/students', label: 'Students', roles: ['admin', 'teacher'] },
    { to: '/teachers', label: 'Teachers', roles: ['admin'] },
    { to: '/attendance', label: 'Attendance', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/assignments', label: 'Assignments', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/exams', label: 'Exams', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/timetable', label: 'Timetable', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/announcements', label: 'Announcements', roles: ['admin', 'teacher', 'student', 'parent'] },
    { to: '/profile', label: 'Profile', roles: ['admin', 'teacher', 'student', 'parent'] }
  ];

  return (
    <aside className="hidden md:block w-64 shrink-0 bg-white border-r border-gray-200 min-h-screen p-4">
      <div className="text-xl font-bold text-primary mb-6">ClassTrack</div>
      <nav className="space-y-2">
        {links
          .filter((l) => (user ? l.roles.includes(user.role) : false))
          .map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${linkBase} ${isActive ? active : 'text-gray-700'}`}
            >
              {link.label}
            </NavLink>
          ))}
      </nav>
    </aside>
  );
}