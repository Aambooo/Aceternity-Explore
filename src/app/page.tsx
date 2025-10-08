import Image from "next/image";
import { CardStack } from "@/components/CardStack";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold mb-4">Aceternity UI Showcase</h1>
        
        <CardStack
          items={[
            {
              id: 1,
              name: "Hemanta Magar",
              designation: "UI/UX Designer",
              content: (
                <div>
                  <p className="text-lg font-semibold mb-2">Creating Beautiful Interfaces</p>
                  <p>Passionate about crafting user experiences that delight and inspire. 
                  Specializing in modern, clean design principles.</p>
                </div>
              ),
            },
            {
              id: 2,
              name: "Dipesh Shrestha",
              designation: "Full Stack Developer",
              content: (
                <div>
                  <p className="text-lg font-semibold mb-2">Building Robust Applications</p>
                  <p>Expert in React, Next.js, and modern web technologies. 
                  Love turning ideas into reality through code.</p>
                </div>
              ),
            },
            {
              id: 3,
              name: "Rabin Thapa",
              designation: "Creative Artist",
              content: (
                <div>
                  <p className="text-lg font-semibold mb-2">Bringing Ideas to Life</p>
                  <p>Digital artist specializing in illustrations and animations. 
                  Always exploring new creative techniques.</p>
                </div>
              ),
            },
          ]}
        />

        <div className="mt-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://ui.aceternity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Aceternity UI
          </a>
        </div>
      </main>
    </div>
  );
}