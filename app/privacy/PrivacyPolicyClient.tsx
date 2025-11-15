"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CircleDotIcon, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicyClient() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "who-we-are", title: "Who we are" },
    { id: "what-this-policy-covers", title: "1. What this policy covers" },
    { id: "the-data-we-process", title: "2. The data we process" },
    { id: "legal-bases-purposes", title: "3. Legal bases & purposes" },
    {
      id: "partner-integration-specifics",
      title: "4. Partner-integration specifics",
    },
    { id: "how-we-share-data", title: "5. How we share data" },
    { id: "international-transfers", title: "6. International transfers" },
    { id: "retention", title: "7. Retention" },
    { id: "your-rights-choices", title: "8. Your rights & choices" },
    { id: "security", title: "9. Security" },
    { id: "children", title: "10. Children" },
    { id: "changes-to-this-policy", title: "11. Changes to this policy" },
    { id: "contact", title: "12. Contact" },
    { id: "addendum-a", title: "Addendum A — UAE PDPL" },
    { id: "addendum-b", title: "Addendum B — U.S. Consumer Health Data" },
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Your data, on your terms.
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
                {/* Who we are */}
                <section id="who-we-are">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    Who we are
                  </h2>
                  <p className="text-muted-foreground">
                    Orion is a private-by-default assistant developed by [Noble
                    Forge Legal Name], a UAE-based company (registered in
                    Dubai). Contact: privacy@[yourdomain] | [phone] |
                    [registered address].
                  </p>
                </section>

                {/* 1. What this policy covers */}
                <section id="what-this-policy-covers">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    1. What this policy covers
                  </h2>
                  <p className="text-muted-foreground">
                    This policy explains what personal data we collect, why, how
                    we use and share it, how long we keep it, and the rights and
                    choices you have. It applies to our websites, apps, APIs,
                    integrations, and services (collectively, "Services").
                  </p>
                </section>

                {/* 2. The data we process */}
                <section id="the-data-we-process">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    2. The data we process
                  </h2>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                    <li>
                      <strong className="text-foreground">
                        Account & profile:
                      </strong>{" "}
                      name or alias, email, password hash, locale, time zone,
                      preferences.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Usage & device:
                      </strong>{" "}
                      app events, logs, crash reports, device model/OS,
                      approximate region, IP (for security).
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Content you provide:
                      </strong>{" "}
                      prompts, notes, tasks, settings, and files you choose to
                      connect.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Connected integrations (optional):
                      </strong>{" "}
                      with your explicit authorization (OAuth), Orion may access
                      categories of fitness/health-adjacent data from partners
                      such as Garmin or Fitbit (e.g., steps, heart rate, sleep
                      stages, activity summaries). Exact categories depend on
                      the scopes you approve. You can revoke any integration at
                      any time from within Orion or the partner portal.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Support & comms:
                      </strong>{" "}
                      messages you send us, feedback, survey responses.
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We do not collect special categories unless you choose to
                    connect a source that provides them. Where health-adjacent
                    data is processed, we apply heightened controls and minimize
                    collection to the least data necessary for the requested
                    feature. (HIPAA typically doesn't apply to consumer apps; we
                    follow applicable privacy laws and partner terms.)
                  </p>
                </section>

                {/* 3. Legal bases & purposes */}
                <section id="legal-bases-purposes">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    3. Legal bases & purposes (UAE PDPL + global)
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    We process data to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                    <li>
                      Provide the Services you request, including integrations
                      you connect (contract necessity).
                    </li>
                    <li>
                      Operate, secure, and improve features (legitimate
                      interests; we balance against your rights).
                    </li>
                    <li>
                      Communicate about updates, security, or transactional
                      matters (legal/contract).
                    </li>
                    <li>
                      Comply with laws, enforce terms, prevent fraud and abuse
                      (legal obligation/legitimate interests).
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Where required, we rely on your consent, which you may
                    withdraw at any time without affecting prior lawful
                    processing. Consent must be clear and easy to revoke under
                    UAE PDPL.
                  </p>
                </section>

                {/* 4. Partner-integration specifics */}
                <section id="partner-integration-specifics">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    4. Partner-integration specifics (Garmin, Fitbit, etc.)
                  </h2>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                    <li>
                      <strong className="text-foreground">
                        Transparent scopes:
                      </strong>{" "}
                      Orion requests only the partner scopes needed for the
                      feature you enable.
                    </li>
                    <li>
                      <strong className="text-foreground">User control:</strong>{" "}
                      You can disconnect at any time; upon disconnection we stop
                      pulling data and schedule deletion as described below.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        No model training:
                      </strong>{" "}
                      We never use partner-sourced personal data to train AI or
                      ML models. (This aligns with leading fitness-API
                      expectations to prohibit model-training on third-party
                      data.)
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Rate limits & fair use:
                      </strong>{" "}
                      Orion honors partner API rate limits and caching rules.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Security obligations:
                      </strong>{" "}
                      We adhere to partner minimum security requirements and
                      OAuth 2.0 flows.
                    </li>
                  </ul>
                </section>

                {/* 5. How we share data */}
                <section id="how-we-share-data">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    5. How we share data
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    We do not sell personal data. We share only with:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                    <li>
                      <strong className="text-foreground">
                        Processors (vendors):
                      </strong>{" "}
                      cloud hosting, error logging, analytics configured to
                      avoid building profiles across sites, and customer support
                      tools—bound by data processing agreements and security
                      measures.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Partners you choose:
                      </strong>{" "}
                      e.g., Garmin, Fitbit—only through explicit authorization.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal:</strong> when
                      required by law or to protect rights, safety, or
                      integrity.
                    </li>
                  </ul>
                </section>

                {/* 6. International transfers */}
                <section id="international-transfers">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    6. International transfers
                  </h2>
                  <p className="text-muted-foreground">
                    Data may be processed outside your country. Where required,
                    we implement appropriate safeguards (e.g., contractual
                    protections, standard clauses, or approved cross-border
                    mechanisms).
                  </p>
                </section>

                {/* 7. Retention */}
                <section id="retention">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    7. Retention
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    We keep data only as long as necessary for the stated
                    purposes, then delete or anonymize. We apply storage
                    limitation and minimization principles; retention varies by
                    data type and your settings.
                  </p>
                  <p className="text-muted-foreground mb-2 font-semibold">
                    Deletion SLAs:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                    <li>
                      <strong className="text-foreground">
                        Account deletion:
                      </strong>{" "}
                      within 30 days of confirmed request (backups roll off
                      within ~90 days).
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Integration disconnection:
                      </strong>{" "}
                      partner-sourced data is queued for deletion within 30 days
                      unless you reconnect or have active workflows that
                      explicitly depend on it.
                    </li>
                  </ul>
                </section>

                {/* 8. Your rights & choices */}
                <section id="your-rights-choices">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    8. Your rights & choices
                  </h2>
                  <p className="text-muted-foreground">
                    Subject to law, you may request access, correction,
                    deletion, restriction, portability, and objection, and you
                    may withdraw consent at any time. We will respond within
                    applicable timelines. UAE PDPL guarantees clear, simple
                    consent and withdrawal mechanisms.
                  </p>
                </section>

                {/* 9. Security */}
                <section id="security">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    9. Security
                  </h2>
                  <p className="text-muted-foreground">
                    We use industry-standard technical and organizational
                    measures, including encryption in transit and at rest,
                    access controls, least-privilege, audit logging, and
                    periodic risk assessments. We maintain additional controls
                    where health-adjacent data is involved. (Security
                    obligations align with partner API minimum requirements.)
                  </p>
                </section>

                {/* 10. Children */}
                <section id="children">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    10. Children
                  </h2>
                  <p className="text-muted-foreground">
                    Orion is not directed to children under 13 (or the minimum
                    age in your country). If we learn we've collected data from
                    a child without the required consent, we'll delete it.
                  </p>
                </section>

                {/* 11. Changes to this policy */}
                <section id="changes-to-this-policy">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    11. Changes to this policy
                  </h2>
                  <p className="text-muted-foreground">
                    We'll post updates here and adjust the "Last updated" date.
                    Material changes will be notified through the app or email.
                  </p>
                </section>

                {/* 12. Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">
                    12. Contact
                  </h2>
                  <div className="p-6 rounded-2xl border border-border bg-muted/30">
                    <p className="text-foreground font-semibold mb-4">
                      [Noble Forge AI
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href="mailto:privacy@[yourdomain]"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            privacy@nobleforge.ai
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
                            Po Box 391531, Dubai, UAE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Addendum A */}
                <section id="addendum-a"></section>

                {/* Addendum B */}
                <section id="addendum-b"></section>

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
                      نحن نجمع أقل قدر ممكن من البيانات لتشغيل الخدمة وتحسينها.
                      يمكنك سحب موافقتك، فصل التكاملات (جارمن/فيتبت)، وطلب حذف
                      بياناتك. النسخة الإنجليزية هي المرجع القانوني.
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
