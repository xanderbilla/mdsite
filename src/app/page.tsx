import CardBtn from "./components/CardBtn";

export const metadata = {
  title: "Template | mdsite",
  description: "A template to start the work",
};

export default function Home() {
  const tabs = [
    { label: "Portfolio", href: "https://portfolio.xanderbilla.com" },
    { label: "Blogs", href: "https://blogs.xanderbilla.com", target: true },
    { label: "Projects", href: "https://projects.xanderbilla.com" },
    { label: "Contact", href: "https://contact.xanderbilla.com" },
  ];

  return (
    <main
      className="w-full min-h-[calc(100vh-14rem)] h-auto flex flex-col items-center 
    justify-start gap-8 transition-all duration-300 ease-in-out py-6"
    >
      <h1 className="text-4xl text-center">Welcome to mdsite</h1>
      <p className="text-lg text-center">
        To know more about me and my work, please navigate to the following
        pages:
      </p>
      <div className="laptop:w-1/2 grid grid-cols-1 gap-4 tablet:grid-cols-2">
        {tabs.map((tab) => (
          <CardBtn
            key="index"
            className="w-auto h-auto text-lg"
            label={tab.label}
            href={tab.href}
            target={tab.target}
          />
        ))}
      </div>
    </main>
  );
}
