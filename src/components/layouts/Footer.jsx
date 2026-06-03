import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-auto font-sans border-t-4 border-indigo-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="items-center gap-3 mb-6 inline-flex">
              <div className="bg-linear-to-br from-indigo-500 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                বাজার<span className="text-indigo-400">ইনফো</span>
              </h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              ভোক্তা অধিকার নিশ্চিতে এবং সাধারণ মানুষের সুবিধার্থে প্রতিদিনের নিত্যপ্রয়োজনীয় পণ্যের সঠিক বাজারদর পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">প্রয়োজনীয় লিংক</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all inline-block text-sm">আজকের বাজারদর</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all inline-block text-sm">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all inline-block text-sm">সাধারণ জিজ্ঞাসা (FAQ)</Link></li>
              <li><Link to="/complaint" className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all inline-block text-sm">অভিযোগ করুন</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>কারওয়ান বাজার, ঢাকা-১২১৫, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <a href="tel:01828871277" className="hover:text-indigo-400 transition-colors">01828-871277</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <a href="mailto:support@bazarinfo.com" className="hover:text-indigo-400 transition-colors">support@bazarinfo.com</a>
              </li>
            </ul>
          </div>
          {/* Newsletter Box */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">আপডেট পেতে যুক্ত হোন</h3>
            <p className="text-slate-400 text-sm mb-4">দামের সর্বশেষ আপডেট পেতে আপনার ইমেইল দিন।</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল..." 
                className="w-full bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
              />
              <button className="cursor-pointer absolute right-1 top-1 bottom-1 bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-md transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} <span className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-pointer">Majharul Islam Sijan</span>. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;