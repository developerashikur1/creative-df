"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Compass, Eye, Lock } from "lucide-react";
import Link from "next/link";
import atHumanImg from "../../public/images/images-V2/Automation_that_feels_human.jpg";
import heroBg from "../../public/images/images-V2/Everything,_finally_in_sync_V1.jpg";
import connectImg from "../../public/images/images-V2/One_connection._Endless_flow.jpg";
import privateImg from "../../public/images/images-V2/Private_value.jpg";
import togetherImg from "../../public/images/images-V2/Together_Effortlessly_V2.jpg";
import worksImg from "../../public/images/images-V2/Works_everywhere_you_do.jpg";
import gDrive from "../../public/images/logos/google_drive.png";
import homekit from "../../public/images/logos/homekitetmoi.png";
import logo_notion from "../../public/images/logos/notion-logo.png";
import outlook from "../../public/images/logos/outlook.png";
import spotify from "../../public/images/logos/spotify.png";
import wyze from "../../public/images/logos/wyze.png";

export default function IntegrationsPage() {
  const integrationCards = [
    { name: "Outlook", category: "Email & Calendar", icon: outlook.src },
    { name: "Spotify", category: "Sound & Mood", icon: spotify.src },
    { name: "WYZE", category: "Home Security", icon: wyze.src },
    { name: "Notion", category: "Projects & Notes", icon: logo_notion.src },
    { name: "Google Drive", category: "Files & Sharing", icon: gDrive.src },
    { name: "HomeKit", category: "Smart Environment", icon: homekit.src },
  ];

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

        <div className="max-w-[1200px] w-full mx-auto text-center space-y-8 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-[#FAFBFF]"
          >
            Everything, finally in sync.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#FAFBFF]/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Orion connects your tools, devices, and routines quietly — no setup,
            no dashboards, just flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-base font-medium"
            >
              Explore Integrations
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-base font-medium bg-transparent"
              asChild
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-[1200px] w-full mx-auto mt-16"
        >
          <div className="w-full h-[500px] bg-[#2B2E33] rounded-2xl" />
        </motion.div> */}
      </section>

      {/* Section 1 - One Connection. Endless Flow */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
                One connection. Endless flow.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg leading-relaxed">
                Orion bridges your calendar, music, workspace, and home —
                learning your rhythm so everything works together seamlessly.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Outlook",
                  "Spotify",
                  "WYZE",
                  "Google Calendar",
                  "HomeKit",
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-[#FAFBFF]/20 text-[#FAFBFF] text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={connectImg.src}
                alt="Private value visual"
                className="w-full  object-cover rounded-2xl h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Built for Your Favorites */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
              Built for your favorites.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Orion works with the tools you already use — no new habits needed.
              It simply fits in and keeps everything in harmony.
            </p>
          </motion.div>

          {/* Integration Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {integrationCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#FAFBFF]/10 bg-[#FAFBFF]/5 hover:bg-[#FAFBFF]/10 transition-all"
              >
                <div className="h-12 rounded-xl bg-white mb-4 inline-flex p-1.5 overflow-hidden items-center justify-center">
                  {card?.icon && (
                    <img
                      src={card?.icon}
                      className="h-auto w-20 object-contain"
                      alt=""
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#FAFBFF] mb-2">
                  {card.name}
                </h3>
                <p className="text-[#FAFBFF]/60 text-sm">{card.category}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Automation That Feels Human */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src={atHumanImg.src}
                alt="Private value visual"
                className="w-full  object-cover rounded-2xl h-[420px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
                Automation that feels human.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg leading-relaxed">
                Orion doesn't just connect APIs — it understands intent. From
                rescheduling meetings to dimming lights, every action feels
                natural and timely.
              </p>
              <ul className="space-y-3">
                {[
                  "Works across devices and operating systems",
                  "Context-aware orchestration",
                  "Unified permissions and secure sync",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#00C2C7] mt-0.5 flex-shrink-0" />
                    <span className="text-[#FAFBFF]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Private by Design */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
                Private by design.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg leading-relaxed">
                Every connection happens on your terms. Orion encrypts all
                integrations, uses only what you allow, and keeps your data
                fully under your control.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                {[
                  { icon: Lock, label: "Encrypted" },
                  { icon: Eye, label: "Transparent" },
                  { icon: Compass, label: "User-controlled" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00C2C7]/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#00C2C7]" />
                    </div>
                    <span className="text-[#FAFBFF] font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={privateImg.src}
                alt="Private value visual"
                className="w-full  object-cover rounded-2xl h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Works Everywhere You Do */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={worksImg.src}
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto space-y-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
              Works everywhere you do.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Whether you're at your desk, in the car, or at home — Orion's
              orchestration follows seamlessly, adjusting to your location and
              routine.
            </p>
            <p className="text-[#FAFBFF]/50 text-sm">
              Available on iOS • Android • Mac • Windows • Home Hubs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Add Connections in Seconds */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
              Add connections in seconds.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Integrations are one-tap simple — private tokens, no third-party
              sharing, and full visibility on what's linked.
            </p>
          </motion.div>

          {/* Step Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: "1", label: "Tap Connect" },
              { step: "2", label: "Approve Access" },
              { step: "3", label: "Done." },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#00C2C7]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#00C2C7]">
                    {item.step}
                  </span>
                </div>
                <p className="text-[#FAFBFF] text-lg font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Privacy Promise Strip */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={togetherImg.src}
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>
        <div className="max-w-[800px] w-full mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#FAFBFF] leading-tight">
              Connection without compromise.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg leading-relaxed">
              Orion syncs everything — except your privacy. You decide what
              stays, what's shared, and what's forgotten.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-base font-medium bg-transparent"
              asChild
            >
              <Link href="/privacy">See Privacy Policy</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-32 px-6 bg-[#101214] flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#FAFBFF] leading-tight">
              Connect once. Forget the rest.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Start your free beta and let Orion link your world — safely,
              quietly, intelligently.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-base font-medium"
            >
              Join the Beta — Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FAFBFF]/10 bg-[#0A0A0B]">
        <div className="max-w-[1200px] w-full mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">PRODUCT</h4>
              <ul className="space-y-2 text-[#FAFBFF]/70">
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
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">
                FOR PEOPLE
              </h4>
              <ul className="space-y-2 text-[#FAFBFF]/70">
                <li>
                  <Link
                    href="/for-you#entrepreneurs"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you#parents"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Parents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you#executives"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Executives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-you#students"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Students
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">
                RESOURCES
              </h4>
              <ul className="space-y-2 text-[#FAFBFF]/70">
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
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">COMPANY</h4>
              <ul className="space-y-2 text-[#FAFBFF]/70">
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
                    href="/contact"
                    className="hover:text-[#FAFBFF] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">LEGAL</h4>
              <ul className="space-y-2 text-[#FAFBFF]/70">
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
            <p className="text-[#FAFBFF]/70 text-sm mb-2">
              Orion only works for you — never on you. See, pause, or erase
              anything.
            </p>
            <p className="text-[#FAFBFF] font-semibold text-sm">
              Your Private AI. Impeccably Helpful.
            </p>
          </div>

          <div className="text-center">
            <p className="text-[#FAFBFF]/50 text-xs">
              © 2025 Orion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
