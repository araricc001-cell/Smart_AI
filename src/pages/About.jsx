import { Link } from "react-router-dom";
import students from "../components/constant";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 bg-linear-to-br from-black to-green-900 h-screen">

      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Students
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {students.map((student) => (
          <Link to={`/student/${student.id}`} key={student.id}>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">

              <img
                src={student.image}
                alt={student.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {student.name}
              </h3>

              <p className="text-gray-500">{student.subject}</p>

              <p className="text-sm text-gray-400">{student.level}</p>

            </div>

          </Link>
        ))}
      </div>

    </div>
  );
};

export default About;