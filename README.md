# plugins

npm create vite@latest meportfolio
npm i
npm install tailwindcss @tailwindcss/vite  and add in plugin also

npm i react-router-dom
npm i react-icons
 npm i framer-motion

 saira font

 
 <!-- from typing effect dev community  -->
  const typed = new Typed(el.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };


    <!-- deploy using github-->

    npm run build

    go in vite.config.js

    // https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build:{
    outDir:'./docs',
  },
})
