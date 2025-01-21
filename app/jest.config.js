module.exports = {
  preset: "ts-jest", // Utilise ts-jest pour gérer TypeScript
  testEnvironment: "node", // Utilise l'environnement Node.js pour les tests
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transforme les fichiers .ts et .tsx avec ts-jest
  },
  moduleNameMapper: {
    // Mapper les alias définis dans tsconfig.json
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true, // Si tu rencontres des problèmes de performances, tu peux désactiver l'isolement des modules
    },
  },
};
