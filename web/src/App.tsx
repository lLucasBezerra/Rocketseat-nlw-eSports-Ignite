import { MagnifyingGlassPlus } from "phosphor-react"
import "./styles/main.css";
import logo from "./assets/logo.svg";
function App() {
  return(         //width maximo, margem eixoX auto, diplays flex, flex direction, alaign-items, margem eixoY
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
              {/* tamanho da font 60px, color:white, peso da fonte 900  margem top 80px*/}
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative">
          <img src="./image-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./image-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">Dota II</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./image-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./image-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./image-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">Fotnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./image-7.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg  overflow-hidden">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block mt-1">anuncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex item-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
