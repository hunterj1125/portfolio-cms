'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArtworkItem } from '../types/artwork';

interface LightboxProps {
  artwork: ArtworkItem | null;
  onClose: () => void;
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        onClick={onClose}
      >
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-8 right-8 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-3xl z-10 transition-colors"
        >
          
        </motion.button>

        {/* Lightbox content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-6xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Image section */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main image/emoji */}
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
              className="relative z-10 text-9xl md:text-[200px]"
            >
              {artwork.imageUrl}
            </motion.div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Info section */}
          <div className="p-8 md:p-12 space-y-6">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {artwork.title}
              </h2>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="text-lg">by {artwork.artist}</span>
                <span className="text-lg"></span>
                <span className="text-lg">{artwork.year}</span>
              </div>
            </motion.div>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                {artwork.category}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {artwork.description}
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
