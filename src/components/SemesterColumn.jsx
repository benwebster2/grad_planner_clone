import CourseCard from './CourseCard';
import { initialData } from '../data';

export default function SemesterColumn({ title, year }) {
  const courses = initialData.courses.filter(c => c.semester === title && c.year === year);
  
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded-lg min-h-[200px]">
      <h3 className="font-bold text-blue-800">{title} {year}</h3>
      {courses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  );
}
