// src/app/projects/page.tsx
export default function ProjectsPage() {
  // Mock data representing items to display in our dashboard grid
  const mockProjects = [
    { id: 1, title: "Nexus E-Commerce Dashboard", tech: "Next.js, Tailwind, TypeScript", status: "Active" },
    { id: 2, title: "Real-Time Telemetry Stream", tech: "Node.js, WebSockets, Redux Toolkit", status: "Completed" },
    { id: 3, title: "Decentralized Identity Engine", tech: "React, Jose JWT, Edge Caching", status: "Planning" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Project Portfolio</h1>
        <p className="mt-2 text-gray-600 text-sm">Welcome to your dynamically routed project registry workspace.</p>

        {/* Responsive layout grid showing custom Tailwind styled cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <div key={project.id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                project.status === "Active" ? "bg-green-50 text-green-700" :
                project.status === "Completed" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
              }`}>
                {project.status}
              </span>
              <h2 className="text-lg font-bold text-gray-800 mt-3">{project.title}</h2>
              <p className="text-xs text-gray-400 mt-1 font-mono">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
