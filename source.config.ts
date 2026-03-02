import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkImage } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: z.object({
      title: z.string().optional().default('Unititled'),
      description: z.string().optional().default(''),
      full: z.boolean().optional().default(false),
    }),
  }
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      // Disable remote image size fetching to avoid build failures on external images
      [remarkImage, { useImgSize: false }],
    ],
  },
});
