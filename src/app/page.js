import Image from "next/image";
import bg from "../../public/background/home-background.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover object-center opacity-25"
      />
    </main>
  );
}
