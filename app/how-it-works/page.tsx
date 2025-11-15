// "use client";

// import Header from "@/components/header";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Eye, Pause, Trash2 } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// // import heroBg from "../../public/images/images/A_calm_kind_of_intelligence.jpg";
// import heroBg from "../../public/images/images/A_calm_kind_of_intelligence.jpg";
// import buildBg from "../../public/images/images/Built_for_humans.jpg";
// import syncImg from "../../public/images/images/Everything,_finally_in_sync_V2.jpg";
// import helpImg from "../../public/images/images/Helps_when_it_should.jpg";
// import privateBg from "../../public/images/images/Private_by_design.jpg";
// import effortlessBg from "../../public/images/images/Together_Effortlessly_V2.jpg";
// import rhythmImg from "../../public/images/images/Understands_your_rhythm_V1.jpg";
// import dataImg from "../../public/images/images/Your_data,_always_yours.jpg";

// export default function HowItWorks() {
//   const [activeTab, setActiveTab] = useState(0);

//   const proactiveScenes = [
//     {
//       id: "morning",
//       label: "Morning",
//       headline: "Start clear.",
//       copy: "Before your inbox finds you, Orion's already queued the day — focus tracks on, flagged replies drafted.",
//     },
//     {
//       id: "meetings",
//       label: "Meetings",
//       headline: "Makes time for what matters.",
//       copy: "When calendars collide, Orion quietly clears the way — reschedules, briefs, and buys you a breath.",
//     },
//     {
//       id: "commute",
//       label: "Commute",
//       headline: "Keeps pace, never pressure.",
//       copy: "If the road slows, Orion reroutes and lets your 10 a.m. know — calm intact, coffee still warm.",
//     },
//     {
//       id: "evenings",
//       label: "Evenings",
//       headline: "Wind down, not wind up.",
//       copy: "As the lights fade, story mode starts. The world softens before you have to ask.",
//     },
//     {
//       id: "weekend",
//       label: "Weekend",
//       headline: "Plans that plan themselves.",
//       copy: "When plans shift, Orion moves the pieces for you — without you lifting a finger.",
//     },
//   ];

//   return (
//     <main
//       className="min-h-screen"
//       style={{
//         background: "linear-gradient(to bottom, #0A0A0B 0%, #111217 100%)",
//         color: "#FAFBFF",
//       }}
//     >
//       <Header />

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 pb-32 overflow-hidden">
//         {/* Full-width background image */}
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={heroBg.src}
//             alt="Neural Orb Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
//         </div>

//         <div className="max-w-[980px] w-full mx-auto text-center relative">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
//             style={{ color: "#FAFBFF" }}
//           >
//             A calm kind of intelligence.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
//             style={{ color: "#FAFBFF", opacity: 0.8 }}
//           >
//             Orion learns what matters, when it matters — adapting quietly to
//             your world so everything simply flows.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//           >
//             <Link href="/pricing">
//               <Button
//                 size="lg"
//                 className="rounded-full px-8 h-12 text-sm font-medium"
//                 style={{ backgroundColor: "#00C2C7", color: "#FAFBFF" }}
//               >
//                 Meet Orion
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Hero image placeholder */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="w-full max-w-[1200px] h-[500px] mx-auto"
//             style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//           /> */}
//         </div>
//       </section>

//       {/* SECTION 1 — UNDERSTANDS YOUR RHYTHM */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2
//                 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight gradient-text"
//                 style={{ color: "#FAFBFF" }}
//               >
//                 Understands your rhythm.
//               </h2>
//               <p
//                 className="text-lg md:text-xl leading-relaxed"
//                 style={{ color: "#FAFBFF", opacity: 0.8 }}
//               >
//                 Orion learns your flow — how your mornings start, when your
//                 focus peaks, and where your day finds quiet. It connects these
//                 moments so life feels coordinated, not managed.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//               style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//             >
//               <img
//                 src={rhythmImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2 — HELPS WHEN IT SHOULD */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//               style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//             >
//               <img
//                 src={helpImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="order-1 lg:order-2"
//             >
//               <h2
//                 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight gradient-text"
//                 style={{ color: "#FAFBFF" }}
//               >
//                 Helps when it should.
//               </h2>
//               <p
//                 className="text-lg md:text-xl leading-relaxed"
//                 style={{ color: "#FAFBFF", opacity: 0.8 }}
//               >
//                 Orion doesn't need your attention. It anticipates — moving
//                 meetings, queuing focus playlists, dimming lights — quietly
//                 syncing life so you never have to think about it.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3 — EVERYTHING IN SYNC */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2
//                 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight gradient-text"
//                 style={{ color: "#FAFBFF" }}
//               >
//                 Everything in sync.
//               </h2>
//               <p
//                 className="text-lg md:text-xl leading-relaxed mb-6"
//                 style={{ color: "#FAFBFF", opacity: 0.8 }}
//               >
//                 From messages to meetings, playlists to lights — Orion keeps
//                 every tool, habit, and device quietly connected. It's not
//                 another app. It's the space between them.
//               </p>
//               <div
//                 className="flex flex-wrap gap-3 text-sm"
//                 style={{ color: "#00C2C7" }}
//               >
//                 <span>• Outlook</span>
//                 <span>• Spotify</span>
//                 <span>• WYZE</span>
//                 <span>• HomeKit</span>
//                 <span>• Google Calendar</span>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//               style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//             >
//               <img
//                 src={syncImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4 — YOUR DATA, ALWAYS YOURS */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//               style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//             >
//               <img
//                 src={dataImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="order-1 lg:order-2"
//             >
//               <h2
//                 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight gradient-text"
//                 style={{ color: "#FAFBFF" }}
//               >
//                 Your data, always yours.
//               </h2>
//               <p
//                 className="text-lg md:text-xl leading-relaxed mb-8"
//                 style={{ color: "#FAFBFF", opacity: 0.8 }}
//               >
//                 Orion only works for you — never on you. Every memory is local,
//                 encrypted, and fully erasable. You can see what it remembers,
//                 pause it, or erase it entirely.
//               </p>

//               {/* Icon trio */}
//               <div className="flex gap-8">
//                 <div className="text-center">
//                   <div
//                     className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
//                     style={{ backgroundColor: "#2B2E33" }}
//                   >
//                     <Eye className="h-6 w-6" style={{ color: "#00C2C7" }} />
//                   </div>
//                   <p
//                     className="text-sm font-medium"
//                     style={{ color: "#FAFBFF" }}
//                   >
//                     See
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <div
//                     className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
//                     style={{ backgroundColor: "#2B2E33" }}
//                   >
//                     <Pause className="h-6 w-6" style={{ color: "#00C2C7" }} />
//                   </div>
//                   <p
//                     className="text-sm font-medium"
//                     style={{ color: "#FAFBFF" }}
//                   >
//                     Pause
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <div
//                     className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
//                     style={{ backgroundColor: "#2B2E33" }}
//                   >
//                     <Trash2 className="h-6 w-6" style={{ color: "#00C2C7" }} />
//                   </div>
//                   <p
//                     className="text-sm font-medium"
//                     style={{ color: "#FAFBFF" }}
//                   >
//                     Erase
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 5 — A DAY WITH ORION */}
//       <section
//         id="demo"
//         className="py-32 px-6 relative overflow-hidden min-h-screen flex justify-center items-center"
//       >
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={effortlessBg.src}
//             alt="Neural Orb Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
//         </div>

//         <div className="max-w-[980px] w-full mx-auto relative">
//           <div className="text-center mb-12">
//             <h2
//               className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
//               style={{ color: "#FAFBFF" }}
//             >
//               A day with Orion.
//             </h2>
//             <p
//               className="text-lg md:text-xl"
//               style={{ color: "#FAFBFF", opacity: 0.8 }}
//             >
//               Quiet presence. Thoughtful timing. Orion fits into your day in
//               five small, meaningful ways.
//             </p>
//           </div>

//           {/* Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {proactiveScenes.map((scene, index) => (
//               <button
//                 key={scene.id}
//                 onClick={() => setActiveTab(index)}
//                 className="px-4 py-2 rounded-full text-sm font-medium transition-all"
//                 style={{
//                   backgroundColor:
//                     activeTab === index ? "#00C2C7" : "transparent",
//                   color: "#FAFBFF",
//                   border:
//                     activeTab === index
//                       ? "none"
//                       : "1px solid rgba(250, 251, 255, 0.2)",
//                   opacity: activeTab === index ? 1 : 0.6,
//                 }}
//               >
//                 {scene.label}
//               </button>
//             ))}
//           </div>

//           {/* Full-width image placeholder */}
//           {/* <motion.div
//             key={activeTab}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-full h-[480px] mb-12"
//             style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//           /> */}

//           {/* Scene content */}
//           <motion.div
//             key={`content-${activeTab}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h3
//               className="text-2xl md:text-3xl font-semibold mb-4 leading-tight"
//               style={{ color: "#FAFBFF" }}
//             >
//               {proactiveScenes[activeTab].headline}
//             </h3>
//             <p
//               className="text-lg leading-relaxed"
//               style={{ color: "#FAFBFF", opacity: 0.8 }}
//             >
//               {proactiveScenes[activeTab].copy}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* SECTION 6 — BUILT FOR HUMANS */}
//       <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={buildBg.src}
//             alt="Neural Orb Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
//         </div>

//         <div className="max-w-[980px] w-full mx-auto text-center relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2
//               className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
//               style={{ color: "#FAFBFF" }}
//             >
//               Built for humans.
//             </h2>
//             <p
//               className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
//               style={{ color: "#FAFBFF", opacity: 0.8 }}
//             >
//               Orion doesn't chase data, it earns trust. No dashboards, no noise
//               — just help that feels like intuition.
//             </p>

//             {/* Centered image placeholder */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full max-w-[600px] h-[400px] mx-auto"
//               style={{ backgroundColor: "#2B2E33", borderRadius: "16px" }}
//             /> */}
//           </motion.div>
//         </div>
//       </section>

//       {/* SECTION 7 — PRIVACY STRIP */}

//       <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={privateBg.src}
//             alt="Neural Orb Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
//         </div>

//         <div className="max-w-[980px] w-full mx-auto text-center relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2
//               className="text-4xl md:text-6xl font-semibold mb-4 leading-tight"
//               style={{ color: "#FAFBFF" }}
//             >
//               Private by design.
//             </h2>
//             <p
//               className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
//               style={{ color: "#FAFBFF", opacity: 0.8 }}
//             >
//               Every action, every setting, every memory — visible, controllable,
//               erasable.
//             </p>
//             <Link href="/privacy">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full px-8 h-12 text-sm font-medium mb-12 bg-transparent"
//                 style={{
//                   borderColor: "#FAFBFF",
//                   color: "#FAFBFF",
//                   backgroundColor: "transparent",
//                 }}
//               >
//                 See Privacy Controls
//               </Button>
//             </Link>

//             {/* Centered image placeholder */}
//           </motion.div>
//         </div>
//       </section>

//       {/* FINAL CTA BLOCK */}
//       <section
//         className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden"
//         style={{ background: "#101214" }}
//       >
//         <div className="max-w-[980px] w-full mx-auto text-center relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2
//               className="text-4xl md:text-6xl font-semibold mb-4 leading-tight"
//               style={{ color: "#FAFBFF" }}
//             >
//               Try Orion quietly in the background.
//             </h2>
//             <p
//               className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
//               style={{ color: "#FAFBFF", opacity: 0.8 }}
//             >
//               The kind of help that doesn't interrupt — it simply connects.
//             </p>
//             <Link href="/pricing">
//               <Button
//                 size="lg"
//                 className="rounded-full px-8 h-12 text-sm font-medium mb-12"
//                 style={{ backgroundColor: "#00C2C7", color: "#FAFBFF" }}
//               >
//                 Join the Beta — Free
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         className="border-t px-6 py-12"
//         style={{ borderColor: "#2B2E33" }}
//       >
//         <div className="max-w-[980px] w-full mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 PRODUCT
//               </h4>
//               <ul
//                 className="space-y-2"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 <li>
//                   <Link
//                     href="/how-it-works"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     How It Works
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/integrations"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Integrations
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/pricing"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/download"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Download
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 FOR PEOPLE
//               </h4>
//               <ul
//                 className="space-y-2"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 <li>
//                   <Link
//                     href="/for/entrepreneurs"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Entrepreneurs
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for/parents"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Parents
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for/executives"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Executives
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for/students"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Students
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 RESOURCES
//               </h4>
//               <ul
//                 className="space-y-2"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 <li>
//                   <Link
//                     href="/help"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Support
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/help/status"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     System Status
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/press"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Press
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/changelog"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Changelog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/help"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Help
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 COMPANY
//               </h4>
//               <ul
//                 className="space-y-2"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 <li>
//                   <Link
//                     href="/about"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     About Noble Forge
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/careers"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 LEGAL
//               </h4>
//               <ul
//                 className="space-y-2"
//                 style={{ color: "#FAFBFF", opacity: 0.6 }}
//               >
//                 <li>
//                   <Link
//                     href="/privacy"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/terms"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/dpa"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     DPA
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/cookies"
//                     className="hover:opacity-100 transition-opacity"
//                   >
//                     Cookies
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div
//             className="pt-6 border-t text-center mb-4"
//             style={{ borderColor: "#2B2E33" }}
//           >
//             <p
//               className="text-sm mb-2"
//               style={{ color: "#FAFBFF", opacity: 0.6 }}
//             >
//               Orion only works for you — never on you. See, pause, or erase
//               anything.
//             </p>
//             <p className="text-sm font-semibold" style={{ color: "#FAFBFF" }}>
//               Your Private AI. Impeccably Helpful.
//             </p>
//           </div>

//           <div className="text-center">
//             <p className="text-xs" style={{ color: "#FAFBFF", opacity: 0.6 }}>
//               © 2025 Orion. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }




"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, Pause, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  const proactiveScenes = [
    {
      id: "morning",
      label: "Morning",
      headline: "Start clear.",
      copy: "Before your inbox finds you, Orion's already queued the day — focus tracks on, flagged replies drafted.",
    },
    {
      id: "meetings",
      label: "Meetings",
      headline: "Makes time for what matters.",
      copy: "When calendars collide, Orion quietly clears the way — reschedules, briefs, and buys you a breath.",
    },
    {
      id: "commute",
      label: "Commute",
      headline: "Keeps pace, never pressure.",
      copy: "If the road slows, Orion reroutes and lets your 10 a.m. know — calm intact, coffee still warm.",
    },
    {
      id: "evenings",
      label: "Evenings",
      headline: "Wind down, not wind up.",
      copy: "As the lights fade, story mode starts. The world softens before you have to ask.",
    },
    {
      id: "weekend",
      label: "Weekend",
      headline: "Plans that plan themselves.",
      copy: "When plans shift, Orion moves the pieces for you — without you lifting a finger.",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #0A0A0B 0%, #111217 100%)",
        color: "#FAFBFF",
      }}
    >
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 pb-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/A_calm_kind_of_intelligence.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="max-w-[980px] w-full mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            style={{ color: "#FAFBFF" }}
          >
            A calm kind of intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#FAFBFF", opacity: 0.8 }}
          >
            Orion learns what matters, when it matters — adapting quietly to
            your world so everything simply flows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/pricing">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-sm font-medium"
                style={{ backgroundColor: "#00C2C7", color: "#FAFBFF" }}
              >
                Meet Orion
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — UNDERSTANDS YOUR RHYTHM */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: "#FAFBFF" }}>
                Understands your rhythm.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#FAFBFF", opacity: 0.8 }}>
                Orion learns your flow — how your mornings start, when your
                focus peaks, and where your day finds quiet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] rounded-2xl overflow-hidden bg-[#2B2E33]"
            >
              <img
                src="/images/images/Understands_your_rhythm_V1.jpg"
                alt="Rhythm visual"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HELPS WHEN IT SHOULD */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] rounded-2xl overflow-hidden bg-[#2B2E33]"
            >
              <img
                src="/images/images/Helps_when_it_should.jpg"
                alt="Help visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: "#FAFBFF" }}>
                Helps when it should.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#FAFBFF", opacity: 0.8 }}>
                Orion anticipates — moving meetings, queuing focus playlists,
                dimming lights — quietly syncing life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EVERYTHING IN SYNC */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: "#FAFBFF" }}>
                Everything in sync.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#FAFBFF", opacity: 0.8 }}>
                From messages to meetings — Orion keeps everything connected.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] rounded-2xl overflow-hidden bg-[#2B2E33]"
            >
              <img
                src="/images/images/Everything,_finally_in_sync_V2.jpg"
                alt="Sync visual"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — YOUR DATA */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[420px] rounded-2xl overflow-hidden bg-[#2B2E33]"
            >
              <img
                src="/images/images/Your_data,_always_yours.jpg"
                alt="Data visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-semibold mb-6" style={{ color: "#FAFBFF" }}>
                Your data, always yours.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#FAFBFF", opacity: 0.8 }}>
                Orion only works for you — never on you. Fully erasable memory.
              </p>

              <div className="flex gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-[#2B2E33]">
                    <Eye className="h-6 w-6" style={{ color: "#00C2C7" }} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#FAFBFF" }}>See</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-[#2B2E33]">
                    <Pause className="h-6 w-6" style={{ color: "#00C2C7" }} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#FAFBFF" }}>Pause</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-[#2B2E33]">
                    <Trash2 className="h-6 w-6" style={{ color: "#00C2C7" }} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#FAFBFF" }}>Erase</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — A DAY WITH ORION */}
      <section id="demo" className="py-32 px-6 relative overflow-hidden min-h-screen flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/Together_Effortlessly_V2.jpg"
            alt="Effortless Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6" style={{ color: "#FAFBFF" }}>
              A day with Orion.
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#FAFBFF", opacity: 0.8 }}>
              Quiet presence. Thoughtful timing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {proactiveScenes.map((scene, index) => (
              <button
                key={scene.id}
                onClick={() => setActiveTab(index)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeTab === index ? "#00C2C7" : "transparent",
                  color: "#FAFBFF",
                  border: activeTab === index ? "none" : "1px solid rgba(250, 251, 255, 0.2)",
                  opacity: activeTab === index ? 1 : 0.6,
                }}
              >
                {scene.label}
              </button>
            ))}
          </div>

          <motion.div
            key={`content-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#FAFBFF" }}>
              {proactiveScenes[activeTab].headline}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: "#FAFBFF", opacity: 0.8 }}>
              {proactiveScenes[activeTab].copy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — BUILT FOR HUMANS */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/Built_for_humans.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-semibold mb-6" style={{ color: "#FAFBFF" }}>
              Built for humans.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto" style={{ color: "#FAFBFF", opacity: 0.8 }}>
              Orion doesn't chase data — it earns trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — PRIVACY STRIP */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/Private_by_design.jpg"
            alt="Privacy Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-semibold mb-4" style={{ color: "#FAFBFF" }}>
              Private by design.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#FAFBFF", opacity: 0.8 }}>
              Every action. Visible. Controllable. Erasable.
            </p>
            <Link href="/privacy">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-sm font-medium mb-12 bg-transparent"
                style={{ borderColor: "#FAFBFF", color: "#FAFBFF" }}
              >
                See Privacy Controls
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen" style={{ background: "#101214" }}>
        <div className="max-w-[980px] w-full mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-semibold mb-4" style={{ color: "#FAFBFF" }}>
              Try Orion quietly in the background.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#FAFBFF", opacity: 0.8 }}>
              Help that doesn’t interrupt — it simply connects.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="rounded-full px-8 h-12 text-sm font-medium mb-12" style={{ backgroundColor: "#00C2C7", color: "#FAFBFF" }}>
                Join the Beta — Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-6 py-12" style={{ borderColor: "#2B2E33" }}>
        <div className="max-w-[980px] w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FAFBFF", opacity: 0.6 }}>PRODUCT</h4>
              <ul className="space-y-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/download">Download</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FAFBFF", opacity: 0.6 }}>FOR PEOPLE</h4>
              <ul className="space-y-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
                <li><Link href="/for/entrepreneurs">Entrepreneurs</Link></li>
                <li><Link href="/for/parents">Parents</Link></li>
                <li><Link href="/for/executives">Executives</Link></li>
                <li><Link href="/for/students">Students</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FAFBFF", opacity: 0.6 }}>RESOURCES</h4>
              <ul className="space-y-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
                <li><Link href="/help">Support</Link></li>
                <li><Link href="/help/status">System Status</Link></li>
                <li><Link href="/press">Press</Link></li>
                <li><Link href="/changelog">Changelog</Link></li>
                <li><Link href="/help">Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FAFBFF", opacity: 0.6 }}>COMPANY</h4>
              <ul className="space-y-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
                <li><Link href="/about">About Noble Forge</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FAFBFF", opacity: 0.6 }}>LEGAL</h4>
              <ul className="space-y-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/legal/terms">Terms of Service</Link></li>
                <li><Link href="/legal/dpa">DPA</Link></li>
                <li><Link href="/legal/cookies">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t text-center mb-4" style={{ borderColor: "#2B2E33" }}>
            <p className="text-sm mb-2" style={{ color: "#FAFBFF", opacity: 0.6 }}>
              Orion only works for you — never on you.
            </p>
            <p className="text-sm font-semibold" style={{ color: "#FAFBFF" }}>
              Your Private AI. Impeccably Helpful.
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs" style={{ color: "#FAFBFF", opacity: 0.6 }}>
              © 2025 Orion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
