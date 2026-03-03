import { RootProvider } from 'fumadocs-ui/provider/next';
import '../global.css';
import { Inter } from 'next/font/google';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/images/favicon.png',
  },
};

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

/**
 * Root layout component that sets the document language, provides the i18n UI context, and wraps page content with global structure and footer.
 *
 * @param params - An object (or a promise resolving to an object) containing `lang`, the language code used for the `html` element and to initialize the i18n provider.
 * @param children - The page content to render inside the layout.
 * @returns The top-level HTML structure: an `<html>` element with `lang` and font class, a `<body>` containing the `RootProvider` initialized for the specified language, the provided `children`, and a persistent footer.
 */
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
              <a href="https://github.com/RiWoTWeb3/AI-For-Beginners" target="_blank" rel="noopener noreferrer" className="underline">
                "AI-For-Beginners"
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
