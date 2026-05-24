import { createContext, useState, useContext } from 'react';

const EnrollContext = createContext();

export const useEnroll = () => useContext(EnrollContext);

export const EnrollProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');

  const openModal = (courseName = '') => {
    setPrefilledCourse(courseName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setPrefilledCourse(''), 300); // Clear after animation
  };

  return (
    <EnrollContext.Provider value={{ isModalOpen, openModal, closeModal, prefilledCourse }}>
      {children}
    </EnrollContext.Provider>
  );
};
