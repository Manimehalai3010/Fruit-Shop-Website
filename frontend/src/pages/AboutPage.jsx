// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Truck, Award } from 'lucide-react';

const TEAM = [
  { name: 'Aruna Krishnan', role: 'Founder & Farm Liaison', emoji: '👩‍🌾', color: 'from-green-300 to-leaf-500' },
  { name: 'Vijay Murugesh', role: 'Head of Logistics', emoji: '🚛', color: 'from-blue-300 to-blue-500' },
  { name: 'Deepa Shankar', role: 'Quality & Sourcing', emoji: '🔬', color: 'from-purple-300 to-purple-500' },
  { name: 'Ravi Kumar', role: 'Customer Experience', emoji: '🤝', color: 'from-orange-300 to-brand-500' },
];

const VALUES = [
  { icon: <Leaf size={24} />, title: 'Farm Direct', desc: 'We work directly with 80+ small and mid-sized farms across India, cutting out middlemen.', color: 'bg-green-100 text-green-600' },
  { icon: <Heart size={24} />, title: 'Community First', desc: 'Every purchase supports local farmers and their families — a truly circular ecosystem.', color: 'bg-rose-100 text-rose-600' },
  { icon: <Truck size={24} />, title: 'Speed & Freshness', desc: 'Our cold-chain logistics guarantee fruits arrive at peak freshness, usually within 2 hours.', color: 'bg-blue-100 text-blue-600' },
  { icon: <Award size={24} />, title: 'No Compromise Quality', desc: 'Every batch is inspected before dispatch. If it\'s not good enough for us, it won\'t reach you.', color: 'bg-amber-100 text-amber-600' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h1 className="section-title mb-5">We're FrescoFruits — <br/><span className="text-brand-500 italic">Rooted in Freshness</span></h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We started in 2021 with a simple belief: everyone deserves access to truly fresh, seasonal, 
            chemical-free fruits. Today, we serve 10,000+ households across South India — 
            and we're just getting started.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-full aspect-square bg-gradient-to-br from-brand-100 to-brand-300 rounded-4xl flex items-center justify-center text-[10rem]">
              🥭
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Our Story</p>
            <h2 className="section-title text-3xl">From a Madurai Kitchen to 10,000 Homes</h2>
            <p className="text-gray-600 leading-relaxed">
              It all started when founder Aruna Krishnan couldn't find decent Alphonso mangoes in the 
              local supermarket during peak season. She drove to Ratnagiri, bought directly from a farm, 
              and brought back crates to share with friends. The response was overwhelming.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began as a WhatsApp group for mango lovers became a full-scale fruit delivery service, 
              now partnering with 80+ farms across Maharashtra, Tamil Nadu, Punjab, Himachal Pradesh, 
              and Andhra Pradesh. Our mission: bring real freshness, real nutrition, and real flavour 
              back to every home.
            </p>
            <Link to="/shop" className="btn-primary inline-flex">Shop Our Fruits</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card p-7 text-center hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">The Team Behind the Freshness</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4`}>
                  {member.emoji}
                </div>
                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
