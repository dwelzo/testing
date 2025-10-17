const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  verbose: true,
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ["<rootDir>/testing/10. practice"],
  testMatch: ["**/test/**/*.test.ts"],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/testing/10. practice/app/$1",
    "^@test/(.*)$": "<rootDir>/testing/10. practice/test/$1",
    "^@double/(.*)$": "<rootDir>/testing/10. practice/app/double/$1",
  },

  collectCoverage: true,
  collectCoverageFrom: [
    "testing/10. practice/app/**/*.ts",
    "!testing/10. practice/app/**/*.d.ts",
    "!**/node_modules/**",
    "!testing/10. practice/app/math.ts",
    "!testing/10. practice/app/passwordChecker.ts",
    "!testing/10. practice/app/register.ts",
    "!testing/10. practice/app/logger.ts",
    "!testing/10. practice/app/weatherAPI.ts",
    "!testing/10. practice/app/double/weatherService.ts",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      statements: 90, // % of all statements executed
      branches: 90, // % of branches (if/else)
      functions: 90, // % of functions called
      lines: 90, // % of code lines executed
    },
  },

  clearMocks: true,
  resetModules: false,
  restoreMocks: true,
};
