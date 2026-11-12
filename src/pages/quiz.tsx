// src/pages/quiz.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  { id: 1, q: "我更喜欢独自思考还是与人交流？", a: ["独自思考", "与人交流"] },
  { id: 2, q: "面对挑战，我会先准备还是直接行动？", a: ["先准备", "直接行动"] },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const handleSelect = (id: number, choice: string) => {
    setAnswers((prev) => ({ ...prev, [id]: choice }));
  };
  const completed = questions.every((q) => answers[q.id]);
  return (
    <>
      <Head>
        <title>Self‑Aware | 自测</title>
        <meta name="description" content="简易自我测评" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-primary mb-6"
        >
          简易自我测评
        </motion.h1>
        {questions.map((q) => (
          <Card key={q.id} title={q.q}>
            <div className="flex space-x-4">
              {q.a.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded ${answers[q.id] === opt ? "bg-primary text-white" : "bg-neutral hover:bg-secondary"}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </Card>
        ))}
        {completed && (
          <Card title="测评结果" className="mt-6">
            <p className="text-lg">感谢完成测评！下面是您的选择：</p>
            <ul className="list-disc pl-5 mt-2">
              {questions.map((q) => (
                <li key={q.id}>
                  <strong>{q.q}</strong>： {answers[q.id]}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </main>
      <Footer />
    </>
  );
}
