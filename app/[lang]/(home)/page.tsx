import Link from 'next/link';

export default async function HomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  return (
    <main className="flex flex-col flex-1 min-h-[calc(100vh-theme(spacing.16))] w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-primary/10 to-background flex-1">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-16 text-foreground">
          RiWoT AI Foundations
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mb-8 font-light leading-relaxed">
          A structured 12-week, 24-lesson curriculum on Artificial Intelligence. Built for beginners to learn Neural Networks, Computer Vision, NLP, and more.
        </p>
        <Link
          href={`/${lang}/docs/0-course-setup/setup`}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl font-semibold text-lg"
        >
          Getting Started
        </Link>
      </section>

      {/* What you will learn Section */}
      <section className="px-4 py-20 bg-background w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What you will learn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Symbolic AI</h3>
            <p className="text-muted-foreground">Learn the "good old" symbolic approach with Knowledge Representation and expert systems reasoning.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Neural Networks</h3>
            <p className="text-muted-foreground">Master the core of modern AI using frameworks like TensorFlow and PyTorch for deep learning.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
            <p className="text-muted-foreground">Build neural architectures for working with images, from CNNs to Object Detection and Segmentation.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
            <p className="text-muted-foreground">Understand text representation, embeddings, Transformers, and modern Large Language Models (LLMs).</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Advanced Techniques</h3>
            <p className="text-muted-foreground">Explore unique approaches like Genetic Algorithms and Deep Reinforcement Learning.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">AI Ethics</h3>
            <p className="text-muted-foreground">Discover how to build Responsible AI adhering to ethics and business principles.</p>
          </div>
        </div>
      </section>

      {/* Explicit Language Section Required By Prompt */}
      <section className="px-4 py-8 bg-muted w-full mt-auto flex flex-col items-center">
        <p className="text-sm font-medium mb-3">Explore in your language:</p>
        <div className="flex gap-4">
          <Link href="/en" className="text-sm border bg-background px-3 py-1 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">English</Link>
          <Link href="/ar" className="text-sm border bg-background px-3 py-1 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Arabic (العربية)</Link>
          <Link href="/hi" className="text-sm border bg-background px-3 py-1 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Hindi (हिंदी)</Link>
          <Link href="/ur" className="text-sm border bg-background px-3 py-1 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Urdu (اردو)</Link>
        </div>
      </section>
    </main>
  );
}
