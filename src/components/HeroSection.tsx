
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://github.com/hantupota/jumbled-whole-mosaic/raw/refs/heads/main/web2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(18, 18, 18, 0.75)' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://raw.githubusercontent.com/hantupota/jumbled-whole-mosaic-versiok/refs/heads/main/omagnaink-logo2025-transparant.png"
            alt="Omagna Ink Studio"
            className="mx-auto h-32 md:h-48 filter brightness-0 invert"
          />
        </div>
        
        <h1 className="font-cinzel font-bold text-alabaster mb-12 leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          RESTLESS SOULS<br />
          AWAKEN IN DARKNESS.
        </h1>
        
        <Button
          onClick={onEnter}
          className="border-2 border-molten-gold bg-transparent text-alabaster hover:bg-molten-gold hover:text-obsidian transition-all duration-300 px-8 py-4 text-lg font-lato animate-pulse-gold"
        >
          [ Enter the Sanctuary ]
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
