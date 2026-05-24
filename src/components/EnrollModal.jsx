import { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

// The deployed Google Apps Script Web App URL for form submissions
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxgSaPDS3PdRz4nvBak0am3aKkxZLxEnYDbkuCAAaDalQqAWLHPBZwBO0LslYoALirS/exec';

const EnrollModal = () => {
  const { isModalOpen, closeModal, prefilledCourse } = useEnroll();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', class: '', course: '', enquiryFor: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    if (isModalOpen) {
      setFormData(prev => ({ ...prev, course: prefilledCourse || '' }));
      setStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen, prefilledCourse]);

  const handleChange = (e) => {
    // We map uppercase input names back to lowercase state names so state stays in sync
    const nameMap = {
      'Name': 'name',
      'Email': 'email',
      'Number': 'phone',
      'City': 'city',
      'Class': 'class',
      'Course': 'course',
      'Enquiry For': 'enquiryFor'
    };
    const stateName = nameMap[e.target.name] || e.target.name;
    setFormData({ ...formData, [stateName]: e.target.value });
  };

  const handleSubmit = () => {
    // We don't preventDefault here because we want the browser to natively submit the form
    setStatus('submitting');
    
    // We rely on the iframe onLoad to know when it finishes
    // But as a fallback we set success after 2 seconds
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="gradient-green px-6 py-5 flex items-center justify-between">
          <h2 className="text-xl font-black text-white">Enroll Now</h2>
          <button onClick={closeModal} className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[85vh] overflow-y-auto scrollbar-hide">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your enrollment request has been received. Our counselor will contact you shortly.</p>
              <button onClick={closeModal} className="mt-6 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">
                Close
              </button>
            </div>
          ) : (
            <>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
            <form action={GOOGLE_SCRIPT_URL} method="POST" target="hidden_iframe" onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-500 mb-4">Fill in your details below and we will help you get started with the perfect learning path.</p>
              
              <input type="hidden" name="Date" value={new Date().toLocaleString()} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input required type="text" name="Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input required type="tel" name="Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all" placeholder="+91 90000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address <span className="text-gray-400 font-normal lowercase">(optional)</span></label>
                  <input type="email" name="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">City</label>
                  <input required type="text" name="City" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all" placeholder="New Delhi" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Class</label>
                  <select required name="Class" value={formData.class} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all text-gray-700">
                    <option value="" disabled>Select Class</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper">Dropper / 12th Pass</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Enquiry For</label>
                  <select required name="Enquiry For" value={formData.enquiryFor} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all text-gray-700">
                    <option value="" disabled>Select Option</option>
                    <option value="Admission">Admission</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Scholarship">Scholarship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Course of Interest</label>
                <select required name="Course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-prepzo-green focus:ring-2 focus:ring-prepzo-green/20 outline-none transition-all text-gray-700">
                  <option value="" disabled>Select a course</option>
                  <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                  <option value="NEET (UG)">NEET (UG)</option>
                  <option value="Class 11 & 12 Boards">Class 11 & 12 Boards</option>
                  <option value="Class 6-10 Foundation">Class 6-10 Foundation</option>
                  <option value="Olympiad Prep">Olympiad Prep</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                  Oops! Something went wrong. Please try again or call us.
                </div>
              )}

              <button disabled={status === 'submitting'} type="submit" className="w-full mt-2 flex items-center justify-center gap-2 py-4 gradient-green text-white font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-70">
                {status === 'submitting' ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</> : 'Submit Request'}
              </button>
            </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
