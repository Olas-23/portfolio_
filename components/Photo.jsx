"use client"

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    const reduced = useReducedMotion();

  return (
		<motion.div
			className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
		>
			{/* portrait, clipped to a circle concentric with the ring */}
			<div className="absolute inset-[14px] rounded-full overflow-hidden bg-gradient-to-b from-surface to-accent/10">
				<Image
					src="/assets/img2.png"
					alt="Portrait of Ola Ajayi"
					priority
					quality={100}
					fill
					className="object-cover object-top scale-[1.15]"
				/>
			</div>

			{/* animated ring */}
			<motion.svg
				className="absolute inset-0 w-full h-full"
				fill="transparent"
				viewBox="0 0 506 506"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.circle
					cx="253"
					cy="253"
					r="250"
					stroke="rgba(0, 71, 255, 0.9)"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
					initial={{ strokeDasharray: '24 10 0 0' }}
					animate={
						reduced
							? { strokeDasharray: '4 250 22 22', rotate: 360 }
							: {
								strokeDasharray: ['0, 100, 224, 1', '16 25 92 72', '4 250 22 22'],
								rotate: [120, 360],
							}
					}
					transition={{
						duration: 20,
						repeat: reduced ? 0 : Infinity,
						repeatType: "reverse"
					}}
				></motion.circle>
			</motion.svg>
		</motion.div>
	);
}

export default Photo
