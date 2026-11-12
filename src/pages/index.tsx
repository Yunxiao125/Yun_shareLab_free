// src/pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Self‑Aware | 首页</title>
        <meta name="description" content="展示自我认知的个人站点" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary"
          >
            探索我的内心世界
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700">这里记录我的成长、兴趣、价值观以及自我测评。</p>
        </section>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="关于我" href="/about">
            简短自我介绍，了解我的背景与兴趣。
          </Card>
          <Card title="自测" href="/quiz">
            通过简易测评，发现自己的性格倾向。
          </Card>
          <Card title="成长日志" href="#">
            记录每日心情、阅读笔记与灵感随笔。（待完善）
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
