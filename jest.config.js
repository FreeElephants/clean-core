module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        "**/?(*.)+(spec.ts)",
    ],
    collectCoverageFrom: [
        'src/**/*.ts',
    ],
};
