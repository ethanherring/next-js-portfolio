import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Container,
  HelpCircle,
  Infinity as InfinityIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import WaitlistForm from "../WaitlistForm";
import brandStyles from "../rolesmith.module.css";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing — Rolesmith",
  description:
    "Simple, predictable Rolesmith pricing: start free, pay per production app, or cap your bill with one all-in price.",
};

const plans = [
  {
    name: "Free",
    eyebrow: "Build something real",
    price: "$0",
    cadence: "forever",
    description: "For prototypes, side projects, and your first production app.",
    cta: "Join the waitlist",
    featured: false,
    features: [
      "1 production app",
      "Unlimited identities",
      "Hosted or self-hosted",
      "RBAC, attributes, and relationships",
      "7-day decision history",
      "Community support",
    ],
  },
  {
    name: "Pro",
    eyebrow: "Grow one app at a time",
    price: "$49",
    cadence: "per production app / month",
    description: "For teams bringing a shared access model to every service.",
    cta: "Register interest",
    featured: false,
    features: [
      "Everything in Free",
      "Unlimited identities and teammates",
      "Unlimited environments per app",
      "OIDC, SAML, and directory sync",
      "90-day decision history",
      "Email support",
    ],
  },
  {
    name: "All-in",
    eyebrow: "One price for the company",
    price: "$299",
    cadence: "per month, billed annually",
    description: "The whole product, across the whole organization, at a fixed price.",
    cta: "Get all-in access",
    featured: true,
    features: [
      "Unlimited production apps",
      "Unlimited identities and teammates",
      "Every feature and future upgrade",
      "One-year decision history",
      "Personal onboarding",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    question: "Why charge per app instead of per identity?",
    answer:
      "Your customer growth should be good news, not a billing event. Per-app pricing is easy to predict and lets everyone who needs access participate without a seat tax.",
  },
  {
    question: "Does All-in really mean unlimited apps?",
    answer:
      "Yes. Connect every production app in your organization for one fixed price. Identities, teammates, policies, and environments are unmetered on every paid plan.",
  },
  {
    question: "Do hosted and self-hosted deployments cost the same?",
    answer:
      "Yes. Pick the deployment that fits your security boundary. The APIs, SDKs, policy engine, and price stay the same, so moving later does not trigger a rewrite or a new contract.",
  },
  {
    question: "Can we switch or cancel?",
    answer:
      "Any time. Move between per-app and All-in pricing as your architecture changes. There are no long-term contracts, surprise overages, or required sales calls.",
  },
];

export default function PricingPage() {
  return (
    <main className={brandStyles.page}>
      <nav className={brandStyles.nav} aria-label="Rolesmith navigation">
        <Link href="/rolesmith" className={brandStyles.wordmark} aria-label="Rolesmith home">
          <span className={brandStyles.mark} aria-hidden="true"><span /></span>
          Rolesmith
        </Link>
        <div className={brandStyles.navLinks}>
          <Link href="/rolesmith#how-it-works">How it works</Link>
          <Link href="/rolesmith#integrations">Integrations</Link>
          <Link href="/rolesmith/pricing" aria-current="page">Pricing</Link>
          <Link href="/">Built by Ethan</Link>
        </div>
        <Link className={brandStyles.navCta} href="#waitlist">
          Join waitlist <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </nav>

      <header className={styles.hero}>
        <div className={styles.eyebrow}><span /> Simple on purpose</div>
        <h1>A price you can hold in your head.</h1>
        <p>
          Start free. Pay for each production app as you grow. When you reach seven, your bill stops growing too.
        </p>
        <div className={styles.promises}>
          <span><Check size={15} /> No identity metering</span>
          <span><Check size={15} /> No feature maze</span>
          <span><Check size={15} /> No sales call required</span>
        </div>
      </header>

      <section className={styles.plansSection} aria-labelledby="plans-heading">
        <div className={styles.sectionLabel}>
          <p id="plans-heading">Pick a package</p>
          <span>Planned founding pricing</span>
        </div>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article className={`${styles.planCard} ${plan.featured ? styles.featured : ""}`} key={plan.name}>
              {plan.featured && <div className={styles.bestValue}><Sparkles size={13} /> Best for 7+ apps</div>}
              <p className={styles.planEyebrow}>{plan.eyebrow}</p>
              <h2>{plan.name}</h2>
              <div className={styles.priceRow}>
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <Link className={styles.planCta} href="#waitlist">
                {plan.cta} <ArrowRight size={16} />
              </Link>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={16} /> {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>
          Prices shown in USD. All-in is $299/month when billed annually. Month-to-month availability is planned at $349/month.
        </p>
      </section>

      <section className={styles.capSection}>
        <div className={styles.capCopy}>
          <p className={styles.kicker}>The bill has a ceiling</p>
          <h2>More apps. Same maximum.</h2>
          <p>
            Per-app pricing makes Rolesmith accessible early. All-in makes it predictable later. Once seven apps are connected, you never have to do the math again.
          </p>
        </div>
        <div className={styles.capChart} aria-label="Monthly pricing rises by app until capped at 299 dollars">
          <div className={styles.chartTop}>
            <span>Monthly total</span>
            <strong>$299 max</strong>
          </div>
          <div className={styles.bars}>
            {[49, 98, 147, 196, 245, 294, 299, 299].map((price, index) => (
              <div className={styles.barColumn} key={`${price}-${index}`}>
                <span className={styles.barValue}>{index === 0 || index === 5 || index === 7 ? `$${price}` : ""}</span>
                <div className={`${styles.bar} ${index >= 6 ? styles.cappedBar : ""}`} style={{ height: `${Math.max(17, price / 3.2)}%` }} />
                <small>{index + 1}</small>
              </div>
            ))}
          </div>
          <div className={styles.chartAxis}><span>Production apps</span><span><InfinityIcon size={14} /> fixed from 7 onward</span></div>
        </div>
      </section>

      <section className={styles.includedSection}>
        <div className={styles.includedHeading}>
          <p className={styles.kicker}>The same core everywhere</p>
          <h2>No important feature held hostage.</h2>
          <p>
            Every package gets the identity and authorization fundamentals. Paid plans add operational scale and service—not a different policy engine.
          </p>
        </div>
        <div className={styles.includedGrid}>
          <article><ShieldCheck /><h3>Every permissions model</h3><p>RBAC, ABAC, and relationship-based rules can live together from day one.</p></article>
          <article><Code2 /><h3>Every SDK</h3><p>Use the same APIs, middleware, and policy checks in any supported stack.</p></article>
          <article><Cloud /><h3>Either deployment</h3><p>Choose Rolesmith Cloud or run the same core inside your own boundary.</p></article>
          <article><Container /><h3>Your data stays portable</h3><p>Export identities, policies, and audit records without a migration fee.</p></article>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqHeading}>
          <HelpCircle size={24} />
          <p className={styles.kicker}>Pricing questions</p>
          <h2>Straight answers.</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" className={styles.waitlistSection}>
        <div>
          <p className={styles.kicker}>Founding access</p>
          <h2>Help shape the price—and the product.</h2>
          <p>Join the private beta list. We’ll ask what you run today and keep early adopters on their founding price.</p>
        </div>
        <div className={styles.waitlistForm}>
          <WaitlistForm />
        </div>
      </section>

      <footer className={brandStyles.footer}>
        <Link href="/rolesmith" className={brandStyles.wordmark}>
          <span className={brandStyles.mark}><span /></span>Rolesmith
        </Link>
        <p>Identity infrastructure for teams that would rather build their product.</p>
      </footer>
    </main>
  );
}
