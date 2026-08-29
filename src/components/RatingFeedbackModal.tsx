import React, { useState, useEffect } from 'react';
import { X, Star, Heart, CheckCircle2, Send, MessageSquare, Sparkles, ShieldCheck, Loader2 } from 'lucide-react';
import { Language } from '../types';
import { sendSupportMessage, getUserSavedRating, ADMIN_EMAIL } from '../lib/supportMailService';

interface RatingFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RatingFeedbackModal: React.FC<RatingFeedbackModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [category, setCategory] = useState<string>('overall');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const saved = getUserSavedRating();
    if (saved) {
      setRating(saved);
    }
  }, []);

  if (!isOpen) return null;

  const ratingDescriptions: Record<number, { en: string; bn: string; hi: string }> = {
    1: { en: 'Needs Improvement', bn: 'উন্নতির প্রয়োজন', hi: 'सुधार की आवश्यकता है' },
    2: { en: 'Fair', bn: 'মোটামুটি', hi: 'ठीक-ठाক' },
    3: { en: 'Good', bn: 'ভালো', hi: 'अच्छा' },
    4: { en: 'Very Good & Helpful', bn: 'অনেক ভালো ও উপকারী', hi: 'बहुत अच्छा और उपयोगी' },
    5: { en: 'Excellent & 100% Accurate! ⭐', bn: 'অসাধারণ ও শতভাগ নির্ভুল! ⭐', hi: 'उत्कृष्ट एवं १००% सटीक! ⭐' }
  };

  const categories = [
    { id: 'overall', label_en: 'Overall Experience', label_bn: 'সামগ্রিক অভিজ্ঞতা', label_hi: 'समग्र अनुभव' },
    { id: 'accuracy', label_en: 'Code & IFSC Accuracy', label_bn: 'রাউটিং ও IFSC সঠিকতা', label_hi: 'IFSC व कोड सटीकता' },
    { id: 'speed', label_en: 'Fast Search & Speed', label_bn: 'দ্রুত অনুসন্ধান ও স্পিড', label_hi: 'त्वरित खोज और गति' },
    { id: 'suggestion', label_en: 'Feature Suggestion', label_bn: 'নতুন ফিচারের পরামর্শ', label_hi: 'सुझाव / नई सुविधा' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendSupportMessage({
      type: 'rating_feedback',
      senderName: name || 'User Rating & Review',
      senderEmail: email,
      subject: `⭐ ${rating}-Star Rating & Feedback from ${name || 'User'} (${category})`,
      message: comment || `User gave a ${rating}/5 star rating for ${category}.`,
      rating: rating,
      category: category
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const activeRating = hoverRating || rating;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5 relative animate-in fade-in zoom-in-95 duration-150 text-slate-800 dark:text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shadow-inner">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isHi ? 'रेटिंग एवं फीडबैक भेजें' : isBn ? 'রেটিং ও মতামত দিন' : 'Rate & Feedback'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isHi
                ? 'आपका फीडबैक सीधे हमारी सपोर्ट टीम के ईमेल पर जाएगा'
                : isBn
                ? 'আপনার মূল্যবান রেটিং ও মতামত সরাসরি আমাদের সাপোর্ট ইনবক্সে পৌঁছে যাবে'
                : 'Your rating & thoughts are directly sent to our support inbox'}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3 py-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
              {isHi ? 'धन्यवाद! आपकी रेटिंग प्राप्त हुई।' : isBn ? 'অসংখ্য ধন্যবাদ! আপনার রেটিং গৃহীত হয়েছে।' : 'Thank You! Rating & Feedback Received.'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              {isHi
                ? 'आपका संदेश सफलतापूर्वक हमारी सपोर्ट ईमेल पर भेज दिया गया है।'
                : isBn
                ? 'আপনার বার্তাটি সফলভাবে অ্যাডমিন জিমেইলে পাঠানো সম্পন্ন হয়েছে।'
                : 'Your message has been delivered directly to our support desk.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Interactive Stars Selection */}
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center space-y-2">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {isHi ? 'स्टार रेटिंग चुनें' : isBn ? 'স্টার নির্বাচন করুন' : 'Select Star Rating'}
              </span>
              <div className="flex items-center justify-center gap-2 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1.5 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                  >
                    <Star
                      className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors ${
                        star <= activeRating
                          ? 'fill-amber-400 text-amber-500 filter drop-shadow-xs'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-400 h-5">
                {isHi
                  ? ratingDescriptions[activeRating]?.hi
                  : isBn
                  ? ratingDescriptions[activeRating]?.bn
                  : ratingDescriptions[activeRating]?.en}
              </p>
            </div>

            {/* Category Tags */}
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isHi ? 'বিষয় নির্বাচন করুন:' : isBn ? 'মতামতের বিভাগ:' : 'Feedback Category:'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`py-2 px-2.5 rounded-xl text-left border text-[11px] font-semibold transition-all cursor-pointer truncate ${
                      category === cat.id
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {isHi ? cat.label_hi : isBn ? cat.label_bn : cat.label_en}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHi ? 'आपका नाम (वैकल्पिक)' : isBn ? 'আপনার নাম (ঐচ্ছিক)' : 'Your Name (Optional)'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isBn ? 'নাম লিখুন...' : 'Enter your name...'}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHi ? 'ईमेल (उत्तर पाने के लिए)' : isBn ? 'ইমেইল (উত্তর পাওয়ার জন্য)' : 'Email (For reply)'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
                />
              </div>
            </div>

            {/* Message / Review text */}
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {isHi ? 'आपकी राय या संदेश:' : isBn ? 'আপনার মতামত বা বিস্তারিত বার্তা:' : 'Your Feedback / Comment:'}
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                  isHi
                    ? 'अपनी बहुमूल्य राय या सुधार के सुझाव यहाँ लिखें...'
                    : isBn
                    ? 'আপনার অভিজ্ঞতা, সাইটের গতি কেমন লাগলো বা কোনো পরামর্শ থাকলে লিখুন...'
                    : 'Share your thoughts, suggestions, or how helpful the platform is...'
                }
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
              />
            </div>

            {/* Security note */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>
                {isBn
                  ? `বার্তা সরাসরি আমাদের সাপোর্ট সেন্টারে পাঠানো হবে। কোনো থার্ড পার্টি অ্যাপ খুলতে হবে না।`
                  : `Instant delivery to support desk. No external email app required.`}
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              >
                {isHi ? 'रद्द करें' : isBn ? 'বাতিল' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isBn ? 'পাঠানো হচ্ছে...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isHi ? 'फीडबैक भेजें' : isBn ? 'রেটিং ও মতামত জমা দিন' : 'Submit Rating'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
