export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">🚀 Proyecto Vibe Coding</h1>
      <p className="text-xl text-slate-300 max-w-md">
        Aplicación Next.js desplegada con éxito en AWS Amplify.
      </p>
      <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <span className="text-emerald-400 font-mono">
          Estado: En Producción 🟢
        </span>
      </div>
    </main>
  );
}
