import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-black">
        ContentAI with NEXT.JS
      </h1>
      <Button variant="default" className="bg-white text-black">Get Started</Button>
    </div>
  );
}
