module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


/* Відключення правила react/prop-types в ESLint файлі .eslintrc.cjs має декілька можливих причин:

Використання TypeScript: Якщо ваш проєкт використовує TypeScript для типізації, використання PropTypes стає зайвим, оскільки TypeScript забезпечує статичну перевірку типів під час компіляції.

Спрощення коду: Вимкнення цього правила може спростити код, оскільки вам більше не потрібно явно визначати PropTypes для кожного компоненту, що може зменшити кількість коду і зробити його більш читабельним.

Чистота коду: Якщо ви дотримуєтесь підходу, що PropTypes є застарілими або не є корисними для вашого проєкту, ви можете просто вимкнути це правило для підтримання чистоти коду.

Налаштування ESLint під потреби проєкту: Вимкнення непотрібних правил дозволяє налаштувати ESLint під конкретні потреби проєкту, зменшити кількість помилкових спрацьовувань і попереджень, що покращує загальний робочий процес розробки.
 */
