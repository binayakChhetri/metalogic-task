import { ChevronDown, Search } from "lucide-react";

interface JobType {
  title: string;
  type: string;
  location: string;
  department: string;
}

const jobTypes: JobType[] = [
  {
    title: "MERN Stack Developer",
    type: "Full Time",
    location: "Lahore, Pakistan",
    department: "Software Department",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    department: "Design Team",
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Lahore, Pakistan",
    department: "Software Department",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Lahore, Pakistan",
    department: "Software Department",
  },
  {
    title: "React Native Mobile Developer",
    type: "Full Time",
    location: "Remote",
    department: "Mobile Development",
  },
  {
    title: "Flutter Developer",
    type: "Full Time",
    location: "Remote",
    department: "Mobile Development",
  },
  {
    title: "Junior UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    department: "Design Team",
  },
  {
    title: "Marketing Executive",
    type: "Full Time",
    location: "Lahore, Pakistan",
    department: "Marketing Department",
  },
];

const JobCard = ({ item }: { item: JobType }) => {
  return (
    <tr key={item.title}>
      {" "}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-gray-900">{item.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.department}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="bg-red-500 text-white px-3 py-1 text-xs rounded-md hover:bg-red-600 transition">
          Apply
        </button>
      </td>
    </tr>
  );
};

export default function VacancySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mb-1 text-red-500 font-semibold uppercase tracking-[2px]">
            Open Positions
          </h2>
          <h3 className="text-2xl font-bold mb-4">Available Vacancies</h3>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role/Position
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g. Developer"
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div className="md:w-32">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white">
                <span className="text-gray-600">All</span>
                <ChevronDown className="text-gray-400" size={16} />
              </button>
            </div>
            <div className="md:w-32 flex items-end">
              <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobTypes.map((item) => (
                  <JobCard key={item.title} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
