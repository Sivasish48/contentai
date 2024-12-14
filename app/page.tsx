import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Button } from "../components/ui/moving-border";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Star } from "lucide-react";
import Link from "next/link";

function Home() {
  const words = [
    {
      text: "Unleash",
    },
    {
      text: "your",
    },
    {
      text: "creativity",
    },
    {
      text: "with",
    },
    {
      text: "Multitool-AI.",
      className: "text-purple-500",
    },
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 relative flex flex-col items-center justify-center gap-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.05),rgba(126,34,206,0.03),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="__intro flex flex-col justify-center items-center z-10">
        <p className="text-white text-sm sm:text-base p-4 text-center max-w-xl">
        Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>

      <Link href="/sign-in">
        <Button
          borderRadius="1.75rem"
          className="bg-purple-600 hover:bg-purple-700 text-white border-purple-800/20 transition-colors duration-200"
        >
          Let's Get Started
        </Button>
      </Link>

      <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 z-10">
        <div className="flex bg-gray-900/50 p-3 rounded-2xl">
          <AnimatedTooltip items={people} />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center sm:items-start bg-gray-900/50 p-4 rounded-2xl">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-purple-500 fill-purple-500" />
            ))}
          </div>
          <p className="text-white">
            <span className="font-semibold z-20">1,250</span> happy users
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;