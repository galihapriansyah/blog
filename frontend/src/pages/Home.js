import React from "react";

const Home = () => {
  return (
    <main className="w-full pb-[1000px] m-auto text-white" >
    
      <section className="bg-slate-800 p-8" 
      >
        <h1 className="text-4xl text-center font-extrabold my-2">
          Codersid
        </h1>
        <p className="my-4 italic text-justify">adalah sebuah website untuk anda belajar web developer dari awal, mempelajari bahasa pemrograman pengembang web seperti JAVASCRIPT, PHP, dll.</p>
        <button className="bg-blue-500 text-white font-semibold rounded-md shadow-md flex justify-center items-center py-2 px-4">
          Mulai Belajar
        </button>
      </section>
      
    </main>
  )
}

export default Home;