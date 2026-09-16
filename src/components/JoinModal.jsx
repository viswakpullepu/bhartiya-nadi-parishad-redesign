import React, { useState } from 'react';
import { X, Droplets, CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Uttar Pradesh',
    riverInterest: 'Hindon River Basin',
    role: 'River Warrior (Field Action)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission to BNP endpoint
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2B8EE8]/20 overflow-hidden text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10B981] mb-1">
              <Droplets className="w-4 h-4" />
              <span>National Volunteer Network</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1D33] mb-2">
              Join as a River Warrior
            </h3>
            <p className="text-xs sm:text-sm text-[#425B76] mb-6">
              Become part of India’s foremost citizen-led river conservation network. Lend your hands, voice, and expertise to restore our sacred waters.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-[#0A1D33] mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Anand Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] focus:bg-white transition-colors text-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#0A1D33] mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] focus:bg-white transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#0A1D33] mb-1">Phone / WhatsApp</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] focus:bg-white transition-colors text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#0A1D33] mb-1">State / Region</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] text-gray-800"
                  >
                    <option>Uttar Pradesh</option>
                    <option>Bihar</option>
                    <option>Uttarakhand</option>
                    <option>Maharashtra</option>
                    <option>Madhya Pradesh</option>
                    <option>Delhi NCR</option>
                    <option>Other State</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-[#0A1D33] mb-1">Area of Interest</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] text-gray-800"
                  >
                    <option>River Warrior (Field Action)</option>
                    <option>River Panchayat Leader</option>
                    <option>Youth Fellowship & Research</option>
                    <option>Legal & Policy Advocacy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#0A1D33] mb-1">
                  Local River or Water Issue (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us about the river or water body near you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] focus:bg-white transition-colors text-gray-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#1C71C6] via-[#2B8EE8] to-[#059669] hover:shadow-lg hover:shadow-[#2B8EE8]/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                <span>Submit Registration</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#0A1D33]">
              Welcome to the Movement!
            </h4>
            <p className="text-sm text-[#425B76] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#0A1D33]">{formData.fullName}</span>. Your details have been registered with the Bhartiya Nadi Parishad state coordination desk. A coordinator will reach out shortly.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#0A1D33] text-white hover:bg-[#1C71C6] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
