import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-4xl items-center justify-center px-6 py-5 sm:py-6">
          <Image
            src="/logo-dark.png"
            alt="IBA — Innovation Business Alliance"
            width={160}
            height={160}
            priority
            className="h-28 w-28 object-contain sm:h-36 sm:w-36"
          />
        </div>
      </header>

      <section className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-700">
            Innovation Business Alliance
          </span>

          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] tracking-tightish text-neutral-900 sm:text-5xl lg:text-6xl">
            A global platform connecting Brazil FinTech to Ireland and the UK
            financial markets.
          </h1>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                🚀 Vision
              </span>
              <p className="mt-3 text-base text-neutral-700 sm:text-lg">
                A global FinTech platform fostering innovative and sustainable
                business developments.
              </p>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                🚀 Mission
              </span>
              <p className="mt-3 text-base text-neutral-700 sm:text-lg">
                Empower FinTechs to innovate and trade sustainably across
                borders.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-10">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-600">
              💡 What we do
            </span>
            <p className="mt-3 max-w-2xl text-base text-neutral-700 sm:text-lg">
              We help Brazil FinTechs connect to Ireland and UK financial
              ecosystems by partnering with institutions that foster global
              business development.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                🤝 In the IBA you&apos;ll find
              </span>
              <ul className="mt-4 space-y-3 text-base text-neutral-700 sm:text-lg">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-600" />
                  <span>Global innovation trends and regulatory insights.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-600" />
                  <span>Global collaboration, trade missions and gatherings.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                🔗 Join the movement
              </span>
              <ul className="mt-4 space-y-3 text-base text-neutral-700 sm:text-lg">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  <span>Social Media</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  <span>Events &amp; Trade Missions</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  <span>Proprietary Platform (stealth)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-10">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-600">
              Current Phase
            </span>
            <div className="mt-4 space-y-5 text-base text-neutral-700 sm:text-lg">
              <p>
                The IBA Association is currently operating in a discreet,
                invitation-led phase in Brazil as we prepare for formal
                registration.
              </p>
              <p>
                At this stage, a select group of members is actively
                collaborating to shape the Association&apos;s global strategy,
                structure, and long-term direction.
              </p>
              <p>
                Access to the broader membership will open following the rollout
                of our platform. While no official launch date has been
                announced yet, this next phase will be carefully introduced.
              </p>
              <p>
                In the meantime, those interested in staying close to the
                initiative are invited to join our WhatsApp group and follow our
                LinkedIn page, where key updates and developments will be
                shared.
              </p>
            </div>

            <p className="mt-6 text-base text-neutral-700 sm:text-lg">
              Please contact{' '}
              <a
                href="mailto:hello@ibanetwork.org.br"
                className="font-medium text-primary-600 underline decoration-1 underline-offset-4 hover:text-primary-700"
              >
                hello@ibanetwork.org.br
              </a>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <a
              href="https://www.linkedin.com/company/innovationbusinessalliance"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-600 underline decoration-1 underline-offset-4 hover:text-primary-700"
            >
              Follow us on LinkedIn →
            </a>
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-6">
            <p className="text-xs text-neutral-500">
              ✨ Supported by the Brazil Embassy in Dublin, MWeds, Novos Ventures
              and ABFintechs.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-100/50">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
            Contact
          </span>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                General
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:info@ibanetwork.org"
                  className="font-medium text-primary-600 underline decoration-1 underline-offset-4 hover:text-primary-700"
                >
                  info@ibanetwork.org
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Business Development
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:business@ibanetwork.org"
                  className="font-medium text-primary-600 underline decoration-1 underline-offset-4 hover:text-primary-700"
                >
                  business@ibanetwork.org
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Events
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:events@ibanetwork.org"
                  className="font-medium text-primary-600 underline decoration-1 underline-offset-4 hover:text-primary-700"
                >
                  events@ibanetwork.org
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© Copyright IBA 2026</p>
            <p>Preview — full website launching soon.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
