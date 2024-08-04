export const metadata = {
  title: "Template | mdsite",
  description: "A template to start the work",
};

export default function Home() {
  return (
    <main
      className="w-full min-h-[calc(100vh-14rem)] h-auto flex flex-col items-center 
    justify-start gap-8 transition-all duration-300 ease-in-out"
    >
      <div className="w-full h-96 flex items-center justify-center">
        <h1 className="px-4 text-xl md:text-2xl lg:text-3xl text-slate-900">
          Start Your editing from scratch!! ;)
        </h1>
      </div>
    </main>
  );
}
