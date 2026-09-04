import React, { useState, useEffect } from 'react';
import { X, Star, CheckCircle2, Send, Loader2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { sendSupportMessage, getUserSavedRating } from '../lib/supportMailService';

interface RatingFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const ratingDescriptions: Record<number, Record<Language, string>> = {
  1: { en: 'Needs Improvement', bn: 'উন্নতির প্রয়োজন', hi: 'सुधार की आवश्यकता है', ru: 'Требует улучшения', de: 'Verbesserungswürdig' },
  2: { en: 'Fair', bn: 'মোটামুটি', hi: 'ठीक-ठाक', ru: 'Удовлетворительно', de: 'Ausreichend' },
  3: { en: 'Good', bn: 'ভালো', hi: 'अच्छा', ru: 'Хорошо', de: 'Gut' },
  4: { en: 'Very Good & Helpful', bn: 'অনেক ভালো ও উপকারী', hi: 'बहुत अच्छा और उपयोगी', ru: 'Очень полезно и удобно', de: 'Sehr gut & hilfreich' },
  5: { en: 'Excellent & 100% Accurate! ⭐', bn: 'অসাধারণ ও শতভাগ নির্ভুল! ⭐', hi: 'उत्कृष्ट एवं १००% सटीक! ⭐', ru: 'Отлично и на 100% точно! ⭐', de: 'Ausgezeichnet & 100% präzise! ⭐' }
};

const categoryLabels: Record<string, Record<Language, string>> = {
  overall: { en: 'Overall Experience', bn: 'সামগ্রিক অভিজ্ঞতা', hi: 'समग्र अनुभव', ru: 'Общее впечатление', de: 'Gesamterlebnis' },
  accuracy: { en: 'Code & Routing Accuracy', bn: 'রাউটিং ও IFSC সঠিকতা', hi: 'IFSC व कोड सटीकता', ru: 'Точность БИК и реквизитов', de: 'BLZ & Routing Genauigkeit' },
  speed: { en: 'Fast Search & Speed', bn: 'দ্রুত অনুসন্ধান ও স্পিড', hi: 'त्वरित खोज और गति', ru: 'Скорость и удобство', de: 'Suchgeschwindigkeit & Performance' },
  suggestion: { en: 'Feature Suggestion', bn: 'নতুন ফিচারের পরামর্শ', hi: 'सुझाव / नई सुविधा', ru: 'Предложение по улучшению', de: 'Funktionsvorschlag / Feedback' }
};

const ratingModalTranslations: Record<Language, {
  title: string;
  subtitle: string;
  successTitle: string;
  successDesc: string;
  selectStars: string;
  categoryLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  commentLabel: string;
  commentPlaceholder: string;
  securityNotice: string;
  cancel: string;
  submit: string;
  sending: string;
}> = {
  en: {
    title: 'Rate & Feedback',
    subtitle: 'Your rating & thoughts are directly sent to our support inbox',
    successTitle: 'Thank You! Rating & Feedback Received.',
    successDesc: 'Your review has been delivered directly to our support desk.',
    selectStars: 'Select Star Rating',
    categoryLabel: 'Feedback Category:',
    nameLabel: 'Your Name (Optional):',
    namePlaceholder: 'Enter your name...',
    emailLabel: 'Email (For reply, optional):',
    emailPlaceholder: 'yourname@example.com',
    commentLabel: 'Your Feedback / Comment:',
    commentPlaceholder: 'Share your thoughts, suggestions, or how helpful the platform is...',
    securityNotice: 'Instant delivery to support desk. No external email app required.',
    cancel: 'Cancel',
    submit: 'Submit Rating',
    sending: 'Sending...'
  },
  de: {
    title: 'Bewertung & Feedback',
    subtitle: 'Ihre Bewertung & Meinung wird direkt an unseren Support übermittelt',
    successTitle: 'Vielen Dank! Bewertung & Feedback erhalten.',
    successDesc: 'Ihre Bewertung wurde erfolgreich an unser Support-Team übermittelt.',
    selectStars: 'Sterne-Bewertung wählen',
    categoryLabel: 'Feedback-Kategorie:',
    nameLabel: 'Ihr Name (Optional):',
    namePlaceholder: 'Namen eingeben...',
    emailLabel: 'E-Mail (für Rückfragen, optional):',
    emailPlaceholder: 'ihremail@example.com',
    commentLabel: 'Ihr Feedback / Kommentar:',
    commentPlaceholder: 'Teilen Sie uns Ihre Erfahrungen, Vorschläge oder Lob mit...',
    securityNotice: 'Direkte Übermittlung an den Support. Keine externe E-Mail-App erforderlich.',
    cancel: 'Abbrechen',
    submit: 'Bewertung absenden',
    sending: 'Wird gesendet...'
  },
  bn: {
    title: 'রেটিং ও মতামত দিন',
    subtitle: 'আপনার মূল্যবান রেটিং ও মতামত সরাসরি আমাদের সাপোর্ট ইনবক্সে পৌঁছে যাবে',
    successTitle: 'অসংখ্য ধন্যবাদ! আপনার রেটিং গৃহীত হয়েছে।',
    successDesc: 'আপনার বার্তাটি সফলভাবে সাপোর্ট টিমের কাছে পাঠানো সম্পন্ন হয়েছে।',
    selectStars: 'স্টার নির্বাচন করুন',
    categoryLabel: 'মতামতের বিভাগ:',
    nameLabel: 'আপনার নাম (ঐচ্ছিক):',
    namePlaceholder: 'আপনার নাম লিখুন...',
    emailLabel: 'ইমেইল (উত্তর পাওয়ার জন্য):',
    emailPlaceholder: 'yourname@example.com',
    commentLabel: 'আপনার মতামত বা বিস্তারিত বার্তা:',
    commentPlaceholder: 'আপনার অভিজ্ঞতা, সাইটের গতি কেমন লাগলো বা কোনো পরামর্শ থাকলে লিখুন...',
    securityNotice: 'বার্তা সরাসরি আমাদের সাপোর্ট সেন্টারে পাঠানো হবে। কোনো বাহ্যিক অ্যাপের প্রয়োজন নেই।',
    cancel: 'বাতিল',
    submit: 'রেটিং ও মতামত জমা দিন',
    sending: 'পাঠানো হচ্ছে...'
  },
  hi: {
    title: 'रेटिंग एवं फीडबैक भेजें',
    subtitle: 'आपका फीडबैक सीधे हमारी सपोर्ट टीम के ईमेल पर जाएगा',
    successTitle: 'धन्यवाद! आपकी रेटिंग प्राप्त हुई।',
    successDesc: 'आपका संदेश सफलतापूर्वक हमारी सपोर्ट टीम तक पहुँचा दिया गया है।',
    selectStars: 'स्टार रेटिंग चुनें',
    categoryLabel: 'विषय / श्रेणी चुनें:',
    nameLabel: 'आपका नाम (वैकल्पिक):',
    namePlaceholder: 'अपना नाम लिखें...',
    emailLabel: 'ईमेल (उत्तर पाने के लिए):',
    emailPlaceholder: 'yourname@example.com',
    commentLabel: 'आपकी राय या संदेश:',
    commentPlaceholder: 'अपनी बहुमूल्य राय, अनुभव या सुधार के सुझाव यहाँ लिखें...',
    securityNotice: 'संदेश सीधे सहायता डेस्क पर भेजा जाएगा। किसी अन्य ऐप की आवश्यकता नहीं है।',
    cancel: 'रद्द करें',
    submit: 'फीडबैक भेजें',
    sending: 'भेजा जा रहा है...'
  },
  ru: {
    title: 'Оценить и оставить отзыв',
    subtitle: 'Ваша оценка и отзыв поступают напрямую в службу поддержки',
    successTitle: 'Спасибо! Ваша оценка принята.',
    successDesc: 'Ваш отзыв успешно доставлен в нашу службу заботы о пользователях.',
    selectStars: 'Выберите оценку',
    categoryLabel: 'Категория отзыва:',
    nameLabel: 'Ваше имя (необязательно):',
    namePlaceholder: 'Введите ваше имя...',
    emailLabel: 'Email (для ответа):',
    emailPlaceholder: 'yourname@example.com',
    commentLabel: 'Ваш отзыв / комментарий:',
    commentPlaceholder: 'Поделитесь впечатлением, удобством поиска или предложите идею...',
    securityNotice: 'Мгновенная отправка в службу поддержки. Без сторонних почтовых клиентов.',
    cancel: 'Отмена',
    submit: 'Отправить отзыв',
    sending: 'Отправка...'
  }
};

const categoriesList = ['overall', 'accuracy', 'speed', 'suggestion'] as const;

export const RatingFeedbackModal: React.FC<RatingFeedbackModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
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

  const t = ratingModalTranslations[lang] || ratingModalTranslations.en;
  const activeRating = hoverRating || rating;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5 relative animate-in fade-in zoom-in-95 duration-150 text-slate-800 dark:text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shadow-inner shrink-0">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.subtitle}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3 py-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
              {t.successTitle}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              {t.successDesc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Interactive Stars Selection */}
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center space-y-2">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {t.selectStars}
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
                {ratingDescriptions[activeRating]?.[lang] || ratingDescriptions[activeRating]?.en}
              </p>
            </div>

            {/* Category Tags */}
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                {t.categoryLabel}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categoriesList.map((catId) => (
                  <button
                    key={catId}
                    type="button"
                    onClick={() => setCategory(catId)}
                    className={`py-2 px-2.5 rounded-xl text-left border text-[11px] font-semibold transition-all cursor-pointer truncate ${
                      category === catId
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {categoryLabels[catId]?.[lang] || categoryLabels[catId]?.en}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
                />
              </div>
            </div>

            {/* Message / Review text */}
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {t.commentLabel}
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t.commentPlaceholder}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 text-xs"
              />
            </div>

            {/* Security note */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{t.securityNotice}</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.submit}</span>
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
