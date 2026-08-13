import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    number: "01",
    name: "Rolesmith",
    description:
      "Hosted or self-hosted identity infrastructure that makes roles and fine-grained permissions easy to model once and use everywhere.",
    href: "/rolesmith",
  },
  {
    number: "02",
    name: "Product name",
    description:
      "Use this space for the outcome or problem—not a list of frameworks and implementation details.",
    href: "#products",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-12">
        <header className="flex min-h-20 items-center justify-between pr-24">
          <Link
            href="#top"
            className="text-sm font-semibold tracking-[0.12em] transition-colors hover:text-primary"
          >
            ETHAN HERRING
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#products">Products</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#background">Background</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#writing">Writing</Link>
            </Button>
          </nav>
        </header>

        <section id="top" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Software Engineering Manager · Blue Origin
          </Badge>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            I build teams and software that make complex work simpler.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m a software engineering manager with a background as an SDE II
            and SDE III, focused on turning operational context into useful,
            durable products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#products">
                See what I&apos;m building
                <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#background">View my background</Link>
            </Button>
          </div>
        </section>

        <section id="products" className="scroll-mt-20 py-16 sm:py-24">
          <div className="grid gap-5 md:grid-cols-[11rem_1fr] md:gap-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Selected products
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              A selection of products I&apos;m building.
            </h2>
          </div>

          <div className="mt-12">
            {products.map((product) => (
              <div key={product.number}>
                <article className="group grid gap-4 py-8 transition-colors md:grid-cols-[4rem_1fr] md:gap-8 md:py-10">
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary">
                    {product.number}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-primary">
                      <Link href={product.href} className="inline-flex items-center gap-2">
                        {product.name}
                        {product.href !== "#products" && <ArrowRight className="size-5" />}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="background" className="scroll-mt-20 py-16 sm:py-24">
          <div className="grid gap-5 md:grid-cols-[11rem_1fr] md:gap-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Background
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Where I&apos;ve worked and studied.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2">
            <section className="py-8 md:pr-10 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Companies
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                Blue Origin · Textron
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                Leadership, software engineering, data products, supply chain,
                and manufacturing systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Career progression">
                <Badge variant="secondary">SDE II</Badge>
                <Badge variant="secondary">SDE III</Badge>
                <Badge>Engineering Manager</Badge>
              </div>
            </section>

            <section className="py-8 md:py-10 md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Education
              </p>
              <div className="mt-5 space-y-7">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    Georgia Tech
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    M.S. Computer Science · In progress
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    Baker University
                  </h3>
                  <p className="mt-2 text-muted-foreground">Bachelor of Science</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="writing" className="scroll-mt-20 py-16 sm:py-24">
          <div className="grid gap-5 md:grid-cols-[11rem_1fr] md:gap-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Featured writing
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Notes on building useful software and strong teams.
            </h2>
          </div>

          <article className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge>Featured</Badge>
              <span>Coming soon</span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Building software close to the work
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              The best tools I&apos;ve built started by understanding the
              repetitive, frustrating parts of someone else&apos;s day.
            </p>
            <Button variant="ghost" className="mt-5 px-0 hover:bg-transparent hover:text-primary" asChild>
              <Link href="/blog">
                View the writing
                <ArrowRight />
              </Link>
            </Button>
          </article>
        </section>

        <section aria-label="Social links" className="flex flex-wrap gap-2 py-16">
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary [&_svg]:size-5"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/ethan-herring-a00448132/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ethan Herring on LinkedIn"
            >
              <FaLinkedin />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary [&_svg]:size-5"
            asChild
          >
            <a
              href="https://x.com/EthanHerring007"
              target="_blank"
              rel="noreferrer"
              aria-label="Ethan Herring on X"
            >
              <FaXTwitter />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary [&_svg]:size-5"
            asChild
          >
            <a
              href="https://github.com/ethanherring"
              target="_blank"
              rel="noreferrer"
              aria-label="Ethan Herring on GitHub"
            >
              <FaGithub />
            </a>
          </Button>
        </section>

      </div>
    </main>
  );
}
