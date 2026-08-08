import React, { useState } from 'react';
import { X, HeartHandshake, CheckCircle2, Send } from 'lucide-react';
import { Language, Branch } from '../types';

interface ReportIssueModalProps {
  branch?: Branch | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReportIssueModal: React.FC<ReportIssueModalProps> = ({
  branch,
  isOpen,
  onClose,
  lang
}) => {
  const [issueType, setIssueType] = useState('wrong_routing');
  const [details, setDetails] = useState('');
  const [userContact, setUserContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isBn = lang === 'bn';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDetails('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4 relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-400 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBn ? 'তথ্য সংশোধন বা রিপোর্ট করুন' : 'Report Wrong Information'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isBn
                ? 'সঠিক ডাটা বজায় রাখতে আপনার মূল্যবান মতামত জানান'
                : 'Help keep BD Bank Info accurate & updated'}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2 py-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              {isBn ? 'ধন্যবাদ! আপনার রিপোর্ট জমা নেওয়া হয়েছে।' : 'Thank You! Report Received.'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {isBn
                ? 'আমাদের এডমিন টিম বাংলাদেশ ব্যাংকের লেটেস্ট ফাইলে তথ্যটি যাচাই করবে।'
                : 'Our admin team will verify this with Bangladesh Bank records.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Target Branch Note */}
            {branch && (
              <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700/80">
                <span className="text-slate-500 dark:text-slate-400 font-medium block">Target Entity:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {branch.bank_name} - {branch.name} ({branch.routing_number})
                </span>
              </div>
            )}

            {/* Issue Type */}
            <div>
              <label className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {isBn ? 'সমস্যার ধরন:' : 'Select Issue Type:'}
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
              >
                <option value="wrong_routing" className="dark:bg-slate-800">{isBn ? 'ভুল রাউটিং নম্বর (Wrong Routing Number)' : 'Wrong Routing Number'}</option>
                <option value="wrong_swift" className="dark:bg-slate-800">{isBn ? 'ভুল সুইফট কোড (Wrong SWIFT Code)' : 'Wrong SWIFT Code'}</option>
                <option value="address_change" className="dark:bg-slate-800">{isBn ? 'শাখার ঠিকানা পরিবর্তন (Address/Branch Relocated)' : 'Branch Relocated / Address Change'}</option>
                <option value="missing_branch" className="dark:bg-slate-800">{isBn ? 'শাখা খুঁজে পাওয়া যাচ্ছে না (Missing Branch)' : 'Missing Branch'}</option>
                <option value="other" className="dark:bg-slate-800">{isBn ? 'অন্যান্য তথ্য সংশোধন (Other Issue)' : 'Other'}</option>
              </select>
            </div>

            {/* Correct Information Details */}
            <div>
              <label className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {isBn ? 'সঠিক তথ্য বিস্তারিত লিখুন:' : 'Correct Information & Details:'}
              </label>
              <textarea
                required
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={
                  isBn
                    ? 'উদাহরণ: এই শাখার নতুন রাউটিং নম্বর হলো ১২৫২৬০৯৯৯ এবং শাখা স্থানান্তরিত হয়েছে...'
                    : 'Provide correct routing number or official address update...'
                }
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Optional Email */}
            <div>
              <label className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {isBn ? 'আপনার ইমেইল (ঐচ্ছিক):' : 'Your Email (Optional):'}
              </label>
              <input
                type="email"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
                placeholder="email@example.com"
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              >
                {isBn ? 'বাতিল' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 dark:bg-emerald-600 rounded-lg hover:bg-emerald-800 dark:hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isBn ? 'রিপোর্ট পাঠান' : 'Submit Report'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
