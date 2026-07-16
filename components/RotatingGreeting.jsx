"use client"

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
	{ text: "Hi", lang: "en" },
	{ text: "Salut", lang: "fr" },
	{ text: "안녕", lang: "ko" },
	{ text: "Hola", lang: "es" },
	{ text: "Ciao", lang: "it" },
	{ text: "Báwo", lang: "yo" },
	{ text: "Sannu", lang: "ha" },
	{ text: "Olá", lang: "pt" },
	{ text: "Hallo", lang: "de" },
	{ text: "नमस्ते", lang: "hi" },
];

const RotatingGreeting = ({ className = "" }) => {
	const reduced = useReducedMotion();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (reduced) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % greetings.length), 2200);
		return () => clearInterval(id);
	}, [reduced]);

	const current = greetings[index];

	return (
		<span className={`inline-flex overflow-hidden align-bottom ${className}`}>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={current.lang}
					lang={current.lang}
					initial={{ y: "100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: "-100%", opacity: 0 }}
					transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
					className="inline-block"
				>
					{current.text}
				</motion.span>
			</AnimatePresence>
		</span>
	);
};

export default RotatingGreeting;
