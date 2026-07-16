"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
	return (
		<motion.div
			className="relative w-[400px] xl:w-[440px] aspect-[4/5]"
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
		>
			{/* ambient accent halo so the dark image blends into the light page */}
			<div className="absolute -inset-10 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

			<div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-ink/10 shadow-[0_24px_80px_-20px_rgba(0,71,255,0.45)]">
				<Image
					src="/assets/hero-image.png"
					alt="Portrait of Ola Ajayi"
					priority
					quality={100}
					fill
					sizes="(min-width: 1200px) 440px, 400px"
					className="object-cover"
				/>
				{/* soft edge vignette to seat the portrait in the card */}
				<div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(2,6,23,0.45)]" aria-hidden="true" />
				{/* white wash on the top-left corner so the dark image melts into the light page (and keeps the headline legible where it overlaps) */}
				<div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(247,248,251,0.85)_0%,rgba(247,248,251,0.35)_22%,rgba(247,248,251,0)_48%)]" aria-hidden="true" />
			</div>
		</motion.div>
	);
}

export default Photo
