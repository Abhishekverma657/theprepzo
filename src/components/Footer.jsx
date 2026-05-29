import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/prepzologo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-prepzo-green-dark text-white">
      {/* Newsletter Banner */}
      <div className="bg-prepzo-green border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Stay ahead of your preparation!</h3>
            <p className="text-sm text-white/70 mt-1">Get tips, resources, and exam alerts straight to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-prepzo-yellow transition-colors"
            />
            <button className="flex items-center gap-2 px-5 py-3 bg-prepzo-yellow hover:opacity-90 text-white font-semibold rounded-xl text-sm transition-all whitespace-nowrap">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-6 xl:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Prepzo" className="h-12 w-12 rounded-full object-cover border-2 border-white/20 group-hover:border-prepzo-yellow transition-all duration-300" />
              <div className="leading-none">
                <div className="text-2xl font-black">
                  <span className="text-white">prep</span>
                  <span className="text-prepzo-yellow">zo</span>
                </div>
                <div className="text-[10px] text-white/50 tracking-widest uppercase mt-0.5">Smart Prep Platform</div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Empowering students across India with world-class coaching and technology to achieve their academic dreams.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', rule: 'evenodd' },
                { label: 'Instagram', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z', rule: 'evenodd' },
                { label: 'YouTube', path: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z', rule: 'evenodd' },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-prepzo-yellow transition-colors duration-300">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule={social.rule} d={social.path} clipRule={social.rule} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-prepzo-yellow mb-5">Programs</h3>
            <ul className="space-y-3">
              {['JEE Main & Advanced', 'NEET (UG)', 'Foundation (6-10)', 'Olympiad Prep', 'Board Boosters'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-prepzo-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-prepzo-yellow mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about-us' },
                { label: 'Courses', path: '/courses' },
                { label: 'Results', path: '/results' },
                { label: 'Prepzo Store', path: '/store' },
                { label: 'Careers', path: '/careers' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-prepzo-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-prepzo-yellow mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4 text-prepzo-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium">Call Us</p>
                  <a href="tel:+918796339455" className="text-sm text-white/80 hover:text-prepzo-yellow transition-colors">+91 87963 39455</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4 text-prepzo-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium">Email Us</p>
                  <a href="mailto:prepzo333@gmail.com" className="text-sm text-white/80 hover:text-prepzo-yellow transition-colors">prepzo333@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4 text-prepzo-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium">Office</p>
                  <p className="text-sm text-white/80">Kota, Rajasthan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Prepzo Education Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
