"use client";
import { useEffect } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import NumberTicker from "@/components/magicui/number-ticker";

export default function DesignPage() {
  useEffect(() => {
    // Dynamically adding the script once the component is mounted
    const script = document.createElement("script");
    script.id = "luma-checkout";
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-[10vw] gap-4 text-center">
        <section className="flex flex-col h-screen items-center pt-48 gap-4">
          <div
            className={cn(
              "group rounded-full border border-black/10 bg-neutral-200 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-300 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <a href="/about">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-700 hover:duration-300 hover:dark:text-neutral-300">
              <span>The UX Club presents</span>
            </AnimatedShinyText>
            </a>
          </div>
          <BlurFade>
            <div className="flex items-center justify-center w-[100vw]">
              <TextHoverEffect text="UXPERIENCE" />
            </div>
          </BlurFade>

          <div className="flex items-center justify-center relative">
            <BlurFade delay={2}>
              <div className="relative overflow-hidden hover:rotate-[4deg] hover:scale-110 transition ease-out">
                <img
                  alt="UXPERIENCE Logo"
                  className="w-[60vw] max-w-[600px] h-auto sm:w-[40vw]"
                  src="/Group3.svg"
                />
                <TypingAnimation
                  className="absolute inset-0 flex items-center justify-center font-bold text-[#08195E] rotate-[-2deg] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] p-[3%] sm:p-[2%] md:p-[5%] lg:p-[5%] xl:p-[5%] max-w-full overflow-hidden whitespace-nowrap min-w-0"
                  duration={200}
                  text="The First Draft"
                />
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={2}>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-[#08195E] hover:scale-110 transition ease-out">
                November 9th - 10th
              </span>
              <a
                className="luma-checkout--button hover:scale-105 transition ease-out"
                data-luma-action="checkout"
                data-luma-event-id="evt-BSCDnA2C8SG382k"
                href="https://lu.ma/event/evt-BSCDnA2C8SG382k"
              >
                Register Now!
              </a>
            </div>
          </BlurFade>
        </section>
        <section className="text-white w-screen bg-[#08195E]">
          <VelocityScroll
            className="text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-2xl dark:text-white md:text-4xl md:leading-[3rem] mb-8"
            default_velocity={-2.5}
            text="A Design-a-thon done like never before. November 9th - 10th. "
          />
          <br />
          <div className="flex flex-row items-top justify-center gap-4 pt-8">
            <div className="flex-1 h-auto sm:h-[70vh]">
              <p className="text-left text-sm sm:text-base lg:text-xl px-4 sm:px-[5vw] lg:px-[10vw]">
                Join us for an exciting 24-hour Design-a-thon, an intensive
                event that compresses weeks of product design into a single day
                of creativity and teamwork.
                <br />
                <br />
                Our Design-a-thon is not just about creating innovative product
                designs—it&apos;s an immersive experience that fosters skill
                development, creative problem-solving, and community building.
                Don&apos;t miss this chance to be part of a transformative event
                that showcases the best in rapid ideation and design execution.
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center text-white mt-4">
                <NumberTicker className="text-white" value={150} />+ Attendees
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center text-white mt-4">
                <NumberTicker className="text-white" value={40} />+ Projects
              </h1>
            </div>
            {/* <div className="flex-1 h-[70vh]">
                  <Iphone15Pro className="size-full" src="https://lu.ma/embed/event/evt-BSCDnA2C8SG382k/simple" isIframe/>
                </div>  */}
            <div className="flex-1 h-[50vh] flex justify-center items-center">
              <img
                alt="UXPERIENCE Logo"
                className="w-[50vw] sm:w-[30vw] md:w-[30vw] lg:w-[30vw] h-auto"
                src="/Pixie.png"
              />
            </div>
          </div>
          <VelocityScroll
            className="text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-2xl dark:text-white md:text-4xl md:leading-[3rem] mt-8"
            default_velocity={2.5}
            text="A Design-a-thon done like never before. November 9th - 10th. "
          />
        </section>

        {/* <section className="text-white w-screen h-screen bg-[#08195E]">
        <BentoGrid className="px-[10vw] pt-8 mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
              ))}
            </BentoGrid>
      </section> */}

        <section className="flex items-center w-screen h-screen justify-center gap-4">
          <h1 className="text-4xl font-bold text-center mt-8">
            Rules and Event Schedule coming soon...
          </h1>
        </section>

        <section className="flex items-center justify-center gap-4">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col gap-2 items-center justify-center pointer-events-none text-center">
              <p className="text-white font-bold text-3xl md:text-4xl lg:text-7xl drop-shadow-2xl">
                This is Your Experience.
              </p>
            </div>
          </BackgroundGradientAnimation>
        </section>
      </main>
    </>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
// );

// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embrace the excitement of exploring the unknown.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
// ];
