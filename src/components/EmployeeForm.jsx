import { useContext, useState, useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeForm = () => {
  const { addEmployee, updateEmployee, editingEmployee, cancelEdit } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    jobDescription: '',
    jobRole: ''
  });

  useEffect(() => {
    if (editingEmployee) setFormData(editingEmployee);
    else resetForm();
  }, [editingEmployee]);

  const resetForm = () => {
    setFormData({ firstName: '', lastName: '', jobTitle: '', jobDescription: '', jobRole: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.jobTitle) {
      alert('Please fill First Name, Last Name, and Job Title');
      return;
    }

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, formData);
    } else {
      addEmployee(formData);
    }
    resetForm();
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-10">
        {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name *"
          className="px-6 py-4 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name *"
          className="px-6 py-4 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title *"
          className="px-6 py-4 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="jobRole"
          value={formData.jobRole}
          onChange={handleChange}
          placeholder="Job Role (e.g. Frontend, Manager)"
          className="px-6 py-4 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500"
        />
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Job Description"
          rows="4"
          className="md:col-span-2 px-6 py-4 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 resize-none"
        />

        <div className="md:col-span-2 flex gap-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-2xl transition transform hover:scale-105 shadow-lg"
          >
            {editingEmployee ? 'Update Employee' : 'Add Employee'}
          </button>
          {editingEmployee && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-12 rounded-2xl transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;