import {
  Application,
} from 'typedoc';

const app = await Application.bootstrapWithPlugins({
  alwaysCreateEntryPointModule: true,
  compilerOptions: {
    skipLibCheck: true,
    transpileOnly: true,
  },
  entryPoints: ['index.ts'],
  emit: 'none',
  externalPattern: ['**/node_modules/**'],
  tsconfig: 'tsconfig.json',
});

const projectRefl = await app.convert();

for (const child of projectRefl.children[0].children) {
  console.log('Type:', child.type?.toString())
}
