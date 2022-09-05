# Playlist-Tailwind
dedicated to my Tailwind studies


# React + Tailwind:

craco = auxilia a instalação e configuração do tailwind

1º faça o create-react-app
2º npm install -D tailwindcss postcss autoprefixer
3º npm i craco @craco/craco (tipagem se necessario)
4º Criar o arquivp craco.config.js
/*
module.exports = {
    style: {
         postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
*/
5º npx tailwindcss-cli@latest init 
6º purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Mostra ao tailwind onde deve procurar os arquivos para gerar o css do app
7º altere o index.css
/*
@tailwind base;
@tailwind components;
@tailwind utilities;
*/
config[ctrl+] -> css unkown at rules //ignora os bugs no css 

Comandos GIT::
-git init
-git add .
-git commit -m "Message"
-git remote add origin https://github.com/
-git branch -M main
-git push -u origin main
