//npx tailwindcss -o style3.css | --watch = assiste enquanto altera
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class', //'class' or 'media' --> media ativa o modo dark por padrão do seu sistema
  theme: { //Se insere as cores fontes e temas 
    extend: {
      colors: {
        brand: {
          100: '#FFBB33',
          200: '#FFBB44',
          300: '#FFBB55',
        } //Padrão de cor gerado e inserido no novo arquivo css
      }
    }, //Pode ser extendido ou se cria novos temas
  },
  variants:{
    extend:{

    }
  },
  plugins: [],
}
