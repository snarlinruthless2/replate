import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RoleType, FormData } from '../types';

export const ContactSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>('business');
  const [formData, setFormData] = useState<FormData>({
    role: 'business',
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      role: 'business',
      name: '',
      email: '',
      organization: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#1e4d2b] dark:bg-[#0d2214] py-20 sm:py-28 text-[#faf6ef] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column: Mission & Contact info */}
        <div>
          <p className="text-[#e8820c] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 font-display">
            Start rescuing
            <br />
            <span className="italic text-[#f5a83c] font-serif">food today.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8d4c0] dark:text-[#a0c5aa] leading-relaxed mb-8">
            Whether you want to donate food, register your charity, or just ask a question — our student team would love to hear from you.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-[#2a6639] dark:bg-[#1a3822] rounded-xl flex items-center justify-center text-lg shrink-0 border border-[#3d754e]/30">
                <span role="img" aria-label="email">📧</span>
              </div>
              <div>
                <p className="text-xs text-[#4a8c5c] dark:text-[#76b68a] font-semibold uppercase tracking-wide">
                  Email us
                </p>
                <a
                  href="mailto:replate_contact@yahoo.com"
                  className="text-[#faf6ef] font-medium hover:text-[#f5a83c] transition-colors text-sm sm:text-base underline-offset-4 hover:underline"
                >
                  replate_contact@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-[#2a6639] dark:bg-[#1a3822] rounded-xl flex items-center justify-center text-lg shrink-0 border border-[#3d754e]/30">
                <span role="img" aria-label="school">🏫</span>
              </div>
              <div>
                <p className="text-xs text-[#4a8c5c] dark:text-[#76b68a] font-semibold uppercase tracking-wide">
                  Who we are
                </p>
                <p className="text-[#b8d4c0] dark:text-[#a0c5aa] text-xs sm:text-sm">
                  A team of 9th-grade students on a mission to decrease world hunger
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Card */}
        <div className="bg-[#faf6ef] dark:bg-[#18261d] text-[#3d2b1f] dark:text-[#e4efe7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e8dece] dark:border-[#283e30] transition-colors duration-200">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e4d2b] dark:text-[#faf6ef] mb-6 font-display">
            Join the movement
          </h3>

          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-[#1e4d2b]/10 dark:bg-emerald-500/20 text-[#1e4d2b] dark:text-emerald-400 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#1e4d2b] dark:text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-[#1e4d2b] dark:text-[#faf6ef] mb-2 font-display">
                Thank you, {formData.name || 'Friend'}!
              </h4>
              <p className="text-sm text-[#6b4c38] dark:text-[#a0b5a4] max-w-sm mb-6 leading-relaxed">
                We received your interest as a <span className="font-semibold text-[#e8820c]">{formData.role}</span>. Our 9th-grade student team will get in touch with you shortly at <span className="font-semibold text-[#1e4d2b] dark:text-[#76b68a]">{formData.email}</span>.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#1e4d2b] hover:bg-[#2a6639] text-[#faf6ef] px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Role Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b4c38] dark:text-[#9bb19f] block mb-1.5">
                  I am a…
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['business', 'charity', 'volunteer'] as RoleType[]).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => {
                        setSelectedRole(role);
                        setFormData((prev) => ({ ...prev, role }));
                      }}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold capitalize border transition-all ${
                        selectedRole === role
                          ? 'bg-[#1e4d2b] text-[#faf6ef] border-[#1e4d2b] dark:bg-emerald-700 dark:border-emerald-700 shadow-sm'
                          : 'bg-white dark:bg-[#1e2f24] text-[#3d2b1f] dark:text-[#d1ecd7] border-[#e8dece] dark:border-[#2d4737] hover:border-[#4a8c5c]'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b4c38] dark:text-[#9bb19f] block mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white dark:bg-[#1e2f24] border border-[#e8dece] dark:border-[#2d4737] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] dark:text-[#faf6ef] placeholder:text-[#a09083] dark:placeholder:text-[#678170] focus:outline-none focus:border-[#1e4d2b] dark:focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b4c38] dark:text-[#9bb19f] block mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white dark:bg-[#1e2f24] border border-[#e8dece] dark:border-[#2d4737] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] dark:text-[#faf6ef] placeholder:text-[#a09083] dark:placeholder:text-[#678170] focus:outline-none focus:border-[#1e4d2b] dark:focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b4c38] dark:text-[#9bb19f] block mb-1.5">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  placeholder="Green Table Café"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-white dark:bg-[#1e2f24] border border-[#e8dece] dark:border-[#2d4737] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] dark:text-[#faf6ef] placeholder:text-[#a09083] dark:placeholder:text-[#678170] focus:outline-none focus:border-[#1e4d2b] dark:focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b4c38] dark:text-[#9bb19f] block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a bit about how you'd like to get involved…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white dark:bg-[#1e2f24] border border-[#e8dece] dark:border-[#2d4737] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] dark:text-[#faf6ef] placeholder:text-[#a09083] dark:placeholder:text-[#678170] focus:outline-none focus:border-[#1e4d2b] dark:focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#e8820c] hover:bg-[#f5a83c] active:scale-98 text-white font-semibold py-3.5 rounded-xl transition-all text-sm mt-1 shadow-md cursor-pointer"
              >
                Send My Info →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
