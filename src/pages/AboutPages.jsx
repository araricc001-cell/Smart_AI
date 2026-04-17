import { useParams } from "react-router-dom";
import students from "../components/constant";

const StudentDetails = () => {
  const { id } = useParams();

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Student not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-6">

        <div className="flex flex-col items-center">
          <img
            src={student.image}
            alt={student.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {student.name}
          </h2>

          <p className="text-gray-500">{student.email}</p>
        </div>

        <div className="mt-6 space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Gender:</span> {student.gender}
          </p>

          <p>
            <span className="font-semibold">Subject:</span> {student.subject}
          </p>

          <p>
            <span className="font-semibold">Level:</span> {student.level}
          </p>

          <p className="mt-4">
            <span className="font-semibold">About Me:</span>
          </p>

          <p className="text-gray-600">{student.about}</p>
        </div>

      </div>

    </div>
  );
};

export default StudentDetails;