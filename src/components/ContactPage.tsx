import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onBack: () => void;
}

export const ContactPage: React.FC<PageProps> = ({ lang, onBack }) => {
  const isBn = lang === 'bn';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>{isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
      </button>

      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-sm space-y-6 text-slate-800 dark:text-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isBn ? 'যোগাযোগ করুন (Contact Us)' : 'Get in Touch'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isBn ? 'আপনার যেকোনো প্রশ্ন, পরামর্শ বা ডাটা সংশোধনের জন্য বার্তা পাঠান' : 'Send us feedback, inquiries or data update requests'}
          </p>
        </div>

        <hr className="border-slate-200 dark:border-slate-700" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-5 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{isBn ? 'ইমেইল সাপোর্ট' : 'Email Support'}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{isBn ? 'সরাসরি যোগাযোগের ঠিকানা' : 'Direct contact address'}</p>
              </div>
              <a 
                href="mailto:support@worldbankcodes.com" 
                className="inline-block text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs sm:text-sm hover:underline break-all"
              >
                support@worldbankcodes.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {isBn ? 'আপনার বার্তা গৃহীত হয়েছে!' : 'Thank you for reaching out!'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {isBn ? 'আমরা দ্রুততম সময়ে আপনার বার্তার উত্তর দেব।' : 'We have received your message and will respond shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {isBn ? 'আপনার নাম' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {isBn ? 'ইমেইল ঠিকানা' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? 'বিষয়' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? 'বার্তা বা বিবরণ' : 'Message'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isBn ? 'বার্তা পাঠান' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
