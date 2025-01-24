import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
    <div
      className=""
      style={{
        position: "relative", // Ensures the overlay and content align correctly
        backgroundImage: `url('wallpaper.jpg')`,
        backgroundSize: "cover", // Make the image cover the entire container
        backgroundRepeat: "no-repeat", // Prevent repeating
        backgroundAttachment: "fixed", // Make the background fixed on scroll
        backgroundPosition: "center", // Center the image
        backgroundColor: "rgba(255, 255, 255, 0.75)", // Black overlay with 5% transparency
        backgroundBlendMode: "overlay", // Blend the background color and image
      }}
      >
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
      </div>
    </>
  );
}
