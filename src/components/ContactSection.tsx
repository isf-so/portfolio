import React from 'react';
import { ArrowLeft, Mail, Phone, Instagram } from 'lucide-react';

interface ContactSectionProps {
  onBack: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 hover:text-gray-300 transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Retour</span>
      </button>

      <div className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Nom</label>
            <input
              type="text"
              className="w-full bg-black border border-gray-800 p-3 rounded focus:outline-none focus:border-white"
            />
          </div>
          
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-black border border-gray-800 p-3 rounded focus:outline-none focus:border-white"
            />
          </div>
          
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full bg-black border border-gray-800 p-3 rounded focus:outline-none focus:border-white"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
          >
            Envoyer
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Phone size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;