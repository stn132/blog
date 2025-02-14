import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <img src="public/internet cost.png" alt="PNG" />
      <img src="public/internet cost.jpeg" alt="JPEG" />
      <img src="public/internet cost.webp" alt="WEBP" />
      <img src="public/internet cost.avif" alt="AVIF" />

      <picture>
          <source srcset="image-small.avif 480w, image-medium.avif 800w, image-large.avif 1200w" type="image/avif" />
          <source srcset="image-small.webp 480w, image-medium.webp 800w, image-large.webp 1200w" type="image/webp" />
          <source srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w" type="image/jpeg" />
          <img src="image-large.jpg" alt="Description of image" sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" />
      </picture>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
