// Configuração do Vite (ferramenta que traduz o código para o navegador ler)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Cookitwos/',
})
