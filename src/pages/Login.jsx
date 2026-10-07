import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Zap, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please enter valid credentials');
      return;
    }

    try {
      await login(email, password, rememberMe);
      navigate(from, { replace: true });
    } catch (err) {
      toast.error('Login failed. Please try again.');
    }
  };

  const handleAutofillDemo = () => {
    setEmail('alex.mercer@voltixaudio.com');
    setPassword('Voltix2026!');
    setErrors({});
    toast.success('Demo credentials loaded! Click Sign In.', { icon: '⚡' });
  };

  const handleForgotPassword = () => {
    toast('Password reset link sent to your registered email!', {
      icon: '✉️',
      duration: 4000
    });
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-brand-500 to-blue-600 p-0.5 shadow-glow-cyan/50 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-brand-500 fill-brand-500" />
              </div>
            </div>
            <span className="font-display font-black text-3xl tracking-wider text-slate-900 dark:text-white">
              VOLTIX<span className="text-brand-500">.</span>
            </span>
          </Link>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Welcome Back, Sound Explorer
          </h2>
          <p className="text-xs text-slate-400">
            Sign in to access your orders, saved wishlist, and member discounts
          </p>
        </div>

        {/* Form Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-6">
          
          {/* Quick Demo Autofill Button */}
          <button
            onClick={handleAutofillDemo}
            type="button"
            className="w-full py-2 px-3 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 border border-brand-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles size={14} />
            <span>Click to Autofill Demo Account</span>
          </button>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                />
              </div>
              {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.password ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-[11px] text-rose-500 mt-1">{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand-500 focus:ring-brand-500 accent-brand-500 cursor-pointer"
                />
                <span>Remember me on this browser</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow-cyan transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              {loading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <span>Sign In to Account</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Switch to Signup */}
          <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            <span>Don't have a VOLTIX account? </span>
            <Link to="/signup" className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
              Create One Free
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
