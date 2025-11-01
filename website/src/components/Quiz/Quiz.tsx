import React, { Suspense } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const QuizComponent = React.lazy(() => import('./QuizComponent'));

interface QuizLoaderProps {
  name: string;
  question?: string;
  src?: string;
}

export default function QuizLoader({ name, question, src }: QuizLoaderProps) {
  if (!ExecutionEnvironment.canUseDOM) return null;

  return (
    <Suspense fallback={<div>Loading Quiz...</div>}>
      <QuizComponent name={name} question={question} src={src} />
    </Suspense>
  );
}
