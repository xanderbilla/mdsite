import Social from "./components/Social";
import Form from "./Layout/Form";

export const metadata = {
  title: "Contacto | Xander Billa",
  description:
    "A platform to send message and speak to developers for help and support",
};

export default function Home() {
  return (
    <main
      className="w-full min-h-[calc(100vh-14rem)] h-auto flex flex-col items-center 
    justify-start gap-8 transition-all duration-300 ease-in-out"
    >
      <div className="w-full flex items-center justify-center">
        <h1 className="px-4 text-xl md:text-2xl lg:text-3xl text-slate-900">
          Leave Your Message / Feedback / Query
        </h1>
      </div>
      <div className="flex items-center flex-col lg:flex-row-reverse justify-center my-8 w-full h-full gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <Form />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-medium">
            Connect with me at
          </h1>
          <Social />
        </div>
      </div>
    </main>
  );
}
