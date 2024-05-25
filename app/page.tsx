import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl font-mono">
        <h2 className="font-md">My collections</h2>
        <a href="">Items from database goes here.</a>
      </div>
    </main>
  );
}
