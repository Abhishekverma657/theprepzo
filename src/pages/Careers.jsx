import React from 'react';
import { Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Join the Prepzo Team</h1>
        <p className="text-lg text-gray-600">
          We are on a mission to democratize high-quality education. If you are passionate about education and technology, we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Senior Physics Faculty', type: 'Full-time', location: 'Noida, UP' },
          { title: 'Frontend Developer (React)', type: 'Full-time', location: 'Remote / Noida' },
          { title: 'Student Counselor', type: 'Full-time', location: 'Noida, UP' },
          { title: 'Content Writer (Academics)', type: 'Part-time', location: 'Remote' }
        ].map((job, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{job.location} &bull; {job.type}</p>
              </div>
              <div className="h-10 w-10 bg-prepzo-light-green rounded-lg flex items-center justify-center text-prepzo-green">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Looking for an experienced professional to join our fast-growing team and make an impact on thousands of students.
            </p>
            <button className="text-sm font-bold text-prepzo-green bg-prepzo-light-green px-5 py-2.5 rounded-lg hover:bg-prepzo-green hover:text-white transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
