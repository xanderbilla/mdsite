import CardBtn from "./components/CardBtn";
export default function Home() {
  const tabs = [
    { label: "Portfolio", href: "https://portfolio.xanderbilla.com" },
    { label: "Blogs", href: "https://blogs.xanderbilla.com", target: true },
    { label: "Projects", href: "https://projects.xanderbilla.com" },
    { label: "Contact", href: "https://contact.xanderbilla.com" },
  ];

  return (
    <main
    className="w-full min-h-[calc(100vh-12rem)] px-8 tablet:px-20 h-auto flex flex-col 
    items-center justify-start gap-8 transition-all duration-300 ease-in-out"
  >
      <h1 className="text-4xl text-center">Welcome!<h3 className="text-base text-gray-500 text-right">To my world!</h3></h1>
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
