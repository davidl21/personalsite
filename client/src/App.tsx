import React from "react";
import "./App.css";
import { TextParticle } from "@/components/ui/text-particle";
import { Github, Linkedin } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 w-[550px] h-[200px]">
        <TextParticle
          text="David Liu"
          fontSize={107}
          particleColor="3b82f6"
          particleSize={1}
          particleDensity={6}
        />
      </div>
      <div className="w-[437px]">
        <div className="w-8 h-[1px] bg-black my-1"></div>
        <div className="flex justify-between items-center">
          <p>currently: incoming swe @ meta</p>
          <div className="flex gap-2">
            <a
              href="https://github.com/davidl21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/davidl21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </a>
          </div>
        </div>
        <p>previously: cs @ uc berkeley</p>
        <h1 className="text-xl mt-12 font-bold">about me</h1>
        <p>
          I'm a software engineer based in the Bay Area working on Infra at Meta
          interested in distributed systems + infra. In my free time, I like
          tinkering with mechanical keyboards and hunting for new music on
          Spotify.
        </p>
        <p className="mt-4">contact me: davidl21[at]berkeley.edu</p>
        <h1 className="text-xl mt-12 font-bold">technologies</h1>
        <h1 className="text-xl mt-12 font-bold">experience</h1>
        <h1 className="text-xl mt-12 font-bold">projects</h1>
      </div>
    </div>
  );
}

export default App;
