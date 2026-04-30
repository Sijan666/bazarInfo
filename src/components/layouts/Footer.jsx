import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-500 p-2 rounded-lg shadow-md shadow-indigo-200">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                বাজার<span className="text-indigo-600">ইনফো</span>
              </h2>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              ভোক্তা অধিকার নিশ্চিতে এবং সাধারণ মানুষের সুবিধার্থে প্রতিদিনের নিত্যপ্রয়োজনীয় পণ্যের সঠিক বাজারদর পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">প্রয়োজনীয় লিংক</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">আজকের বাজারদর</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/faq" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">সাধারণ জিজ্ঞাসা (FAQ)</Link></li>
              <li><Link to="/complaint" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">অভিযোগ করুন</Link></li>
            </ul>
          </div>
          {/* Top Categories */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">জনপ্রিয় ক্যাটাগরি</h3>
            <ul className="space-y-3">
              <li><button className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">চাল ও আটা</button></li>
              <li><button className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">মাছ ও মাংস</button></li>
              <li><button className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">তাজা সবজি</button></li>
              <li><button className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">তেল ও মশলা</button></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>কারওয়ান বাজার, ঢাকা-১২১৫, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>support@bazarinfo.com</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} বাজারইনফো. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;