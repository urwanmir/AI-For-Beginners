import { RootProvider } from 'fumadocs-ui/provider/next';
import '../global.css';
import { Inter } from 'next/font/google';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
});

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: { displayName: 'English' },
    ar: { displayName: 'Arabic' },
    hi: { displayName: 'Hindi' },
    ur: { displayName: 'Urdu' },
  },
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }> | { lang: string };
  children: React.ReactNode;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>
          {children}
          <footer className="w-full mt-auto px-6 py-4 border-t border-secondary text-sm text-muted-foreground flex justify-between items-center bg-background z-50">
            <p>
              Curriculum adapted from the original{' '}
              <a href="https://github.com/microsoft/AI-For-Beginners" target="_blank" rel="noopener noreferrer" className="underline">
                Microsoft "AI-For-Beginners"
              </a>{' '}
              repository.
            </p>
            <p>Licensed under the MIT License.</p>
          </footer>
        </RootProvider>
      </body>
    </html>
  );
}
