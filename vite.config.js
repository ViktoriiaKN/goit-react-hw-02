import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  } /* Завдяки цьому налаштуванню, при збірці проєкту будуть створюватися додаткові .map файли для кожного з ваших JavaScript та CSS файлів, що дозволить вам мати зручний доступ до початкового коду під час відлагодження.
 */
});
