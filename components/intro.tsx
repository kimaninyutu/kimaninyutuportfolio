import Image from 'next/image'
import authorImage from '@/public/images/authors/kimani.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Kimani Hezekiah Nyutu.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Full-Stack Developer based in Kenya. I specialize in creating scalable web applications and backend
          systems using modern technologies like React, Django, and Node.js. I&#39;m passionate about leveraging my
          skills to build impactful software solutions and collaborating with teams to solve real-world problems.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Kimani Hezekiah Nyutu'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
