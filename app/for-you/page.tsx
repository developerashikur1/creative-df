// "use client";

// import Header from "@/components/header";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Check } from "lucide-react";
// import Link from "next/link";
// // import {
// //   default as entrp,
// //   default as heroBg,
// // } from "../../public/images/images/For_Entrepreneurs_V1.jpg";
// // import excImg from "../../public/images/images/For_Executives_V2.jpg";
// // import parentImg from "../../public/images/images/For_Parents_V1.jpg";
// // import stdImg from "../../public/images/images/For_Students_V2.jpg";
// // import sharedImg from "../../public/images/images/Shared_Intelligence.jpg";

// // import learnBg from "../../public/images/images/Learns_you,_not_the_other_way_around.jpg";
// // import privateBg from "../../public/images/images/Private_by_design.jpg";

// import entrepreneursImg from "../../public/images/images/For_Entrepreneurs_V1.jpg";
// import heroBackgroundImg from "../../public/images/images/For_Entrepreneurs_V1.jpg";

// import executivesImg from "../../public/images/images/For_Executives_V2.jpg";
// import parentsImg from "../../public/images/images/For_Parents_V1.jpg";
// import studentsImg from "../../public/images/images/For_Students_V2.jpg";
// import sharedIntelligenceImg from "../../public/images/images/Shared_Intelligence.jpg";

// import learnsYouImg from "../../public/images/images/Learns_you,_not_the_other_way_around.jpg";
// import privateByDesignImg from "../../public/images/images/Private_by_design.jpg";



// export default function ForYouPage() {

//     const entrp = entrepreneursImg;
// const heroBg = heroBackgroundImg;

// const excImg = executivesImg;
// const parentImg = parentsImg;
// const stdImg = studentsImg;
// const sharedImg = sharedIntelligenceImg;

// const learnBg = learnsYouImg;
// const privateBg = privateByDesignImg;


// console.log( entrp, heroBg, excImg, parentImg);


//   return (
//     <main className="min-h-screen bg-[#0A0A0B] text-[#FAFBFF]">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
//         {/* Full-width background image */}
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={heroBg.src}
//             alt="Neural Orb Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
//         </div>

//         <div className="max-w-[1200px] w-full mx-auto relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
//               Made for every kind of day.
//             </h1>
//             <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
//               Whether you're leading a team, raising a family, studying late, or
//               building something new — Orion adapts quietly to your rhythm.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link href="/">
//                 <Button
//                   size="lg"
//                   className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-sm font-medium"
//                 >
//                   Meet Orion
//                 </Button>
//               </Link>
//               <Link href="/how-it-works">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-sm font-medium bg-transparent"
//                 >
//                   See How It Works
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section 1 - For Entrepreneurs */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 For Entrepreneurs.
//               </h2>
//               <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
//                 Orion becomes your silent partner — anticipating meetings,
//                 syncing messages, and keeping priorities aligned so you can
//                 focus on momentum, not maintenance.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Auto-schedules calls and replies
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Syncs tools like Slack, Notion, and Drive
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Learns how you work best
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//             >
//               <img
//                 src={entrp.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 2 - For Parents */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden order-2 md:order-1"
//             >
//               <img
//                 src={parentImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="order-1 md:order-2"
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 For Parents.
//               </h2>
//               <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
//                 Balance feels lighter when everything is connected. Orion
//                 manages reminders, routines, and quiet time — so you can focus
//                 on what matters most.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Smart reminders for family schedules
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Syncs home lighting and bedtime routines
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Private, hands-free voice commands
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3 - For Executives */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 For Executives.
//               </h2>
//               <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
//                 Orion reads the day before it unfolds — rearranging your
//                 schedule, briefing meetings, and ensuring decisions happen
//                 without distractions.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Auto-briefing notes for meetings
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Conflict-free calendar syncing
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Context-aware notifications
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//             >
//               <img
//                 src={excImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 4 - For Students */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden order-2 md:order-1"
//             >
//               <img
//                 src={stdImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="order-1 md:order-2"
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 For Students.
//               </h2>
//               <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
//                 Orion helps you stay clear-headed. It organizes notes,
//                 reminders, and focus sessions — all while protecting your
//                 privacy.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Focus timer with adaptive study breaks
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Contextual reminders for assignments
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">Secure cloud memory</span>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 5 - For Teams & Families */}
//       <section className="py-32 px-6">
//         <div className="max-w-[1200px] w-full mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 Shared Intelligence.
//               </h2>
//               <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
//                 Orion lets trusted circles share memory — securely connecting
//                 devices, tasks, and people. Perfect for small teams or family
//                 life that moves together.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Shared routines and devices
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Role-based access and controls
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
//                   <span className="text-[#FAFBFF]/80">
//                     Unified billing and privacy-first design
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
//             >
//               <img
//                 src={sharedImg.src}
//                 alt="Private value visual"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 6 - Built Around You */}
//       <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={learnBg.src}
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
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Learns you, not the other way around.
//             </h2>
//             <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
//               Orion doesn't need training. It listens once and adjusts forever —
//               remembering context, preferences, and boundaries.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section 7 - Privacy Promise Strip */}
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
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Private by design.
//             </h2>
//             <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
//               Orion only works for you — never on you. You can see, pause, or
//               erase anything it remembers.
//             </p>
//             <Link href="/privacy">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-sm font-medium mb-12 bg-transparent"
//               >
//                 See Privacy Controls
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA Block */}
//       <section className="py-32 px-6 bg-[#101214]">
//         <div className="max-w-[980px] w-full mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Let Orion work quietly for you.
//             </h2>
//             <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
//               Start your free beta and see how effortless connection feels.
//             </p>
//             <Link href="/pricing">
//               <Button
//                 size="lg"
//                 className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-sm font-medium mb-12"
//               >
//                 Join the Beta — Free
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-[#FAFBFF]/10 bg-[#0A0A0B]">
//         <div className="max-w-[980px] w-full mx-auto px-6 py-12">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
//             <div>
//               <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">PRODUCT</h4>
//               <ul className="space-y-2 text-[#FAFBFF]/50">
//                 <li>
//                   <Link
//                     href="/how-it-works"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     How It Works
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/integrations"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Integrations
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/pricing"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/download"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Download
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">
//                 FOR PEOPLE
//               </h4>
//               <ul className="space-y-2 text-[#FAFBFF]/50">
//                 <li>
//                   <Link
//                     href="/for-you"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Entrepreneurs
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for-you"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Parents
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for-you"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Executives
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/for-you"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Students
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">
//                 RESOURCES
//               </h4>
//               <ul className="space-y-2 text-[#FAFBFF]/50">
//                 <li>
//                   <Link
//                     href="/help"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Support
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/help/status"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     System Status
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/press"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Press
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/changelog"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Changelog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/help"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Help
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">COMPANY</h4>
//               <ul className="space-y-2 text-[#FAFBFF]/50">
//                 <li>
//                   <Link
//                     href="/about"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     About Noble Forge
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/careers"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">LEGAL</h4>
//               <ul className="space-y-2 text-[#FAFBFF]/50">
//                 <li>
//                   <Link
//                     href="/privacy"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/terms"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/dpa"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     DPA
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/legal/cookies"
//                     className="hover:text-[#FAFBFF] transition-colors"
//                   >
//                     Cookies
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="pt-6 border-t border-[#FAFBFF]/10 text-center mb-4">
//             <p className="text-[#FAFBFF]/50 text-sm mb-2">
//               Orion only works for you — never on you. See, pause, or erase
//               anything.
//             </p>
//             <p className="text-[#FAFBFF] font-semibold text-sm">
//               Your Private AI. Impeccably Helpful.
//             </p>
//           </div>

//           <div className="text-center">
//             <p className="text-[#FAFBFF]/50 text-xs">
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
import { Check } from "lucide-react";
import Link from "next/link";

export default function ForYouPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#FAFBFF]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/For_Entrepreneurs_V1.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              Made for every kind of day.
            </h1>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're leading a team, raising a family, studying late, or
              building something new — Orion adapts quietly to your rhythm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-sm font-medium"
                >
                  Meet Orion
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-sm font-medium bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - For Entrepreneurs */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                For Entrepreneurs.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Orion becomes your silent partner — anticipating meetings,
                syncing messages, and keeping priorities aligned so you can
                focus on momentum, not maintenance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Auto-schedules calls and replies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Syncs tools like Slack, Notion, and Drive
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Learns how you work best
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/images/For_Entrepreneurs_V1.jpg"
                alt="Entrepreneurs visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2 - For Parents */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden order-2 md:order-1"
            >
              <img
                src="/images/images/For_Parents_V1.jpg"
                alt="Parents visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                For Parents.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Balance feels lighter when everything is connected. Orion
                manages reminders, routines, and quiet time — so you can focus
                on what matters most.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Smart reminders for family schedules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Syncs home lighting and bedtime routines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Private, hands-free voice commands
                  </span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3 - For Executives */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                For Executives.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Orion reads the day before it unfolds — rearranging your
                schedule, briefing meetings, and ensuring decisions happen
                without distractions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Auto-briefing notes for meetings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Conflict-free calendar syncing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Context-aware notifications
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/images/For_Executives_V2.jpg"
                alt="Executives visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 4 - For Students */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden order-2 md:order-1"
            >
              <img
                src="/images/images/For_Students_V2.jpg"
                alt="Students visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                For Students.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Orion helps you stay clear-headed. It organizes notes,
                reminders, and focus sessions — all while protecting your
                privacy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Focus timer with adaptive study breaks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Contextual reminders for assignments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">Secure cloud memory</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 5 - Shared Intelligence */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Shared Intelligence.
              </h2>
              <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed">
                Orion lets trusted circles share memory — securely connecting
                devices, tasks, and people. Perfect for small teams or family
                life that moves together.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Shared routines and devices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Role-based access and controls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#00C2C7] mt-1 flex-shrink-0" />
                  <span className="text-[#FAFBFF]/80">
                    Unified billing and privacy-first design
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[420px] bg-[#2B2E33] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/images/Shared_Intelligence.jpg"
                alt="Shared Intelligence visual"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 6 - Built Around You */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/Learns_you,_not_the_other_way_around.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Learns you, not the other way around.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Orion doesn't need training. It listens once and adjusts forever —
              remembering context, preferences, and boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Privacy Promise */}
      <section className="py-32 px-6 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/images/Private_by_design.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Private by design.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Orion only works for you — never on you. You can see, pause, or
              erase anything it remembers.
            </p>
            <Link href="/privacy">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[#FAFBFF]/20 text-[#FAFBFF] hover:bg-[#FAFBFF]/10 px-8 h-12 text-sm font-medium mb-12 bg-transparent"
              >
                See Privacy Controls
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-32 px-6 bg-[#101214]">
        <div className="max-w-[980px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let Orion work quietly for you.
            </h2>
            <p className="text-[#FAFBFF]/70 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Start your free beta and see how effortless connection feels.
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="rounded-full bg-[#00C2C7] hover:bg-[#00C2C7]/90 text-white px-8 h-12 text-sm font-medium mb-12"
              >
                Join the Beta — Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FAFBFF]/10 bg-[#0A0A0B]">
        <div className="max-w-[980px] w-full mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">

            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">PRODUCT</h4>
              <ul className="space-y-2 text-[#FAFBFF]/50">
                <li><Link href="/how-it-works" className="hover:text-[#FAFBFF]">How It Works</Link></li>
                <li><Link href="/integrations" className="hover:text-[#FAFBFF]">Integrations</Link></li>
                <li><Link href="/pricing" className="hover:text-[#FAFBFF]">Pricing</Link></li>
                <li><Link href="/download" className="hover:text-[#FAFBFF]">Download</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">FOR PEOPLE</h4>
              <ul className="space-y-2 text-[#FAFBFF]/50">
                <li><Link href="/for-you" className="hover:text-[#FAFBFF]">Entrepreneurs</Link></li>
                <li><Link href="/for-you" className="hover:text-[#FAFBFF]">Parents</Link></li>
                <li><Link href="/for-you" className="hover:text-[#FAFBFF]">Executives</Link></li>
                <li><Link href="/for-you" className="hover:text-[#FAFBFF]">Students</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">RESOURCES</h4>
              <ul className="space-y-2 text-[#FAFBFF]/50">
                <li><Link href="/help" className="hover:text-[#FAFBFF]">Support</Link></li>
                <li><Link href="/help/status" className="hover:text-[#FAFBFF]">System Status</Link></li>
                <li><Link href="/press" className="hover:text-[#FAFBFF]">Press</Link></li>
                <li><Link href="/changelog" className="hover:text-[#FAFBFF]">Changelog</Link></li>
                <li><Link href="/help" className="hover:text-[#FAFBFF]">Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">COMPANY</h4>
              <ul className="space-y-2 text-[#FAFBFF]/50">
                <li><Link href="/about" className="hover:text-[#FAFBFF]">About Noble Forge</Link></li>
                <li><Link href="/careers" className="hover:text-[#FAFBFF]">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[#FAFBFF]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FAFBFF]/50">LEGAL</h4>
              <ul className="space-y-2 text-[#FAFBFF]/50">
                <li><Link href="/privacy" className="hover:text-[#FAFBFF]">Privacy Policy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-[#FAFBFF]">Terms of Service</Link></li>
                <li><Link href="/legal/dpa" className="hover:text-[#FAFBFF]">DPA</Link></li>
                <li><Link href="/legal/cookies" className="hover:text-[#FAFBFF]">Cookies</Link></li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-[#FAFBFF]/10 text-center mb-4">
            <p className="text-[#FAFBFF]/50 text-sm mb-2">
              Orion only works for you — never on you. See, pause, or erase anything.
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
