// src/App.jsx
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import EmployeeContextProvider from './context/EmployeeContext';

function App() {
  return (
    <EmployeeContextProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <div className="w-full max-w-full mx-auto px-6 py-10 lg:px-16">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Employee Management System
            </h1>
            <p className="text-xl text-gray-400">Add, edit, and manage your team</p>
          </header>

          {/* Form Card */}
          <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 mb-12 border border-gray-700">
            <EmployeeForm />
          </div>

          {/* Table Card */}
          <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
            <EmployeeTable />
          </div>
        </div>
      </div>
    </EmployeeContextProvider>
  );
}

export default App;