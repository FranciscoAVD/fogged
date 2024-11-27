"use client";
import { useState } from "react";
import Image from "next/image";
import bg from "../../public/bg-4.jpg";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { motion, AnimatePresence } from "framer-motion";
import { champions, TChampion } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import {
  SiTwitch,
  SiDiscord,
  SiYoutube,
  SiStreamlabs,
} from "@icons-pack/react-simple-icons";
const links = [
  {
    icon: SiTwitch,
    href: "https://www.twitch.tv/foggedftw2",
    color: "#9146FF",
  },
  { icon: SiDiscord, href: "http://discord.gg/foggedftw2", color: "#5865F2" },
  {
    icon: SiYoutube,
    href: "https://www.youtube.com/foggedftw2",
    color: "#FF0000",
  },
  {
    icon: SiStreamlabs,
    href: "https://streamlabs.com/foggedftw2/tip#/",
    color: "#80F5D2",
  },
];
export default function Home() {
  const [value, setValue] = useState("");
  const [champion, setChampion] = useState<TChampion>();
  return (
    <>
      <div className="fixed inset-0">
        <Image
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950/90 to-red-950/70" />
      </div>
      <div className="relative min-h-screen">
        <header className="">
          <div className="grid grid-rows-2 container mx-auto">
            <nav className="flex items-center gap-x-4 mx-auto">
              {links.map((l) => (
                <Link key={l.href} href={l.href} target="_blank">
                  {<l.icon fill={l.color} className={`size-6`} />}
                </Link>
              ))}
            </nav>
            <Image src={logo} alt="Logo" className="h-16 w-auto mx-auto" />
          </div>
        </header>
        <main className="pt-10 pb-32">
          <div className="h-full container mx-auto px-4">
            <section>
              <h1 className="text-xl lg:text-2xl font-bold text-center uppercase">
                Tryndamere matchup guide
              </h1>
              <p className="mx-auto text-center text-neutral-100/70 max-w-lg">
                This guide was created by{" "}
                <Link
                  href="https://www.twitch.tv/foggedftw2"
                  className="text-violet-400 underline"
                  target="_blank"
                >
                  Fogged
                </Link>{" "}
                and this is only a tool to ease the lookup process. Click to
                view the original{" "}
                <Link
                  href="https://docs.google.com/spreadsheets/d/1xYhZoWcXslNSJMC4U0cZNiaYyZn79Peqr5m0SsunC7w/edit?gid=0#gid=0"
                  target="_blank"
                  className="text-red-500 underline"
                >
                  spreadsheet
                </Link>
                .
              </p>
            </section>
            <section className="mt-10 ">
              <div className="relative mx-auto w-fit space-y-4">
                <Input
                  placeholder="Search for matchup"
                  className="bg-white w-[300px] text-black"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  autoFocus
                />
                <AnimatePresence>
                  {value && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: 250,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="absolute w-[300px] bg-white divide-y rounded-md overflow-y-auto"
                    >
                      {champions
                        .filter((c) =>
                          c.name.toLocaleLowerCase().includes(value)
                        )
                        .map((c) => (
                          <li key={c.name}>
                            <button
                              className={cn(
                                "flex items-center h-12 w-full px-2  text-black",
                                {
                                  "hover:bg-red-100": c.difficulty === "Hard",
                                  "hover:bg-yellow-100":
                                    c.difficulty === "Medium",
                                  "hover:bg-green-100": c.difficulty === "Easy",
                                  "hover:bg-violet-100":
                                    c.difficulty === "INTeresting",
                                }
                              )}
                              onClick={() => {
                                setChampion(c);
                                setValue("");
                              }}
                            >
                              <div className="bg-violet-500 p-2 rounded-full">
                                <UserIcon className="size-4 text-white" />
                              </div>

                              <span className="ml-2">{c.name}</span>
                              <span
                                className={cn("ml-auto", {
                                  "text-red-500": c.difficulty === "Hard",
                                  "text-yellow-500": c.difficulty === "Medium",
                                  "text-green-500": c.difficulty === "Easy",
                                  "text-violet-500":
                                    c.difficulty === "INTeresting",
                                })}
                              >
                                {c.difficulty}
                              </span>
                            </button>
                          </li>
                        ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </section>
            <section>
              <AnimatePresence>
                {champion && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.35,
                    }}
                    exit={{ opacity: 0 }}
                    className="mt-10 mx-auto p-2 w-full max-w-lg rounded-lg"
                  >
                    <section className="mb-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-violet-500 p-2 rounded-full mr-2">
                          <UserIcon className="size-6 text-white" />
                        </div>
                        <span
                          className={cn("text-lg font-semibold", {
                            "text-red-500": champion.difficulty === "Hard",
                            "text-yellow-500": champion.difficulty === "Medium",
                            "text-green-500": champion.difficulty === "Easy",
                            "text-violet-500":
                              champion.difficulty === "INTeresting",
                          })}
                        >
                          {champion.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-x-4">
                        <div className="size-10 rounded-full overflow-hidden">
                          <Image
                            src={champion.runes.image}
                            alt="rune"
                            className="w-full h-auto"
                          />
                        </div>

                        <div className="flex">
                          <Image
                            src={champion.summoners.d}
                            alt="summoner"
                            className="size-8"
                          />
                          <Image
                            src={champion.summoners.f}
                            alt="summoner"
                            className="size-8"
                          />
                        </div>
                        <div className="ml-auto w-fit">
                          <Image
                            src={champion.startingItem}
                            alt="starting item"
                            className="size-8"
                          />
                        </div>
                      </div>
                    </section>

                    <p className="text-justify text-white/70">
                      {champion.guide}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
