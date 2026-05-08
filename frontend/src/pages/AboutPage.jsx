import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Truck, Award } from 'lucide-react';

const TEAM = [
  {
    name: 'Aruna Krishnan',
    role: 'Founder & Farm Liaison',
    emoji: '👩‍🌾',
    color: 'from-green-300 to-green-500',
  },
  {
    name: 'Vijay Murugesh',
    role: 'Head of Logistics',
    emoji: '🚛',
    color: 'from-blue-300 to-blue-500',
  },
  {
    name: 'Deepa Shankar',
    role: 'Quality & Sourcing',
    emoji: '🔬',
    color: 'from-purple-300 to-purple-500',
  },
  {
    name: 'Ravi Kumar',
    role: 'Customer Experience',
    emoji: '🤝',
    color: 'from-orange-300 to-orange-500',
  },
];

const VALUES = [
  {
    icon: <Leaf size={24} />,
    title: 'Farm Direct',
    desc: 'We partner directly with trusted farms across India to ensure freshness and fair pricing.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: <Heart size={24} />,
    title: 'Community First',
    desc: 'Every order supports local farmers and sustainable agriculture.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: <Truck size={24} />,
    title: 'Fast Delivery',
    desc: 'Cold-chain logistics ensure fruits arrive fresh within hours.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: <Award size={24} />,
    title: 'Premium Quality',
    desc: 'Every fruit batch is carefully inspected before delivery.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white pt-20">

      {/* HERO */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">

        {/* Blurs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 bg-white shadow-md border border-green-100 rounded-full px-5 py-2 mb-6">
            <span className="text-xl">🌱</span>
            <span className="text-sm font-semibold text-green-700">
              Organic • Farm Fresh • Delivered Daily
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">
            We're <span className="text-green-600 italic">FrescoFruits</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            Bringing naturally fresh, handpicked fruits directly from Indian farms
            to your doorstep with love, care, and uncompromising quality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/shop"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            >
              Shop Fruits
            </Link>

            <Link
              to="/contact"
              className="bg-white border border-gray-200 hover:border-green-400 px-8 py-4 rounded-2xl font-semibold transition duration-300"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-orange-300 blur-3xl opacity-20 rounded-full" />

            <div className="relative bg-gradient-to-br from-green-100 to-orange-100 rounded-[40px] p-10 shadow-2xl">
              <div className="text-[10rem] text-center animate-bounce">
                🥭
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-green-600 font-bold mb-4">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              From a Small Kitchen to Thousands of Happy Homes
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              FrescoFruits started with one mission — make truly fresh fruits
              accessible to everyone. What began as a small family initiative
              quickly grew into a trusted fruit delivery platform serving thousands.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Today, we work with farmers across India to source premium,
              seasonal, pesticide-free fruits delivered with unmatched freshness.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            >
              Explore Fruits →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              What Makes Us Different
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
              Freshness, sustainability, and customer happiness are at the heart of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${v.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {v.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Meet Our Team
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Passionate people behind every fresh delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {TEAM.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg`}
                >
                  {member.emoji}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {member.role}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}