export default {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
};
