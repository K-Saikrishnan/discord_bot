import console from 'console';
import * as esbuild from 'esbuild';
import process from 'process';

const config = {
  entryPoints: ['./src/**'],
  outdir: 'dist',
  minify: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
};

if (process.argv.includes('--watch')) {
  let ctx = await esbuild.context(config);
  await ctx.watch();
  console.log('Watching for file changes...');
} else {
  await esbuild.build(config);
  console.log('Build complete!');
}
