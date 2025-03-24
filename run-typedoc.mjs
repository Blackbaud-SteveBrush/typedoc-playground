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
const indexSignature = projectRefl.children[0].children[0].children[0];

console.log(
  `Type for "${indexSignature.escapedName}":`,
  indexSignature.type.toString(),
);
