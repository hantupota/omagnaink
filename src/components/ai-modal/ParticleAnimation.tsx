
import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const ParticleAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          initial={{ 
            x: Math.random() * 400, 
            y: Math.random() * 400, 
            opacity: 0 
          }}
          animate={{ 
            y: -100, 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Flame className="w-2 h-2" />
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleAnimation;
