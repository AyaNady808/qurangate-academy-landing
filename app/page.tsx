import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Courses />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
