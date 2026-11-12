// src/pages/about.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import data from '../../data/biography.json';

export default function About() {
  const { name, intro, interests, values } = data;
  return (
    <>
      <Head>
        <title>Self‑Aware | 关于我</title>
        <meta name="description" content="关于我的自我认知介绍" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-primary mb-6"
        >
          关于 {name}
        </motion.h1>
        <Card title="自我简介">
          <p>{intro}</p>
        </Card>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card title="兴趣爱好">
            <ul className="list-disc pl-5 space-y-1">
              {interests.map((it: string) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Card>
          <Card title="价值观">
            <ul className="list-disc pl-5 space-y-1">
              {values.map((v: string) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
