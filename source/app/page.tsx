import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}
