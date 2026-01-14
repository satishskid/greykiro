import { Send, MessageCircle, Users, Zap, BookOpen } from "lucide-react";

export default function LabPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5">
      <div className="container-custom py-20 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/10 mb-8">
          <Users className="text-brand-blue" size={40} />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
          Join The GreyBrain Community
        </h1>

        {/* Promise */}
        <p className="text-lg md:text-xl text-gray-600 font-sans mb-10 max-w-xl mx-auto">
          Connect with 500+ healthcare professionals exploring AI. Get course updates, insights, and exclusive content.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap size={16} className="text-brand-gold" />
            Weekly AI insights
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen size={16} className="text-brand-blue" />
            Course announcements
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} className="text-green-500" />
            Peer networking
          </div>
        </div>

        {/* Join Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/greybrainsoai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#0088cc] text-white rounded-xl hover:bg-[#0088cc]/90 transition-colors text-lg font-medium shadow-lg shadow-[#0088cc]/20"
          >
            <Send size={20} />
            Join Telegram Channel
          </a>
          <a
            href="https://chat.whatsapp.com/D8pR8tE6aYeLiE6PnU7gqL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#25D366]/90 transition-colors text-lg font-medium shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={20} />
            Join WhatsApp Group
          </a>
        </div>

        {/* Trust indicators */}
        <p className="mt-10 text-sm text-gray-400">
          Free to join · Instant access · No spam
        </p>
      </div>
    </section>
  );
}
