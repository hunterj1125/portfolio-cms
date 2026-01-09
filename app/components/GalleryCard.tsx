'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArtworkItem } from '../types/artwork';

interface GalleryCardProps {
  artwork: ArtworkItem;
  onClick: () => void;
  index: number;
}

export default function GalleryCard({ artwork, onClick, index }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        layout: { duration: 0.3 },
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-xl"
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Transform container */}
      <motion.div
        animate={isHovered ? {
          rotateY: [0, 5, -5, 0],
          rotateX: [0, -5, 5, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Image Container with Gradient Overlay */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Emoji as placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-9xl">
            {artwork.imageUrl}
          </div>

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={isHovered ? {
              x: '200%',
              transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5 },
            } : {}}
          />

          {/* Particle effects on hover */}
          {isHovered && (
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: `${25 + i * 10}%`,
                    y: '100%',
                    opacity: 0,
                  }}
                  animate={{
                    y: '-10%',
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5 + i * 0.2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.05 + 0.2 }}
        >
          {/* Title with parallax effect */}
          <motion.h3
            className="text-2xl font-bold mb-2"
            animate={isHovered ? { x: 10 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {artwork.title}
          </motion.h3>

          {/* Artist and Category */}
          <motion.div
            className="flex items-center justify-between text-sm"
            animate={isHovered ? { x: 10 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span className="text-white/90">{artwork.artist}</span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              {artwork.category}
            </span>
          </motion.div>

          {/* Year */}
          <motion.p
            className="text-white/70 text-xs mt-2"
            animate={isHovered ? { x: 10 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {artwork.year}
          </motion.p>
        </motion.div>

        {/* Hover indicator */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0v6m0-6h6m-6 0H4"
            />
          </svg>
        </motion.div>

        {/* Border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={isHovered ? {
            borderColor: ['rgba(99, 102, 241, 0)', 'rgba(99, 102, 241, 0.8)', 'rgba(99, 102, 241, 0)'],
          } : {}}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>
    </motion.div>
  );
}
