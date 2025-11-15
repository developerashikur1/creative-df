"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Eye, Pause, Play, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo_asana from "../public/images/logos/Asana-Logo.png";
import logo_clickup from "../public/images/logos/clickup-logo.png";
import logo_monday from "../public/images/logos/monday-logo-x2.png";
import logo_notion from "../public/images/logos/notion-logo.png";
import logo_trello from "../public/images/logos/trello-logo.png";
import heroBg from "../public/images/img/hero-bg.png";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [selectedIntegration, setSelectedIntegration] = useState(
    "Productivity & Project Management"
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScene, setActiveScene] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef(null);
  const proactiveRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const { scrollYProgress: proactiveProgress } = useScroll({
    target: proactiveRef,
    offset: ["start end", "end start"],
  });

  const promptCategories = [
    "Home",
    "Work",
    "Family",
    "Travel",
    "Study",
    "Fitness",
    "Car",
    "Finance",
  ];

  const promptExamples: Record<
    string,
    Array<{ prompt: string; response: string }>
  > = {
    Home: [
      {
        prompt: "Dim kitchen lights & play soft music.",
        response: "Done — lights dimmed, playlist started.",
      },
      {
        prompt: "Set thermostat to 72 degrees.",
        response: "Temperature adjusted.",
      },
      { prompt: "Lock all doors.", response: "All doors secured." },
      {
        prompt: "Start coffee maker at 7am.",
        response: "Morning brew scheduled.",
      },
      {
        prompt: "Turn off all lights.",
        response: "Lights off throughout home.",
      },
      {
        prompt: "Play jazz in living room.",
        response: "Jazz playlist now playing.",
      },
      { prompt: "Close garage door.", response: "Garage door closed." },
      { prompt: "Set alarm for 6:30am.", response: "Alarm set for tomorrow." },
    ],
    Work: [
      { prompt: "Summarize today's meeting.", response: "Here's your brief." },
      {
        prompt: "Schedule call with team.",
        response: "Meeting scheduled for 2pm.",
      },
      { prompt: "Draft email to client.", response: "Draft ready for review." },
      {
        prompt: "Block focus time tomorrow.",
        response: "3 hours blocked on calendar.",
      },
      { prompt: "Find Q4 report.", response: "Report opened in Drive." },
      {
        prompt: "Remind me to follow up.",
        response: "Reminder set for tomorrow.",
      },
      { prompt: "Join video call.", response: "Connecting to meeting now." },
      {
        prompt: "Mute notifications for 2 hours.",
        response: "Do not disturb enabled.",
      },
    ],
    Family: [
      { prompt: "Notify Nadia I'll be late.", response: "Message sent." },
      { prompt: "Add milk to shopping list.", response: "Milk added to list." },
      { prompt: "When is Emma's recital?", response: "Saturday at 3pm." },
      { prompt: "Call Mom.", response: "Calling Mom now." },
      { prompt: "Share location with family.", response: "Location shared." },
      { prompt: "Plan dinner for 4.", response: "Recipe suggestions ready." },
      {
        prompt: "Set family movie night.",
        response: "Friday 7pm on calendar.",
      },
      {
        prompt: "Order pizza for tonight.",
        response: "Order placed, arrives 6:30pm.",
      },
    ],
    Travel: [
      { prompt: "Check flight status.", response: "On time, gate B12." },
      {
        prompt: "Book hotel in Seattle.",
        response: "3 options found in budget.",
      },
      {
        prompt: "Convert 100 USD to EUR.",
        response: "€92.50 at current rate.",
      },
      {
        prompt: "Find nearby coffee shop.",
        response: "Blue Bottle 0.3 miles away.",
      },
      { prompt: "Set out of office reply.", response: "Auto-reply activated." },
      {
        prompt: "Download offline maps.",
        response: "Seattle maps downloaded.",
      },
      { prompt: "Translate 'thank you' to French.", response: "Merci." },
      {
        prompt: "Check passport expiration.",
        response: "Valid until June 2027.",
      },
    ],
    Study: [
      { prompt: "Quiz me on biology.", response: "Starting practice quiz." },
      { prompt: "Summarize chapter 5.", response: "Key points compiled." },
      {
        prompt: "Set study timer for 45 minutes.",
        response: "Focus session started.",
      },
      {
        prompt: "Find research papers on AI.",
        response: "12 relevant papers found.",
      },
      { prompt: "Create flashcards.", response: "20 cards generated." },
      { prompt: "Schedule study group.", response: "Thursday 4pm confirmed." },
      { prompt: "Track study hours this week.", response: "18 hours logged." },
      {
        prompt: "Explain quantum physics.",
        response: "Simplified explanation ready.",
      },
    ],
    Fitness: [
      { prompt: "Log today's workout.", response: "45 min cardio recorded." },
      { prompt: "Track water intake.", response: "6 of 8 glasses today." },
      {
        prompt: "Start running playlist.",
        response: "High energy mix playing.",
      },
      { prompt: "How many steps today?", response: "8,432 steps so far." },
      { prompt: "Schedule gym time.", response: "Tomorrow 6am blocked." },
      {
        prompt: "Find healthy recipes.",
        response: "10 high-protein meals found.",
      },
      { prompt: "Set workout reminder.", response: "Daily 5pm reminder set." },
      { prompt: "Track calories burned.", response: "520 calories today." },
    ],
    Car: [
      { prompt: "Navigate to office.", response: "Route loaded, 22 min ETA." },
      {
        prompt: "Find nearest gas station.",
        response: "Shell 1.2 miles ahead.",
      },
      { prompt: "Check tire pressure.", response: "All optimal." },
      { prompt: "Schedule oil change.", response: "Appointment next Tuesday." },
      { prompt: "Play road trip playlist.", response: "Playlist started." },
      {
        prompt: "Find parking near restaurant.",
        response: "Garage 2 blocks away.",
      },
      {
        prompt: "Check traffic to airport.",
        response: "Light traffic, 35 minutes.",
      },
      {
        prompt: "Remind me to renew registration.",
        response: "Reminder set for next month.",
      },
    ],
    Finance: [
      { prompt: "Check account balance.", response: "$3,247.82 available." },
      { prompt: "Pay electric bill.", response: "Payment scheduled." },
      {
        prompt: "Track monthly spending.",
        response: "$2,100 spent this month.",
      },
      { prompt: "Set savings goal.", response: "$500/month goal created." },
      {
        prompt: "Find best credit card.",
        response: "3 recommendations ready.",
      },
      {
        prompt: "Calculate mortgage payment.",
        response: "$1,850/month estimated.",
      },
      {
        prompt: "Review investment portfolio.",
        response: "Up 7.2% this quarter.",
      },
      { prompt: "Split dinner bill.", response: "$32.50 per person." },
    ],
  };

  const allPromptExamples = [
    { prompt: "Dim kitchen lights & play soft music.", category: "Home" },
    { prompt: "Set thermostat to 72 degrees.", category: "Home" },
    { prompt: "Lock all doors.", category: "Home" },
    { prompt: "Start coffee maker at 7am.", category: "Home" },
    { prompt: "Turn off all lights.", category: "Home" },
    { prompt: "Play jazz in living room.", category: "Home" },
    { prompt: "Close garage door.", category: "Home" },
    { prompt: "Set alarm for 6:30am.", category: "Home" },
    { prompt: "Summarize today's meeting.", category: "Work" },
    { prompt: "Schedule call with team.", category: "Work" },
    { prompt: "Draft email to client.", category: "Work" },
    { prompt: "Block focus time tomorrow.", category: "Work" },
    { prompt: "Find Q4 report.", category: "Work" },
    { prompt: "Remind me to follow up.", category: "Work" },
    { prompt: "Join video call.", category: "Work" },
    { prompt: "Mute notifications for 2 hours.", category: "Work" },
    { prompt: "Notify Nadia I'll be late.", category: "Family" },
    { prompt: "Add milk to shopping list.", category: "Family" },
    { prompt: "When is Emma's recital?", category: "Family" },
    { prompt: "Call Mom.", category: "Family" },
    { prompt: "Share location with family.", category: "Family" },
    { prompt: "Plan dinner for 4.", category: "Family" },
    { prompt: "Set family movie night.", category: "Family" },
    { prompt: "Order pizza for tonight.", category: "Family" },
    { prompt: "Check flight status.", category: "Travel" },
    { prompt: "Book hotel in Seattle.", category: "Travel" },
    { prompt: "Convert 100 USD to EUR.", category: "Travel" },
    { prompt: "Find nearby coffee shop.", category: "Travel" },
    { prompt: "Set out of office reply.", category: "Travel" },
    { prompt: "Download offline maps.", category: "Travel" },
    { prompt: "Translate 'thank you' to French.", category: "Travel" },
    { prompt: "Check passport expiration.", category: "Travel" },
    { prompt: "Quiz me on biology.", category: "Study" },
    { prompt: "Summarize chapter 5.", category: "Study" },
    { prompt: "Set study timer for 45 minutes.", category: "Study" },
    { prompt: "Find research papers on AI.", category: "Study" },
    { prompt: "Create flashcards.", category: "Study" },
    { prompt: "Schedule study group.", category: "Study" },
    { prompt: "Track study hours this week.", category: "Study" },
    { prompt: "Explain quantum physics.", category: "Study" },
    { prompt: "Log today's workout.", category: "Fitness" },
    { prompt: "Track water intake.", category: "Fitness" },
    { prompt: "Start running playlist.", category: "Fitness" },
    { prompt: "How many steps today?", category: "Fitness" },
    { prompt: "Schedule gym time.", category: "Fitness" },
    { prompt: "Find healthy recipes.", category: "Fitness" },
    { prompt: "Set workout reminder.", category: "Fitness" },
    { prompt: "Track calories burned.", category: "Fitness" },
    { prompt: "Navigate to office.", category: "Car" },
    { prompt: "Find nearest gas station.", category: "Car" },
    { prompt: "Check tire pressure.", category: "Car" },
    { prompt: "Schedule oil change.", category: "Car" },
    { prompt: "Play road trip playlist.", category: "Car" },
    { prompt: "Find parking near restaurant.", category: "Car" },
    { prompt: "Check traffic to airport.", category: "Car" },
    { prompt: "Remind me to renew registration.", category: "Car" },
    { prompt: "Check account balance.", category: "Finance" },
    { prompt: "Pay electric bill.", category: "Finance" },
    { prompt: "Track monthly spending.", category: "Finance" },
    { prompt: "Set savings goal.", category: "Finance" },
    { prompt: "Find best credit card.", category: "Finance" },
    { prompt: "Calculate mortgage payment.", category: "Finance" },
    { prompt: "Review investment portfolio.", category: "Finance" },
    { prompt: "Split dinner bill.", category: "Finance" },
  ];

  const differenceSlides = [
    {
      title: "Private by Default",
      description:
        "Your data stays yours. Always. Transparent control over all data with a visual Consent Ledger.",
      image: "/images/img/Respects_WhatΓÇÖs_Yours_V1.jpg",
      linkText: "See Privacy Controls →",
      linkHref: "#privacy",
    },
    {
      title: "Discreetly Proactive",
      description:
        "Acts when needed, not when asked. Anticipates without interrupting with context-aware actions and quiet hours.",
      image: "/images/img/Data_Integrity_V1.jpg",
      linkText: "See Proactive in Action →",
      linkHref: "#proactive",
    },
    {
      title: "Seamlessly Connected",
      description:
        "Works with your tools, devices, and routines. Integrates with Outlook, Spotify, WYZE, and more.",
      image: "/images/img/Together_Effortlessly_V2.jpg",
      linkText: "See All Integrations →",
      linkHref: "#integrations",
    },
    {
      title: "Understands Context",
      description:
        "Sees your world — tone, intent, flow. Reads between the lines and infers what you need.",
      image: "/images/img/Understands_Without_Asking_V1.jpg",
      linkText: "See Context in Action →",
      linkHref: "#prompts",
    },
    {
      title: "Elegant Control",
      description:
        "Granular control. Always your call. Pause, limit, or erase memory anytime with simple commands.",
      image: "/images/img/Blends_Into_Everything.jpg",
      linkText: "See Control Options →",
      linkHref: "#privacy",
    },
  ];

  useEffect(() => {
    const calculateOffset = () => {
      if (!carouselRef.current) return;

      const firstCard = carouselRef.current.querySelector(
        "[data-card]"
      ) as HTMLElement;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 20; // 20px gap between cards
      const viewportWidth = window.innerWidth;

      // Calculate offset to center the active card
      // Move left by (cardWidth + gap) for each slide, then adjust to center
      const offset =
        -(currentSlide * (cardWidth + gap)) + viewportWidth / 2 - cardWidth / 2;
      setCarouselOffset(offset);
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, [currentSlide]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % differenceSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, differenceSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % differenceSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + differenceSlides.length) % differenceSlides.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const integrationCategories = [
    {
      name: "Productivity & Project Management",
      logos: [logo_asana, logo_monday, logo_clickup, logo_notion, logo_trello],
      tooltip: "Create tasks and sync updates instantly.",
    },
    {
      name: "Communication & Collaboration",
      logos: [
        "Gmail",
        "Outlook",
        "Slack",
        "Microsoft Teams",
        "Telegram",
        "WhatsApp",
      ],
      tooltip: "Send messages, join calls, or summarize threads.",
    },
    {
      name: "Smart Home & Devices",
      logos: ["WYZE", "WIZ", "Alexa", "Google Home", "Apple HomeKit"],
      tooltip: "Control lights, security, and home routines.",
    },
    {
      name: "Entertainment & Media",
      logos: ["Spotify", "YouTube", "Netflix", "Apple Music"],
      tooltip: "Play music, queue shows, or control playback.",
    },
    {
      name: "Calendar & Scheduling",
      logos: ["Google Calendar", "Outlook Calendar", "iCal"],
      tooltip: "Plan your day and resolve conflicts automatically.",
    },
    {
      name: "Automation & Utilities",
      logos: ["IFTTT", "Zapier", "Shortcuts"],
      tooltip: "Trigger workflows and orchestrate your digital world.",
    },
    {
      name: "Wellness & Lifestyle",
      logos: ["Fitbit", "Apple Health", "Strava"],
      tooltip: "Track activity, habits, and daily balance.",
    },
    {
      name: "Travel & Mobility",
      logos: ["Uber", "Google Maps", "Emirates", "Etihad"],
      tooltip: "Check routes, book rides, or track flights.",
    },
    {
      name: "Finance & Shopping",
      logos: ["PayPal", "Revolut", "Shopify", "Amazon"],
      tooltip: "Track spending or order supplies with voice.",
    },
  ];

  const proactiveScenes = [
    {
      id: "morning",
      label: "Morning",
      headline: "Start clear.",
      copy: "Before your inbox finds you, Orion's already queued the day — focus tracks on, flagged replies drafted.",
      img: "/images/img/Morning_V1.jpg",
    },
    {
      id: "meetings",
      label: "Meetings",
      headline: "Makes time for what matters.",
      copy: "When calendars collide, Orion quietly clears the way — reschedules, briefs, and buys you a breath.",
      img: "/images/img/Meetings_V1.jpg",
    },
    {
      id: "commute",
      label: "Commute",
      headline: "Keeps pace, never pressure.",
      copy: "If the road slows, Orion reroutes and lets your 10 a.m. know — calm intact, coffee still warm.",
      img: "/images/img/Commute_V1.jpg",
    },
    {
      id: "evenings",
      label: "Evenings",
      headline: "Wind down, not wind up.",
      copy: "As the lights fade, story mode starts. The world softens before you have to ask.",
      img: "/images/img/Evening.jpg",
    },
    {
      id: "weekend",
      label: "Weekend",
      headline: "Plans that plan themselves.",
      copy: "When plans shift, Orion moves the pieces for you — without you lifting a finger.",
      img: "/images/img/Weekend_V1.jpg",
    },
  ];

  const microDemos = [
    {
      title: "Morning Brief",
      caption: "Your day in 20s, with one-tap actions.",
      image: "/images/img/Morning_V1.jpg",
    },
    {
      title: "Conflict Resolver",
      caption: "Finds overlaps, proposes fixes.",
      image: "/images/img/Meetings_V1.jpg",
    },
    {
      title: "Smart Commute",
      caption: "Auto reroute + notify.",
      image: "/images/img/Commute_V1.jpg",
    },
    {
      title: "Home Wind-Down",
      caption: "Lights, music, next-day prep.",
      image: "/images/img/Weekend_V2.jpg",
    },
    {
      title: "Plan Shift",
      caption: "Weather-aware rescheduling.",
      image: "/images/img/Together_Effortlessly_V2.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header - Apple Style */}
      <Header />

      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-end pt-12 pb-32 overflow-hidden"
      >
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg.src}
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Full-width background image */}
        {/* <div className="absolute inset-0 w-full h-full">
          <img
            src="https://i.ibb.co.com/b5rNDqXy/565903110-10230115464856964-5405378609633025882-n.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div> */}

        {/* Text content overlaid on image, positioned lower */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center max-w-[980px] w-full mx-auto px-6"
        >
          {/* Massive headline - Apple style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="block text-foreground text-8xl">
              Finally understood.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed max-w-2xl mx-auto"
          >
            The quiet kind of intelligence — one that doesn’t chase you for
            attention. It just knows when to help.
          </motion.p>

          {/* Endpoint chips */}

          {/* Platform endpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8 text-muted-foreground text-xs"
          >
            {["iOS", "Android", "Mac", "Windows", "Home hubs"].map(
              (platform, index) => (
                <span key={index}>
                  {platform}
                  {index < 4 && " • "}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Link href="#difference">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-sm font-medium"
              >
                Meet Orion
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-secondary dark:border-white/40 dark:!text-white hover:bg-white/10 px-8 h-12 text-sm font-medium bg-transparent backdrop-blur-sm cursor-pointer"
              >
                Join the Beta
              </Button>
            </Link>
          </motion.div>

          {/* Small disclaimer text */}
        </motion.div>
      </section>

      {/* START: Updated section for "The Orion Difference" */}
      <section
        id="difference"
        className="py-32 px-6 bg-card min-h-screen rounded-b-4xl md:rounded-b-[100px]"
      >
        <div className="max-w-[885px] mx-auto mb-12 overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground">
              Knows your rhythm.
            </h2>
            <motion.div
              key={`link-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden">
          <div className="overflow-visible px-6">
            <motion.div
              ref={carouselRef}
              className="flex items-center gap-5"
              animate={{
                x: carouselOffset,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {differenceSlides.map((slide, index) => {
                const isActive = index === currentSlide;
                const cardWidth = "min(980px, 90vw)";

                return (
                  <motion.div
                    key={`slide-${index}`}
                    data-card
                    className="flex-shrink-0"
                    style={{ width: cardWidth }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-secondary border border-border/50 shadow-sm">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent flex items-end">
                        <div className="p-8 md:p-12">
                          <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
                            {slide.title}
                          </h3>
                          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-[10px]">
            <div className="flex items-center gap-2">
              {differenceSlides.map((_, index) => {
                const isCurrentSlide = currentSlide === index;
                return (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setCurrentSlide(index)}
                    className={
                      isCurrentSlide
                        ? "h-2 rounded-full transition-all bg-foreground w-8"
                        : "h-2 rounded-full transition-all bg-muted hover:bg-muted-foreground/50 w-2"
                    }
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>

            {/* Play/Pause button */}
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 backdrop-blur-sm flex items-center justify-center transition-all"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white dark:text-foreground" />
              ) : (
                <Play className="w-4 h-4 text-white dark:text-foreground ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </section>
      {/* END: Updated section for "The Orion Difference" */}

      <section className="py-32 px-6 bg-background min-h-screen rounded-b-4xl md:rounded-b-[100px] relative">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/img/Together_Effortlessly_V2.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
              Together, effortlessly.
            </h2>
            <p className="text-muted-foreground  text-lg md:text-xl ">
              From work to home, Orion connects seamlessly across your tools,
              apps, and devices — without intrusive access.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {integrationCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedIntegration(category.name)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedIntegration === category.name
                    ? "bg-primary text-primary-foreground"
                    : "rounded-full border dark:!text-white bg-transparent cursor-pointer dark:bg-secondary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedIntegration}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            {integrationCategories
              .filter((category) => category.name === selectedIntegration)
              .map((category) => (
                <div key={category.name}>
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.logos.map((logo, logoIndex) => (
                      <div
                        key={logoIndex}
                        className="relative flex-shrink-0 group/logo"
                        title={category.tooltip}
                      >
                        <div className="w-32 h-16 p-3 rounded-xl border border-border/50 bg-white flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white">
                          <img
                            src={logo.src || "/placeholder.svg"}
                            className=""
                          />
                        </div>
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-secondary border border-border/50 rounded-lg text-xs text-foreground whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                          {category.tooltip}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>

          {/* See all integrations link */}
          <div className="text-center mt-12">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
            >
              See all integrations →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-card min-h-screen rounded-b-4xl md:rounded-b-[100px]">
        <div className="max-w-[980px] w-full mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
              Ask Orion Anything
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl ">
              Natural commands for every moment of your life.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {promptCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "rounded-full border dark:!text-white bg-transparent dark:bg-secondary cursor-pointer"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* First row - scrolls left */}
          <motion.div
            className="flex gap-4 mb-4"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4">
                {allPromptExamples
                  .filter((example) => example.category === selectedCategory)
                  .map((example, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 w-80 min-h-[100px] p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-[#00C2C7] via-[#00A8AD] to-[#008E93] flex flex-col items-start justify-center"
                    >
                      <div className="text-white text-xl font-semibold mb-3 tracking-wider uppercase">
                        {example.category}
                      </div>
                      <p className="text-white font-medium text-base">
                        "{example.prompt}"
                      </p>
                    </div>
                  ))}
                {/* <div
  key={`${setIndex}-${index}`}
  className="flex-shrink-0 w-64 min-h-[200px] p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-[#00C2C7] to-[#008E93]"
>
  <div className="text-white text-sm font-semibold mb-3 tracking-wider uppercase">
    {example.category}
  </div>
  <p className="text-white font-medium text-base">"{example.prompt}"</p>
</div> */}
                {/* <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border/50 bg-secondary"
                    >
                      <div className="text-primary text-xs font-semibold mb-3 tracking-wider uppercase">
                        {example.category}
                      </div>
                      <p className="text-foreground font-medium text-sm">"{example.prompt}"</p>
                    </div> */}
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolls right */}
          <motion.div
            className="flex gap-4 mb-4"
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4">
                {allPromptExamples
                  .filter((example) => example.category === selectedCategory)
                  .map((example, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 w-80 min-h-[100px] p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-[#00C2C7] via-[#00A8AD] to-[#008E93] flex flex-col items-start justify-center"
                    >
                      <div className="text-white text-xl font-semibold mb-3 tracking-wider uppercase">
                        {example.category}
                      </div>
                      <p className="text-white font-medium text-base">
                        "{example.prompt}"
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>

          {/* Third row - scrolls left */}
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4">
                {allPromptExamples
                  .filter((example) => example.category === selectedCategory)
                  .map((example, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 w-80 min-h-[100px] p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-[#00C2C7] via-[#00A8AD] to-[#008E93] flex flex-col items-start justify-center"
                    >
                      <div className="text-white text-xl font-semibold mb-3 tracking-wider uppercase">
                        {example.category}
                      </div>
                      <p className="text-white font-medium text-base">
                        "{example.prompt}"
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="proactive"
        ref={proactiveRef}
        className="relative py-32 px-6 bg-background min-h-screen rounded-b-4xl md:rounded-b-[100px] border-b border-border/50"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-[980px] w-full mx-auto">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wider uppercase">
              Proactive Intelligence
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight gradient-text">
              Connected, quietly.
            </h2>
            <p className=" text-lg md:text-xl  text-muted-foreground leading-relaxed">
              Learns your rhythm. Offers help at the right moment — and stays
              quiet when you need focus.
            </p>
          </div>

          {/* Sub-Nav Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {proactiveScenes.map((scene, index) => (
              <button
                key={scene.id}
                onClick={() => setActiveScene(index)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeScene === index
                    ? "bg-primary text-primary-foreground"
                    : "rounded-full border dark:!text-white bg-transparent cursor-pointer dark:bg-secondary"
                }`}
              >
                {/* {activeScene === index && (
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                )} */}
                <span>{scene.label}</span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-[980px] w-full mx-auto mb-16">
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: `${
                    ((activeScene + 1) / proactiveScenes.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Sticky Scrollytelling Scenes */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 max-w-[1120px] mx-auto">
            {/* Left: Pinned Visual */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-chart-4/20 border border-border/50 lg:sticky lg:top-32">
              <motion.img
                key={activeScene}
                src={proactiveScenes[activeScene].img}
                alt={proactiveScenes[activeScene].label}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Right: Changing Text Content */}
            <div className="space-y-8">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
                  {proactiveScenes[activeScene].headline}
                </h3>
                <p className=" text-lg md:text-xl  text-muted-foreground leading-relaxed">
                  {proactiveScenes[activeScene].copy}
                </p>
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="cursor-pointer rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Yes, do that
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border dark:!text-white bg-transparent cursor-pointer dark:bg-secondary"
                  >
                    Ask me later
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full !white bg-transparent cursor-pointer"
                  >
                    Never suggest this
                  </Button>
                </div>
              </motion.div>

              {/* Scene Navigation */}
              <div className="flex gap-2 pt-8">
                {proactiveScenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScene(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeScene === index
                        ? "bg-primary w-12"
                        : "bg-muted hover:bg-muted-foreground/50 w-8"
                    }`}
                    aria-label={`Go to scene ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Line */}
          <div className="text-center mb-32 max-w-[980px] w-full mx-auto">
            <p className="text-muted-foreground text-sm">
              Proactivity respects quiet hours, meetings, and your preferences.
              Change anytime in{" "}
              <Link href="/settings" className="text-primary hover:underline">
                Elegant Control
              </Link>
              .
            </p>
          </div>

          {/* Micro-Demo Carousel */}
          <div className="mb-32 max-w-[980px] w-full mx-auto">
            <h3 className="text-4xl md:text-6xl font-semibold text-foreground mb-8 text-center">
              See It In Action
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {microDemos.map((demo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border/50"
                >
                  <img
                    src={demo.image || "/placeholder.svg"}
                    alt={demo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">
                        {demo.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {demo.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results Band (Metrics) */}
          {/* <div className="mb-32 max-w-[980px] w-full mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">18 min</div>
                <p className="text-muted-foreground text-sm">saved on weekday commute</p>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">2–4</div>
                <p className="text-muted-foreground text-sm">conflicts resolved per week</p>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">1 tap</div>
                <p className="text-muted-foreground text-sm">to accept suggested routines</p>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">user-visible proactivity log</p>
              </div>
            </div>
          </div> */}

          {/* Before/After Comparison */}
          <div className="mb-32 max-w-[980px] w-full mx-auto">
            <h3 className="text-4xl md:text-6xl font-semibold text-foreground mb-12 text-center">
              Before & After Orion
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-8 rounded-3xl border border-border/50 bg-secondary">
                <div className="text-white dark:text-muted-foreground text-xs font-semibold mb-4 tracking-wider uppercase">
                  Before Orion
                </div>
                <ul className="space-y-3 text-white dark:text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Manual juggling of schedules and tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Late notifications and missed windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Constant context switching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Reactive problem solving</span>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <div className="text-primary text-xs font-semibold mb-4 tracking-wider uppercase">
                  With Orion
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Anticipatory nudges at the right moment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>On-time arrivals and proactive alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Seamless flow between tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fewer decisions, more focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consent Callout */}
          {/* <div className="max-w-[980px] w-full mx-auto">
            <div className="p-8 md:p-12 rounded-3xl border border-border/50 bg-secondary text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">See, Pause, Erase.</h3>
              <p className="text-muted-foreground text-lg mb-6">You control your data. Always.</p>
              <Link href="/privacy">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Learn About Privacy
                </Button>
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-32 px-6 min-h-screen rounded-b-4xl md:rounded-b-[100px] ">
        <div className="max-w-[980px] w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
              Built for How You Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Entrepreneur",
                description:
                  "Delegates, coordinates, scales. Orion manages your calendar, automates follow-ups, and keeps your team in sync.",
              },
              {
                title: "The Modern Parent",
                description:
                  "Balances family and home routines. Orion tracks schedules, manages shopping lists, and coordinates family activities.",
              },
              {
                title: "The Executive",
                description:
                  "Handles cross-time-zone operations. Orion schedules meetings, summarizes reports, and manages communications seamlessly.",
              },
              {
                title: "The Student",
                description:
                  "Organizes, studies, and stays focused. Orion creates study schedules, generates flashcards, and tracks progress.",
              },
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border  border-primary/20 bg-primary/5 dark:border-border/50 dark:bg-secondary dark:hover:bg-secondary/80 transition-colors"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {persona.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-card rounded-b-4xl md:rounded-b-[100px] border-b border-border/50 min-h-screen relative">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="images/img/Data_Integrity_V1.jpg"
            alt="Neural Orb Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#060828] via-[#1b4046] to-[#64A8B0]" />
        </div>

        <div className="max-w-[980px] w-full mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              Your world stays yours.
            </h2>
            <p className=" text-lg md:text-xl  text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uses only what you allow. You can see, pause, or erase anything.
            </p>
          </div>

          {/* Privacy Image Placeholder */}
          {/* <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-chart-4/20 border border-border/50 mb-12">
            <img
              src="/placeholder.svg?height=800&width=1400"
              alt="Privacy Controls"
              className="w-full h-full object-cover"
            />
          </div> */}

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                See
              </h3>
              <p className="text-muted-foreground">
                Transparency you can trust
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Pause className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Pause
              </h3>
              <p className="text-muted-foreground">
                Silence whenever you need it
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Trash2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Erase
              </h3>
              <p className="text-muted-foreground">Gone means gone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTAs - Apple Style */}
      <section className="py-32 px-6 ">
        <div className="max-w-[980px] w-full mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="rounded-full bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground px-8 h-12"
              >
                Join the Beta — Free
              </Button>
            </Link>
            <Link href="/download">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border !text-foreground  px-8 h-12 !bg-transparent cursor-pointer bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Apps
              </Button>
            </Link>
            <Link href="/help">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border !text-foreground px-8 h-12 !bg-transparent cursor-pointer bg-transparent"
              >
                Get Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-background">
        <div className="max-w-[980px] w-full mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                PRODUCT
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-foreground transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/download"
                    className="hover:text-foreground transition-colors"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                FOR PEOPLE
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/for/entrepreneurs"
                    className="hover:text-foreground transition-colors"
                  >
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for/parents"
                    className="hover:text-foreground transition-colors"
                  >
                    Parents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for/executives"
                    className="hover:text-foreground transition-colors"
                  >
                    Executives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for/students"
                    className="hover:text-foreground transition-colors"
                  >
                    Students
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                RESOURCES
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/status"
                    className="hover:text-foreground transition-colors"
                  >
                    System Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-foreground transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                COMPANY
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About Noble Forge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                LEGAL
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/dpa"
                    className="hover:text-foreground transition-colors"
                  >
                    DPA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cookies"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50 text-center mb-4">
            <p className="text-muted-foreground text-sm mb-2">
              Orion only works for you — never on you. See, pause, or erase
              anything.
            </p>
            <p className="text-foreground font-semibold text-sm">
              Your Private AI. Impeccably Helpful.
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              © 2025 Orion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
