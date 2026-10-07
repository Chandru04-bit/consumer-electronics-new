import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Award,
  ShieldCheck,
  Cpu,
  Volume2,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { BRAND_STATS } from '../data/products';

export default function About() {
  const leadershipTeam = [
    {
      name: "Vikram Sengupta",
      role: "Founder & Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      bio: "Former lead acoustic engineer with 14+ years pioneering wireless audio transceivers."
    },
    {
      name: "Dr. Elena Rostova",
      role: "VP of Acoustic Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "PhD in Electroacoustics; holds 6 international patents in hybrid active noise suppression."
    },
    {
      name: "Marcus Chen",
      role: "Head of Industrial Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bio: "Red Dot Best of the Best winner specializing in ergonomic aerospace alloy wearable housings."
    },
    {
      name: "Rhea Deshmukh",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Ex-smartwear tech lead driven by making high-grade biometric tracking accessible to everyone."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-600 dark:text-brand-400 mb-4">
          <Sparkles size={14} /> PIONEERING THE ACOUSTIC REVOLUTION
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight">
          Engineered for Sound. <span className="text-gradient-cyan">Designed for the Relentless.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
          At VOLTIX, we believe exceptional sound and precision smart wearables shouldn't be luxury privileges. We craft audio masterworks that elevate everyday experiences.
        </p>
      </section>

      {/* Brand Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {BRAND_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 text-center shadow-sm hover:border-brand-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-brand-500 font-display">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.suffix}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Origin Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block">
              OUR ORIGIN STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white leading-tight">
              From Sound Engineering Labs to Over 1.5 Million Ears
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded in 2022 by a passionate team of electroacoustic scientists and industrial designers, VOLTIX began with a simple yet bold ambition: replace hollow, overpriced consumer tech with precision-tuned titanium audio drivers and military-grade smart wearables.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every curve, circuit, and acoustic diaphragm is rigorously calibrated in our state-of-the-art SoundLab, undergoing 10,000+ drop tests, extreme thermal chamber cycles, and frequency response sweeps to ensure pure acoustic perfection.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={16} className="text-brand-500" />
                <span>Custom Titanium & Bio-Cellulose Acoustic Diaphragms</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={16} className="text-brand-500" />
                <span>Proprietary Beast Mode™ 28ms Ultra-Low Latency RF</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={16} className="text-brand-500" />
                <span>100% Eco-conscious 0-plastic biodegradable packaging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                alt="Voltix Sound Engineering Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="bg-slate-100 dark:bg-dark-surface/60 border-y border-slate-200 dark:border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
              THE FOUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
              Pioneering Core Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                <Volume2 size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                TruAcoustics™ Drivers
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Titanium-coated micro-diaphragms designed for rich punchy sub-bass and distortion-free crystalline highs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                GaN III Semiconductors
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Gallium Nitride power modules generating higher energy efficiency in compact pocket architectures.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                ArmorShield Durability
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                MIL-STD-810H shockproofing and IPX7/IP68 submersible water resistance for extreme conditions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Eco-Conscious R&D
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Recycled aerospace aluminum enclosures and zero single-use plastic inside packaging containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
            THE MINDS BEHIND THE SOUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
            Leadership & Sound Masters
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm group hover:border-brand-500/40 transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-bold text-brand-600 dark:text-brand-400">{member.role}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white p-8 sm:p-14 border border-brand-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight max-w-2xl mx-auto text-balance">
            Ready to Experience Sound <span className="whitespace-nowrap">Re&#8209;engineered?</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Upgrade your daily commute, workouts, and gaming marathons with VOLTIX audio precision today.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-sm shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>EXPLORE ALL PRODUCTS</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
