"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-400/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};

{
  /* <div className="grid  mt-[80px] p-10  grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
          <div className=" h-[300px] w-[350px] border-slate-300 border  rounded-xl  ">
            <div className="bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
              <Card>
                <Link href={``}>
                  <article className="relative h-[200px] w-[400px] texture p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <span>SOON</span>
                      </div>
                    </div>

                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      Example Title
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      this is mocl description for testing
                    </p>
                    <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </article>
                </Link>
              </Card>
            </div>

            <div className="h-[100px] bg-slate-100 rounded-2xl">
              <h2>temp text heading</h2>
            </div>
          </div>
        </div> */
}
