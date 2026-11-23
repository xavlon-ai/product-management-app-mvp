export default function HomePage() {
  return (
    <main>
      <section aria-labelledby="page-title">
        <p className="eyebrow">Local development baseline</p>
        <h1 id="page-title">Mini Project Management</h1>
        <p>
          The TypeScript/Next.js application shell is ready for controlled, local-only Slice 1
          development.
        </p>
      </section>
      <section aria-labelledby="boundary-title">
        <h2 id="boundary-title">Current boundary</h2>
        <ul>
          <li>Local development with synthetic data only</li>
          <li>No deployment, hosting, managed provider, or production data</li>
          <li>No credentials are stored in the repository</li>
        </ul>
      </section>
    </main>
  );
}
