import { FaLinkedin, FaGithub } from "react-icons/fa";

export function App() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen relative">
      <div className="text-[220px] leading-[100px] uppercase font-black max-md:text-6xl max-md:leading-10 select-none">
        <p className="text-zinc-950">lorem</p>
        <p className="translate-x-20 text-zinc-800 max-md:translate-x-10">ipsum</p>
        <p className="text-zinc-500">dolor</p>
      </div>
      <div className="absolute right-2 bottom-2 flex gap-3">
        <a href="https://www.linkedin.com/in/leonardo-prado-846496298/">
          <FaLinkedin size={32}/>
        </a>
        <a href="https://github.com/LeoAlvarenga404">
          <FaGithub size={32}/>
        </a>
      </div>
    </div>
  );
}
