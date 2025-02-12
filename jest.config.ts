import nextJest from "next/jest.js"
import type {Config} from 'jest';

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    // "^@/(.*)$": "<rootDir>/app/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1"
  },
  setupFilesAfterEnv: ["<rootDir>jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
