"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, CircleDotIcon, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TermsOfServiceClient() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "acceptance", title: "Important — Acceptance" },
    { id: "parties-services", title: "1. Parties & Services" },
    { id: "account-eligibility", title: "2. Account & Eligibility" },
    { id: "permitted-use", title: "3. Permitted Use" },
    { id: "integrations", title: "4. Integrations & Third-Party APIs" },
    { id: "privacy", title: "5. Privacy" },
    { id: "content-licenses", title: "6. Content & Licenses" },
    { id: "service-changes", title: "7. Service Changes" },
    { id: "availability-support", title: "8. Availability & Support" },
    {
      id: "health-features",
      title: "9. Acceptable Use of Health-Adjacent Features",
    },
    { id: "security", title: "10. Security" },
    { id: "fees-taxes", title: "11. Fees & Taxes" },
    { id: "term-termination", title: "12. Term & Termination" },
    { id: "disclaimers", title: "13. Disclaimers" },
    { id: "limitation-liability", title: "14. Limitation of Liability" },
    { id: "indemnity", title: "15. Indemnity" },
    { id: "governing-law", title: "16. Governing Law & Venue" },
    { id: "changes-terms", title: "17. Changes to the Terms" },
    { id: "contact", title: "18. Contact" },
    { id: "arabic-summary", title: "Arabic Summary" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background" dir="ltr">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between text-xs">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CircleDotIcon className="size-3" />
            </div>
            <span className="font-semibold text-foreground">Noble Forge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/devices"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Devices
            </Link>
            <Link
              href="/integrations"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Help
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground hover:text-foreground h-7 px-3"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 border-b border-border/50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Clear terms for using Orion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Left: Table of Contents (Sticky) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Contents
                </h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right: Content */}
            <article className="prose prose-slate max-w-none">
              <div
                className="space-y-12 text-foreground leading-relaxed"
                style={{ fontSize: "17px", lineHeight: "1.6" }}
              >
                {/* Conspicuous Acceptance Box */}
                <section id="acceptance">
                  <div className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <h2 className="text-2xl font-semibold text-foreground">
                        Important — Acceptance
                      </h2>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      By creating an account, using Orion, or connecting
                      integrations, you agree to these Terms and our{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* 1. Parties & Services */}
                <section id="parties-services">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    1. Parties & Services
                  </h2>
                  <p className="text-muted-foreground">
                    These Terms are between [Noble Forge Legal Name] ("Noble
                    Forge," "we") and you ("you" or "User"). Orion includes our
                    apps, sites, APIs, and integrations ("Services").
                  </p>
                </section>

                {/* 2. Account & Eligibility */}
                <section id="account-eligibility">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    2. Account & Eligibility
                  </h2>
                  <p className="text-muted-foreground">
                    You must be legally capable of entering contracts and
                    provide accurate information. Keep your credentials
                    confidential; you're responsible for activities under your
                    account.
                  </p>
                </section>

                {/* 3. Permitted Use */}
                <section id="permitted-use">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    3. Permitted Use
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    You may use the Services for personal or business purposes
                    in compliance with these Terms, laws, and partner policies.
                    You must not:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                    <li>misuse or interfere with the Services;</li>
                    <li>
                      attempt to bypass security, rate limits, or access
                      controls;
                    </li>
                    <li>
                      reverse engineer or use automated scraping outside exposed
                      APIs;
                    </li>
                    <li>upload unlawful content or infringe others' rights;</li>
                    <li>
                      use third-party data obtained via integrations for model
                      training or unrelated purposes. (We prohibit AI/ML
                      training on partner-sourced data.)
                    </li>
                  </ul>
                </section>

                {/* 4. Integrations & Third-Party APIs */}
                <section id="integrations">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    4. Integrations & Third-Party APIs
                  </h2>
                  <p className="text-muted-foreground">
                    You may connect third-party accounts (e.g., Garmin, Fitbit)
                    via OAuth. You control what data is shared. Third-party
                    terms may apply; your use must comply with their developer
                    rules, scopes, and rate limits. We may suspend an
                    integration to protect users, comply with law, or meet
                    partner requirements.
                  </p>
                </section>

                {/* 5. Privacy */}
                <section id="privacy">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    5. Privacy
                  </h2>
                  <p className="text-muted-foreground">
                    Our{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    describes how we process personal data and your rights. By
                    using the Services, you acknowledge it.
                  </p>
                </section>

                {/* 6. Content & Licenses */}
                <section id="content-licenses">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    6. Content & Licenses
                  </h2>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                    <li>
                      <strong className="text-foreground">Your content:</strong>{" "}
                      You retain ownership. You grant us a limited, revocable,
                      non-exclusive license to process your content solely to
                      provide and improve the Services you use.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Partner-sourced data:
                      </strong>{" "}
                      Processed only to deliver the features you enable;
                      excluded from any model-training.
                    </li>
                    <li>
                      <strong className="text-foreground">Feedback:</strong> If
                      you submit feedback, you grant us a non-exclusive,
                      royalty-free license to use it to improve Orion.
                    </li>
                  </ul>
                </section>

                {/* 7. Service Changes */}
                <section id="service-changes">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    7. Service Changes
                  </h2>
                  <p className="text-muted-foreground">
                    We may update or discontinue features with reasonable notice
                    where practical. If a change materially reduces core
                    functionality, you may cancel and request prorated refunds
                    (if applicable to your plan).
                  </p>
                </section>

                {/* 8. Availability & Support */}
                <section id="availability-support">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    8. Availability & Support
                  </h2>
                  <p className="text-muted-foreground">
                    We aim for high availability but do not guarantee
                    uninterrupted service. Planned maintenance and partner
                    outages may affect availability.
                  </p>
                </section>

                {/* 9. Acceptable Use of Health-Adjacent Features */}
                <section id="health-features">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    9. Acceptable Use of Health-Adjacent Features
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    Where features process fitness/health-adjacent data, you
                    must:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                    <li>obtain any consents required under applicable laws;</li>
                    <li>avoid unauthorized sharing;</li>
                    <li>
                      refrain from using data to make discriminatory decisions.
                      (Some jurisdictions impose additional CHD obligations.)
                    </li>
                  </ul>
                </section>

                {/* 10. Security */}
                <section id="security">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    10. Security
                  </h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard safeguards (encryption,
                    access controls, logging). You must maintain the security of
                    your devices and networks.
                  </p>
                </section>

                {/* 11. Fees & Taxes */}
                <section id="fees-taxes">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    11. Fees & Taxes (if applicable)
                  </h2>
                  <p className="text-muted-foreground">
                    Paid plans are billed per the pricing you select. Unless
                    required by law, fees are non-refundable once the billing
                    period begins.
                  </p>
                </section>

                {/* 12. Term & Termination */}
                <section id="term-termination">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    12. Term & Termination
                  </h2>
                  <p className="text-muted-foreground">
                    You may stop using the Services or delete your account at
                    any time. We may suspend or terminate for cause (e.g.,
                    breach, fraud, security risk, illegal activity, repeated
                    partner-API violations). Upon termination we will disable
                    access and schedule deletion per the Privacy Policy.
                  </p>
                </section>

                {/* 13. Disclaimers */}
                <section id="disclaimers">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    13. Disclaimers
                  </h2>
                  <p className="text-muted-foreground">
                    Services are provided "as is" and "as available." We
                    disclaim warranties to the maximum extent permitted by law.
                  </p>
                </section>

                {/* 14. Limitation of Liability */}
                <section id="limitation-liability">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    14. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground">
                    To the extent permitted by law, neither party is liable for
                    indirect or consequential damages. Our aggregate liability
                    under these Terms shall not exceed the greater of (a)
                    amounts paid by you in the 12 months prior to the claim or
                    (b) USD 100.
                  </p>
                </section>

                {/* 15. Indemnity */}
                <section id="indemnity">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    15. Indemnity
                  </h2>
                  <p className="text-muted-foreground">
                    You will defend and indemnify Noble Forge against
                    third-party claims arising from your unlawful use of the
                    Services or violation of these Terms.
                  </p>
                </section>

                {/* 16. Governing Law & Venue */}
                <section id="governing-law">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    16. Governing Law & Venue
                  </h2>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of the United Arab
                    Emirates. Exclusive venue: the courts of Dubai, UAE, unless
                    another forum is required by mandatory consumer law.
                  </p>
                </section>

                {/* 17. Changes to the Terms */}
                <section id="changes-terms">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    17. Changes to the Terms
                  </h2>
                  <p className="text-muted-foreground">
                    We may update these Terms; material changes will be
                    notified. Continued use after the effective date constitutes
                    acceptance.
                  </p>
                </section>

                {/* 18. Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    18. Contact
                  </h2>
                  <div className="p-6 rounded-2xl border border-border bg-muted/30">
                    <p className="text-foreground font-semibold mb-4">
                      [Noble Forge Legal Name]
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href="mailto:legal@nobleforge.ai"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            legal@nobleforge.ai
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Address
                          </p>
                          <p className="text-foreground">
                            [address], Dubai, UAE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Arabic Summary */}
                <section id="arabic-summary">
                  <div className="p-8 rounded-2xl border border-border bg-muted/30">
                    <h2
                      className="text-2xl font-semibold mb-4 text-foreground"
                      dir="rtl"
                    >
                      ملخص باللغة العربية
                    </h2>
                    <p
                      className="text-muted-foreground leading-relaxed mb-4"
                      dir="rtl"
                    >
                      باستخدامك لخدمة Orion، فإنك توافق على الشروط أعلاه. يمكنك
                      قطع التكاملات أو حذف حسابك في أي وقت. النسخة الإنجليزية هي
                      المرجع القانوني.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      (This Arabic summary is non-binding. The English version
                      above is the controlling legal document.)
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background mt-20">
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs">
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                Product
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/devices"
                    className="hover:text-foreground transition-colors"
                  >
                    Devices
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                Resources
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/download"
                    className="hover:text-foreground transition-colors"
                  >
                    Download
                  </Link>
                </li>
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
                    href="/changelog"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                Company
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
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
                    href="/press"
                    className="hover:text-foreground transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Join Beta
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">
                Legal
              </h4>
              <ul className="space-y-2 text-muted-foreground">
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
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
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
              Orion uses only what you allow. You can see, pause, or erase
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
