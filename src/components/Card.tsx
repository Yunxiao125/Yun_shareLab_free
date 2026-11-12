// src/components/Card.tsx
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  children: React.ReactNode;
  href?: string;
}

export default function Card({ title, children, href }: CardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col"
    >
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <div className="flex-1 text-gray-700">{children}</div>
    </motion.div>
  );

  return href ? (
    <a href={href} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}
