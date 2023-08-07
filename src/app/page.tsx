import Image from 'next/image'
import HomeImg from '../../public/home-2-modified.jpeg'

export default function Home() {
  return (
    <main className="flex justify-center h-full items-center lg:gap-32 gap-14 flex-col lg:flex-row px-6 lg:p-0 flex-wrap">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="lg:text-7xl text-4xl font-bold">
          HI, I&apos;M <span className="text-[#66fcf1]">JORGE</span>
        </h1>
        <p className="lg:text-2xl text-xl font-semibold text-[#66fcf1]">
          Full Stack Developer
        </p>
        <p className="lg:text-2xl text-lg font-semibold text-[#66fcf1]">
          Frontend Development with React js and <br /> Backend with Node js
        </p>
      </div>
      <div className="lg:w-5/12 border border-cyan-300 rounded-xl overflow-hidden">
        <Image src={HomeImg} alt="Guy coding image" />
      </div>
    </main>
  )
}
