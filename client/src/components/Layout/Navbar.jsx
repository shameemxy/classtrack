import { useAuth } from '../../context/AuthContext.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">
      <div className="md:hidden text-lg font-bold text-primary">ClassTrack</div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-600">
          <div className="font-semibold">{user?.name}</div>
          <div className="text-xs uppercase">{user?.role}</div>
        </div>
        <button
          onClick={logout}
          className="rounded-md bg-primary text-white px-3 py-1.5 text-sm hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </header>
  );
}