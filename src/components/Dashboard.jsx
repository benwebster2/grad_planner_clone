import { initialData } from '../data';
import SemesterColumn from './SemesterColumn';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Web Design and Development</h1>
      {initialData.years.map(year => (
        <div key={year} className="mb-8">
          <h2 className="text-xl font-semibold border-b border-gray-300">Year {year}</h2>
          <div className="flex gap-4 mt-2">
            {initialData.semesters.map(sem => (
              <SemesterColumn key={sem} title={sem} year={year} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
