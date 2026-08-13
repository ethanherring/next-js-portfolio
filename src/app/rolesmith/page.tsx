import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import WaitlistForm from "./WaitlistForm";
import styles from "./rolesmith.module.css";

export const metadata: Metadata = {
  title: "Rolesmith — Identity and permissions, shaped for your stack",
  description:
    "A hosted or self-hosted identity platform for modeling RBAC, relationships, and fine-grained permissions once, then integrating them everywhere.",
};

const integrations = [
  { name: "Next.js", detail: "SDK + middleware", icon: Code2 },
  { name: "React", detail: "Hooks + components", icon: Boxes },
  { name: "Express", detail: "Server middleware", icon: Network },
  { name: "FastAPI", detail: "Python package", icon: Terminal },
  { name: "PostgreSQL", detail: "Policy data sync", icon: Database },
  { name: "Terraform", detail: "Provider", icon: GitBranch },
  { name: "Kubernetes", detail: "Helm chart", icon: Container },
  { name: "OIDC + SAML", detail: "Enterprise SSO", icon: KeyRound },
];

const capabilities = [
  {
    number: "01",
    title: "Model permissions like your product",
    text: "Start with roles, add attributes or relationships when you need them, and keep every rule in one readable policy model.",
  },
  {
    number: "02",
    title: "Ask one simple question",
    text: "Use the same check everywhere: can this identity perform this action on this resource? Rolesmith resolves the rest.",
  },
  {
    number: "03",
    title: "Run it on your terms",
    text: "Choose the managed cloud or deploy the same core in your infrastructure. Your application code stays the same.",
  },
];

export default function RolesmithPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Rolesmith navigation">
        <Link href="/rolesmith" className={styles.wordmark} aria-label="Rolesmith home">
          <span className={styles.mark} aria-hidden="true"><span /></span>
          Rolesmith
        </Link>
        <div className={styles.navLinks}>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#integrations">Integrations</Link>
          <Link href="/rolesmith/pricing">Pricing</Link>
          <Link href="/">Built by Ethan</Link>
        </div>
        <Link className={styles.navCta} href="#waitlist">
          Join waitlist <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span /> Private beta opening soon</div>
          <h1>Identity and permissions, shaped for your stack.</h1>
          <p>
            Authentication, RBAC, and fine-grained access control in one place—hosted by us or deployed in your cloud.
          </p>
          <div id="waitlist" className={styles.heroForm}>
            <WaitlistForm />
          </div>
          <div className={styles.trustRow} aria-label="Product attributes">
            <span><Check size={15} /> Open core</span>
            <span><Check size={15} /> Deploy anywhere</span>
            <span><Check size={15} /> No credit card</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualLabel}><span>Live policy graph</span><span>12.4 ms</span></div>
          <Image
            src="/rolesmith/identity-lattice.png"
            alt="An abstract identity core connected to a network of application permission nodes"
            width={1586}
            height={992}
            priority
          />
          <div className={styles.policyCard}>
            <span className={styles.policyIcon}><ShieldCheck size={16} /></span>
            <div><strong>access granted</strong><small>document:publish</small></div>
            <span className={styles.policyTime}>12ms</span>
          </div>
        </div>
      </section>

      <section className={styles.logoRail} aria-label="Core product capabilities">
        <span>AUTHENTICATION</span><i />
        <span>RBAC</span><i />
        <span>RELATIONSHIPS</span><i />
        <span>POLICY AS CODE</span><i />
        <span>AUDIT LOGS</span>
      </section>

      <section id="how-it-works" className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>One control plane</p>
          <h2>Stop rebuilding permissions in every service.</h2>
          <p className={styles.sectionLead}>
            Rolesmith keeps identities, policies, and decisions together—so every app speaks the same access language.
          </p>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map((item) => (
            <article key={item.number} className={styles.capabilityCard}>
              <span className={styles.number}>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.deploymentSection}>
        <div className={styles.deployCopy}>
          <p className={styles.kicker}>One API. Your boundary.</p>
          <h2>Cloud convenience. Self-hosted control.</h2>
          <p>
            Prototype against Rolesmith Cloud, then move into your own VPC without rewriting authorization logic—or run self-hosted from day one.
          </p>
          <ul>
            <li><Check size={17} /> Same APIs and SDKs in every deployment</li>
            <li><Check size={17} /> Your database, keys, and audit trail</li>
            <li><Check size={17} /> Multi-region managed option planned</li>
          </ul>
        </div>
        <div className={styles.deployDiagram} aria-label="Deployment options diagram">
          <div className={styles.diagramNode}><Server /><span><strong>Your stack</strong><small>Apps + services</small></span></div>
          <div className={styles.connector}><span>same API</span></div>
          <div className={styles.optionGrid}>
            <div className={styles.diagramNode}><Cloud /><span><strong>Rolesmith Cloud</strong><small>Fully managed</small></span></div>
            <div className={styles.diagramNode}><Container /><span><strong>Your cloud</strong><small>Self-hosted</small></span></div>
          </div>
        </div>
      </section>

      <section id="integrations" className={styles.section}>
        <div className={styles.integrationHeading}>
          <div>
            <p className={styles.kicker}>Planned integrations</p>
            <h2>Meet your stack where it is.</h2>
          </div>
          <p>First-class SDKs, middleware, and deployment tooling are on the roadmap. Join the waitlist and tell us what you need first.</p>
        </div>
        <div className={styles.integrationGrid}>
          {integrations.map(({ name, detail, icon: Icon }) => (
            <article className={styles.integrationCard} key={name}>
              <span className={styles.integrationIcon}><Icon size={21} /></span>
              <div><h3>{name}</h3><p>{detail}</p></div>
              <span className={styles.planned}>PLANNED</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p className={styles.kicker}>Forge access once</p>
          <h2>Make authorization the easy part.</h2>
        </div>
        <div className={styles.finalForm}>
          <WaitlistForm />
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/rolesmith" className={styles.wordmark}><span className={styles.mark}><span /></span>Rolesmith</Link>
        <p>Identity infrastructure for teams that would rather build their product.</p>
      </footer>
    </main>
  );
}
