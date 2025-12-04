// src/context/EmployeeContext.jsx
import { createContext, useState } from 'react';

export const EmployeeContext = createContext();

let nextId = 1;

const EmployeeContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const [editingEmployee, setEditingEmployee] = useState(null);


  const addEmployee = (employee) => {
    setEmployees([...employees, { id: nextId++, ...employee }]);
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(
      employees.map((emp) => (emp.id === id ? { ...emp, ...updatedData } : emp))
    );
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const cancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        editingEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        editEmployee,
        cancelEdit,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;