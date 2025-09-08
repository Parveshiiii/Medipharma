// Simple build script for Vercel
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

async function main() {
  try {
    // Install dependencies
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    // Run the build
    console.log('Running build...');
    execSync('npm run build', { stdio: 'inherit' });

    // Create vercel.json configuration
    const vercelConfig = {
      version: 2,
      builds: [
        {
          src: 'package.json',
          use: '@vercel/static-build',
          config: { distDir: 'dist' }
        }
      ],
      routes: [
        { handle: 'filesystem' },
        { src: '/.*', dest: '/index.html' }
      ]
    };

    // Write vercel.json
    writeFileSync(
      join(process.cwd(), 'vercel.json'),
      JSON.stringify(vercelConfig, null, 2)
    );

    console.log('Vercel build configuration complete.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();
