import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface RotatingAvatarProps {
  imageUrl: string;
  name: string;
}

export const RotatingAvatar: React.FC<RotatingAvatarProps> = ({ imageUrl, name }) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      rotateY: 360,
      transition: { duration: 1.2, ease: "easeInOut" }
    });
  };

  return (
    <div className="relative group perspective">
      <motion.div
        animate={controls}
        onHoverStart={handleHover}
        className="relative w-64 h-64"
      >
        <div className="absolute inset-0 rounded-full overflow-hidden transform-gpu">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500/30 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <motion.h3
        className="mt-4 text-2xl font-serif text-rose-600 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h3>
    </div>
  );
};