export default function BrandEssence() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-xl font-semibold tracking-[0.18em] text-neutral-200">
          Essence
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-neutral-300 md:text-base">
          Clean architecture. Precision fits. Monochrome luxury that moves with you.
          Designed with restraint; built for presence.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-neutral-800 px-6 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Silhouette
            </p>
            <p className="mt-3 text-sm text-neutral-200">Tailored lines. Controlled tension.</p>
          </div>
          <div className="border border-neutral-800 px-6 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Fabric
            </p>
            <p className="mt-3 text-sm text-neutral-200">Elevated blends. Weight with flow.</p>
          </div>
          <div className="border border-neutral-800 px-6 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Finish
            </p>
            <p className="mt-3 text-sm text-neutral-200">Matte palette. Sharp detailing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
