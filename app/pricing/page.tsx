"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import orionImg from "../../public/images/images-V2/Orion_only_works_for_you_V1.jpg";
import privateBg from "../../public/images/images-V2/Private_value.jpg";
import heroBg from "../../public/images/images-V2/Simple_plans._Quiet_power.jpg";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0B] to-[#111217]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg.src}
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-[#FAFBFF]">
              Simple plans. Quiet power.
            </h1>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              No ads. No tracking. No noise. Just private intelligence that fits
              your world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-base font-medium shadow-lg shadow-[#00C2C7]/20 hover:shadow-xl hover:shadow-[#00C2C7]/30 transition-all"
                asChild
              >
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-base font-medium bg-transparent"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[500px] bg-[#2B2E33] rounded-2xl overflow-hidden"
          >
            <img src="/calm-gradient-with-subtle-glowing-orb-and-minimali.jpg" alt="Pricing hero" className="w-full h-full object-cover" />
          </motion.div> */}
        </div>
      </section>

      {/* Section 1 - Choose Your Plan */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
              Choose your plan.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every plan includes Orion's full orchestration engine, secure
              memory, and proactive intelligence. Your privacy is never
              optional.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Personal Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-10 rounded-3xl border border-[#00C2C7]/30 bg-[#0A0A0B]/50 backdrop-blur-sm shadow-xl shadow-black/20"
            >
              <p className="text-sm text-[#FAFBFF]/60 mb-2 uppercase tracking-wide">
                Single Seat
              </p>
              <h3 className="text-3xl font-semibold text-[#FAFBFF] mb-6">
                Personal Plan
              </h3>
              <div className="text-5xl font-bold text-[#FAFBFF] mb-2">
                $14.99
                <span className="text-lg font-normal text-[#FAFBFF]/60">
                  {" "}
                  / month
                </span>
              </div>
              <p className="text-base text-[#FAFBFF]/70 mb-8 leading-relaxed">
                For individuals who want Orion as their private assistant —
                orchestrating tools, time, and devices with total discretion.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "1 user",
                  "Unlimited devices",
                  "Core orchestration & reasoning engine",
                  "Proactivity engine",
                  "Secure cloud sync",
                  "Local + encrypted memory",
                  "Voice + chat interfaces",
                  "Full privacy controls",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#00C2C7] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#FAFBFF]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full h-12 text-base rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white shadow-lg shadow-[#00C2C7]/20 hover:shadow-xl hover:shadow-[#00C2C7]/30 transition-all"
                asChild
              >
                <Link href="/signup">Start Personal Plan</Link>
              </Button>
            </motion.div>

            {/* Family Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 rounded-3xl border border-[#00C2C7] bg-[#00C2C7]/5 backdrop-blur-sm shadow-xl shadow-[#00C2C7]/10 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C2C7] text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <p className="text-sm text-[#FAFBFF]/60 mb-2 uppercase tracking-wide">
                Shared Intelligence
              </p>
              <h3 className="text-3xl font-semibold text-[#FAFBFF] mb-6">
                Family Plan
              </h3>
              <div className="text-5xl font-bold text-[#FAFBFF] mb-2">
                $24.99
                <span className="text-lg font-normal text-[#FAFBFF]/60">
                  {" "}
                  / month
                </span>
              </div>
              <p className="text-base text-[#FAFBFF]/70 mb-8 leading-relaxed">
                For households or small teams that share memories, devices, and
                routines within one trusted private circle.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "2 seats (expandable)",
                  "All Personal features",
                  "Shared memories",
                  "Role & permission control",
                  "Multi-user orchestration",
                  "Unified billing",
                  "Same calm experience — no priority tiers",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#00C2C7] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#FAFBFF]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 rounded-xl bg-[#FAFBFF]/5 border border-[#FAFBFF]/10">
                <p className="text-sm text-[#FAFBFF]/70">
                  + $9.99 / extra seat per month or $99.90 / year (2 months
                  free)
                </p>
              </div>
              <Button
                className="w-full h-12 text-base rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white shadow-lg shadow-[#00C2C7]/20 hover:shadow-xl hover:shadow-[#00C2C7]/30 transition-all"
                asChild
              >
                <Link href="/signup">Start Family Plan</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Why It's Different */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
              Why it's different.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Orion isn't another subscription — it's a partnership built on
              trust. No tracking, no selling data, no upsell interruptions.
            </p>
          </motion.div>

          {/* Three Mini Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Private by Default",
                description: "Every plan encrypted end-to-end.",
              },
              {
                title: "Discreetly Proactive",
                description: "Anticipates needs, never interrupts.",
              },
              {
                title: "Transparent Control",
                description: "See, pause, or erase anytime.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#0A0A0B]/50 border border-[#FAFBFF]/10"
              >
                <h3 className="text-xl font-semibold text-[#FAFBFF] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#FAFBFF]/70 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Compare at a Glance */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
              Compare at a glance.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A clear view of what's included — no small print, no hidden tiers.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-x-auto mb-16"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FAFBFF]/20">
                  <th className="text-left py-4 px-6 text-[#FAFBFF]/60 font-medium">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-[#FAFBFF] font-semibold">
                    Personal
                  </th>
                  <th className="text-center py-4 px-6 text-[#FAFBFF] font-semibold">
                    Family
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Users", personal: "1", family: "2+" },
                  {
                    feature: "Devices",
                    personal: "Unlimited",
                    family: "Unlimited",
                  },
                  { feature: "Shared Memory", personal: "—", family: "✓" },
                  { feature: "Local Encryption", personal: "✓", family: "✓" },
                  { feature: "Voice Interface", personal: "✓", family: "✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#FAFBFF]/10">
                    <td className="py-4 px-6 text-[#FAFBFF]">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-[#FAFBFF]/70">
                      {row.personal}
                    </td>
                    <td className="py-4 px-6 text-center text-[#FAFBFF]/70">
                      {row.family}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Private Value */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.8 }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
            >
              <img
                src={privateBg.src}
                alt="Private value visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
                Private value.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Orion is built for longevity, not lock-in. Your data stays with
                you, even if you cancel.
              </p>
              <ul className="space-y-4">
                {[
                  "Cancel anytime, keep encrypted data export",
                  "No advertising, no resale",
                  "Designed for people, not algorithms",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C2C7] mt-2.5 flex-shrink-0" />
                    <span className="text-[#FAFBFF] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Questions You May Have */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
              Questions you may have.
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            {[
              {
                question: "Is my data stored locally or in the cloud?",
                answer:
                  "Orion uses hybrid storage. Your most sensitive data stays encrypted locally on your devices, while shared memories and cross-device sync use end-to-end encrypted cloud storage. You control what stays where.",
              },
              {
                question: "Can I upgrade or downgrade anytime?",
                answer:
                  "Yes. You can switch between Personal and Family plans at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
              },
              {
                question: "Does Orion sell or share my data?",
                answer:
                  "Never. Your data is yours. We don't sell it, share it with advertisers, or use it to train models for other users. Privacy isn't negotiable.",
              },
              {
                question: "What happens if I cancel?",
                answer:
                  "You keep full access until your billing period ends. You can export all your data in standard formats, and we'll delete your cloud data within 30 days of cancellation.",
              },
              {
                question: "How do I invite family members?",
                answer:
                  "From your Family Plan dashboard, you can send secure invite links. Each member gets their own private space plus access to shared memories and routines you choose to enable.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border border-[#FAFBFF]/10 rounded-2xl overflow-hidden bg-[#0A0A0B]/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFBFF]/5 transition-colors"
                >
                  <span className="text-lg font-medium text-[#FAFBFF] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FAFBFF]/60 flex-shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-[#FAFBFF]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Privacy Promise Strip */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={orionImg.src}
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>
        <div className="max-w-[1200px] w-full mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#FAFBFF]">
              Orion only works for you — never on you.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              You can see, pause, or erase anything. Privacy isn't an add-on,
              it's the default.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-base font-medium bg-transparent"
              asChild
            >
              <Link href="/privacy">See Privacy Controls</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#111217] to-[#101214] flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAFBFF]">
              Start your calm era of connection.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Join Orion's beta and experience an assistant that respects your
              time — and your privacy.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-base font-medium shadow-lg shadow-[#00C2C7]/20 hover:shadow-xl hover:shadow-[#00C2C7]/30 transition-all"
              asChild
            >
              <Link href="/signup">Join the Beta — Free</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FAFBFF]/10 bg-[#0A0A0B]">
        <div className="max-w-[1200px] w-full mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/60">PRODUCT</h4>
              <ul className="space-y-2 text-[#FAFBFF]/60">
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/download"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/60">
                FOR PEOPLE
              </h4>
              <ul className="space-y-2 text-[#FAFBFF]/60">
                <li>
                  <Link
                    href="/for-you"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Parents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Executives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Students
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/60">
                RESOURCES
              </h4>
              <ul className="space-y-2 text-[#FAFBFF]/60">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/status"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    System Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/60">COMPANY</h4>
              <ul className="space-y-2 text-[#FAFBFF]/60">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    About Noble Forge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/contact"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/60">LEGAL</h4>
              <ul className="space-y-2 text-[#FAFBFF]/60">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/dpa"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    DPA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cookies"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#FAFBFF]/10 text-center mb-4">
            <p className="text-[#FAFBFF]/60 text-sm mb-2">
              Orion only works for you — never on you. See, pause, or erase
              anything.
            </p>
          </div>

          <div className="text-center">
            <p className="text-[#FAFBFF]/40 text-xs">
              © 2025 Orion by Noble Forge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
