import { NavLink, Outlet } from "react-router";

const tabs = [
  { key: "actualites", label: "Actualités" },
  { key: "produits", label: "Produits" },
  { key: "contacts", label: "Contacts" },
];

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-1/5 bg-gray-100 p-4">
        <h1 className="text-xl font-bold mb-4">Admin</h1>
        <nav className="space-y-2">
          {tabs.map(({ key, label }) => (
            <NavLink
              to={key}
              key={key}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2 rounded ${
                  isActive
                    ? "bg-normal-blue text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
