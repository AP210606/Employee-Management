import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeRow = ({ employee }) => {
  const { editEmployee, deleteEmployee } = useContext(EmployeeContext);

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition">
      <td className="px-10 py-6 text-white">{employee.firstName}</td>
      <td className="px-10 py-6 text-white">{employee.lastName}</td>
      <td className="px-10 py-6 text-white font-semibold">{employee.jobTitle}</td>
      <td className="px-10 py-6 text-gray-400 max-w-xs truncate">
        {employee.jobDescription || '—'}
      </td>
      <td className="px-10 py-6 text-blue-400 font-medium">
        {employee.jobRole || 'Not specified'}
      </td>
      <td className="px-10 py-6 text-center">
        <button
          onClick={() => editEmployee(employee)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-xl mr-4 transition"
        >
          Edit
        </button>
        <button
          onClick={() => confirm('Delete this employee?') && deleteEmployee(employee.id)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;