// src/components/EmployeeTable.jsx
import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-8">
        <h2 className="text-4xl font-bold text-white">Employee Directory</h2>
      </div>

      {employees.length === 0 ? (
        <div className="p-20 text-center">
          <p className="text-gray-400 text-xl">No employees added yet. Add one above!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/80">
              <tr>
                <th className="px-10 py-6 text-left text-gray-300">First Name</th>
                <th className="px-10 py-6 text-left text-gray-300">Last Name</th>
                <th className="px-10 py-6 text-left text-gray-300">Job Title</th>
                <th className="px-10 py-6 text-left text-gray-300">Description</th>
                <th className="px-10 py-6 text-left text-gray-300">Role</th>
                <th className="px-10 py-6 text-center text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <EmployeeRow key={emp.id} employee={emp} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default EmployeeTable;