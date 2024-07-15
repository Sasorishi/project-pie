module.exports = {
    semi: true, // Ajouter un point-virgule à la fin des lignes
    trailingComma: 'all', // Ajouter une virgule après le dernier élément des objets et tableaux
    singleQuote: true, // Utiliser des guillemets simples au lieu des guillemets doubles
    printWidth: 80, // Limiter la longueur des lignes à 80 caractères
    tabWidth: 2, // Utiliser une indentation de 2 espaces
    useTabs: false, // Utiliser des espaces plutôt que des tabulations
    jsxSingleQuote: false, // Utiliser des guillemets doubles dans les fichiers JSX
    bracketSpacing: true, // Ajouter des espaces entre les crochets dans les objets
    arrowParens: 'avoid', // Omettre les parenthèses autour des paramètres uniques des fonctions fléchées
    endOfLine: 'lf', // Utiliser les sauts de ligne LF
    plugins: [require.resolve('prettier-plugin-organize-imports')],
    overrides: [
      {
        files: '*.tsx',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.ts',
        options: {
          parser: 'typescript',
        },
      },
    ],
  };
  