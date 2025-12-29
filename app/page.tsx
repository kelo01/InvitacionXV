"use client"

import { useState, useEffect } from "react"

const EVENT_DATE = new Date("2026-01-13T15:00:00").getTime()

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [guestName, setGuestName] = useState("")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showDressCode, setShowDressCode] = useState(false)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now()
      const difference = EVENT_DATE - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleConfirmation = () => {
    setShowModal(true)
  }

  const handleSubmitName = () => {
    if (guestName.trim()) {
      const message = `Hola! Soy ${guestName} y confirmo mi asistencia a los XV de Ari`
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/5493886866541?text=${encodedMessage}`, "_blank")
      setShowModal(false)
      setGuestName("")
    }
  }
 
  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/BxYr4f3LZ9CcuS1Y8", "_blank")
  }

   const handleDressCode = () => {
  setShowDressCode(true)
}

  const handleGiftRegistry = () => {
    navigator.clipboard.writeText("ARI.CARRILLO.")
    alert("¡Alias copiado! ARI.CARRILLO.")
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-stone-100">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform animate-bounce-in border-4 border-pink-600">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">💖</div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">¡Confirmemos tu asistencia!</h3>
              <p className="text-gray-600 font-semibold">Ingresa tu nombre completo</p>
            </div>

            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Tu nombre aquí..."
              className="w-full px-6 py-4 text-lg border-3 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-200 transition-all mb-5 font-semibold text-gray-800 placeholder:text-gray-400"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && handleSubmitName()}
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-all transform active:scale-95 border-2 border-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmitName}
                className="flex-1 py-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 hover:from-pink-700 hover:via-pink-800 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 border-2 border-pink-900"
              >
                Confirmar 💕
              </button>
            </div>
          </div>
        </div>
      )}
      {showDressCode && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setShowDressCode(false)}
    ></div>

    <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border-4 border-blue-600">
      <div className="text-center mb-6">
        <div className="text-6xl mb-3">👗✨</div>
        <h3 className="text-3xl font-black text-gray-900 mb-2">
          Dress Code
        </h3>
        <p className="text-gray-600 font-semibold">
          Colores sugeridos
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-rose-200"></div>
        <div className="w-14 h-14 rounded-full bg-pink-300"></div>
        <div className="w-14 h-14 rounded-full bg-amber-200"></div>
        <div className="w-14 h-14 rounded-full bg-cyan-200"></div>
        <div className="w-14 h-14 rounded-full bg-lime-200"></div>
      </div>

      <p className="text-center text-gray-700 font-semibold mb-6">
        Te sugerimos colores claros y pasteles 🌸
      </p>

      <button
        onClick={() => setShowDressCode(false)}
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl"
      >
        Entendido
      </button>
    </div>
  </div>
)}

      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url(/images/fondo.jpg)",
        }}
      />

      <div className="fixed top-4 left-4 w-20 h-20 md:w-32 md:h-32 opacity-60 -rotate-12 pointer-events-none z-20 animate-float-gentle">
        <div className="text-5xl md:text-7xl">🎂</div>
      </div>
      <div
        className="fixed top-4 right-4 w-20 h-20 md:w-32 md:h-32 opacity-60 rotate-12 pointer-events-none z-20 animate-float-gentle"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="text-4xl md:text-6xl">🎈</div>
      </div>
      <div
        className="fixed bottom-20 left-8 w-16 h-16 md:w-24 md:h-24 opacity-60 rotate-6 pointer-events-none z-20 animate-float-gentle"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-4xl md:text-6xl">📷</div>
      </div>
      <div
        className="fixed bottom-20 right-8 w-16 h-16 md:w-24 md:h-24 opacity-60 -rotate-6 pointer-events-none z-20 animate-float-gentle"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="text-4xl md:text-6xl">✨</div>
      </div>
      <div className="fixed top-1/3 right-10 text-4xl animate-float">
        <div className="text-4xl md:text-5xl">🎵</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-6 md:gap-8 mb-6 flex-wrap justify-center">
          <span className="text-3xl md:text-5xl transform -rotate-12 drop-shadow-lg animate-float-gentle">💡</span>
          <span
            className="text-3xl md:text-5xl transform rotate-12 drop-shadow-lg animate-float-gentle"
            style={{ animationDelay: "0.3s" }}
          >
            🎉
          </span>
          <span
            className="text-3xl md:text-5xl transform -rotate-6 drop-shadow-lg animate-float-gentle"
            style={{ animationDelay: "0.6s" }}
          >
            🍰
          </span>
        </div>

        <div className="flex gap-4 md:gap-8 mb-8 flex-wrap justify-center items-end">
          <div className="relative group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rotate-3 z-10 shadow-md"></div>
            <div className="bg-white p-3 md:p-4 shadow-2xl transform -rotate-6 border-2 border-gray-200 hover:scale-110 hover:-rotate-3 transition-all duration-300">
              <img
                src="/sonrisa.jpeg"
                alt="Ari niña"
                className="w-28 h-36 md:w-44 md:h-56 object-cover grayscale"
              />
              <div className="mt-2 text-center">
                <span className="text-xl md:text-2xl">💥</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 left-8 w-20 h-8 bg-yellow-300/80 -rotate-12 z-10 shadow-lg border-2 border-yellow-400"></div>
            <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 p-1 shadow-2xl transform rotate-2 hover:scale-110 hover:rotate-0 transition-all duration-300">
              <div className="bg-white p-3 md:p-4">
                <img
                  src="/gorro.jpeg"
                  alt="Ari con gorro"
                  className="w-32 h-40 md:w-48 md:h-60 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-3 right-4 w-16 h-6 bg-blue-200/70 -rotate-6 z-10 shadow-md"></div>
            <div className="bg-white p-3 md:p-4 shadow-2xl transform rotate-6 border-2 border-gray-200 hover:scale-110 hover:rotate-3 transition-all duration-300">
              <img
                src="/sucia.jpeg"
                alt="Ari sonriendo"
                className="w-28 h-36 md:w-44 md:h-56 object-cover grayscale"
              />
              <div className="mt-2 text-center">
                <span className="text-xl md:text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 text-center relative">
          <div className="absolute -left-8 top-0 text-4xl md:text-6xl opacity-70 transform -rotate-12 animate-pulse">
            🌟
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-1 drop-shadow-lg">
            <span
              className="inline-block transform -rotate-3 text-teal-500 bg-gray-100/90 px-3 py-1 shadow-md"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              M
            </span>
            <span
              className="inline-block transform rotate-2 text-gray-800 bg-white/90 px-3 py-1 shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              i
            </span>
          </h1>

          <h2 className="text-6xl md:text-8xl font-black mb-2 drop-shadow-2xl">
            <span
              className="inline-block transform -rotate-3 text-pink-600 bg-amber-100/95 px-4 py-2 shadow-xl"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              1
            </span>
            <span
              className="inline-block transform rotate-3 text-indigo-700 bg-blue-200/95 px-4 py-2 shadow-xl"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              5
            </span>
          </h2>

          <p className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 drop-shadow-lg leading-tight">
            <span
              className="inline-block transform -rotate-2 text-orange-600 bg-yellow-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              C
            </span>
            <span
              className="inline-block transform rotate-1 text-pink-600 bg-pink-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              u
            </span>
            <span
              className="inline-block transform -rotate-1 text-green-700 bg-lime-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              m
            </span>
            <span
              className="inline-block transform rotate-2 text-purple-600 bg-purple-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              p
            </span>
            <span
              className="inline-block transform -rotate-2 text-red-600 bg-red-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              l
            </span>
            <span
              className="inline-block transform rotate-1 text-indigo-600 bg-indigo-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              e
            </span>
            <span
              className="inline-block transform -rotate-1 text-amber-700 bg-amber-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              a
            </span>
            <span
              className="inline-block transform rotate-2 text-teal-600 bg-teal-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              ñ
            </span>
            <span
              className="inline-block transform -rotate-1 text-rose-600 bg-rose-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              o
            </span>
            <span
              className="inline-block transform rotate-1 text-blue-700 bg-blue-100/85 px-2 py-1 shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              s
            </span>
          </p>

          <h3 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 drop-shadow-2xl">
            <span
              className="inline-block transform rotate-3 text-red-600 bg-white/95 px-5 py-2 shadow-2xl border-2 border-red-200"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              A
            </span>
            <span
              className="inline-block transform -rotate-2 text-purple-700 bg-purple-50/95 px-5 py-2 shadow-2xl border-2 border-purple-200"
              style={{ fontFamily: "Georgia, serif" }}
            >
              r
            </span>
            <span
              className="inline-block transform rotate-2 text-cyan-600 bg-cyan-50/95 px-5 py-2 shadow-2xl border-2 border-cyan-200"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              i
            </span>
          </h3>
        </div>

        <div className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mb-8 max-w-md w-full border-2 border-gray-300">
          <p className="text-sm md:text-base font-bold text-gray-600 uppercase tracking-widest text-center mb-4 border-b-2 border-gray-200 pb-3">
            Guarda la fecha
          </p>

          <div className="text-center mb-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl md:text-7xl font-black text-gray-900">13</span>
              <span className="text-2xl md:text-3xl font-medium text-gray-600">de</span>
              <span className="text-4xl md:text-5xl font-bold text-gray-900">Enero</span>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">3:00 PM</p>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-700 bg-gray-100 inline-block px-5 py-2 rounded-full shadow-md border border-gray-300">
              Martes, 2026
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5 md:gap-6 w-full max-w-3xl mb-8 px-4">
          {/* Confirmar Asistencia - Made more prominent */}
          <div
            onClick={handleConfirmation}
            className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-[5px] border-pink-600 hover:border-pink-700 transform hover:scale-110 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-60"></div>
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="text-6xl md:text-7xl mb-4 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                🎉
              </div>
              <h3
                className="text-xl md:text-2xl font-black text-gray-900 text-center leading-tight"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Confirmar Asistencia
              </h3>
            </div>
          </div>

          {/* Ubicación */}
          <div
            onClick={handleLocation}
            className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-[5px] border-cyan-500 hover:border-cyan-600 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎈
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-gray-900 text-center"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Ubicación
              </h3>
            </div>
          </div>

          {/* Dress Code */}
          <div
            onClick={handleDressCode}
            className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-[5px] border-blue-600 hover:border-blue-700 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                👗
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-gray-900 text-center"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Dress Code
              </h3>
            </div>
          </div>

          {/* Mesa de Regalos con alias integrado */}
          <div
            onClick={handleGiftRegistry}
            className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-[5px] border-amber-500 hover:border-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl md:text-7xl mb-3 group-hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <h3
                className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Si no sabes que regalar
              </h3>
              

              <div className="inline-flex bg-white px-5 py-2 rounded-full border-2 border-purple-500 shadow-md">
                <span className="text-sm font-bold tracking-wide text-purple-700">
                ALIAS: ARI.CARRILLO.
                </span>
              </div>

            </div>
          </div>
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-2xl mb-6">
            <span
              className="inline-block transform -rotate-2 text-gray-700 bg-gray-200/85 px-3 py-2 rounded shadow-lg"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              F
            </span>
            <span
              className="inline-block transform rotate-2 text-amber-600 bg-amber-100/85 px-3 py-2 rounded mx-1 shadow-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              a
            </span>
            <span
              className="inline-block transform -rotate-1 text-blue-900 bg-blue-100/85 px-3 py-2 rounded shadow-lg"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              l
            </span>
            <span
              className="inline-block transform rotate-2 text-teal-600 bg-teal-100/85 px-3 py-2 rounded mx-1 shadow-lg"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              t
            </span>
            <span
              className="inline-block transform -rotate-2 text-pink-500 bg-pink-100/85 px-3 py-2 rounded shadow-lg"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              a
            </span>
            <span className="inline-block mx-2"></span>
            <span
              className="inline-block transform rotate-1 text-purple-700 bg-purple-100/85 px-3 py-2 rounded shadow-lg"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              p
            </span>
            <span
              className="inline-block transform -rotate-2 text-orange-600 bg-orange-100/85 px-3 py-2 rounded mx-1 shadow-lg"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              o
            </span>
            <span
              className="inline-block transform rotate-2 text-red-700 bg-red-100/85 px-3 py-2 rounded shadow-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              c
            </span>
            <span
              className="inline-block transform -rotate-1 text-amber-800 bg-amber-100/85 px-3 py-2 rounded mx-1 shadow-lg"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              o
            </span>
          </h2>

          <div className="flex gap-3 md:gap-4 flex-wrap justify-center mb-6">
            <div className="bg-white/98 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-2xl border-4 border-pink-600 min-w-[80px] md:min-w-[100px]">
              <div className="text-4xl md:text-5xl font-black text-pink-700">{timeLeft.days}</div>
              <div className="text-xs md:text-sm font-bold text-gray-700 uppercase mt-1">Días</div>
            </div>
            <div className="bg-white/98 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-2xl border-4 border-purple-600 min-w-[80px] md:min-w-[100px]">
              <div className="text-4xl md:text-5xl font-black text-purple-700">{timeLeft.hours}</div>
              <div className="text-xs md:text-sm font-bold text-gray-700 uppercase mt-1">Horas</div>
            </div>
            <div className="bg-white/98 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-2xl border-4 border-amber-500 min-w-[80px] md:min-w-[100px]">
              <div className="text-4xl md:text-5xl font-black text-amber-600">{timeLeft.minutes}</div>
              <div className="text-xs md:text-sm font-bold text-gray-700 uppercase mt-1">Min</div>
            </div>
            <div className="bg-white/98 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-2xl border-4 border-pink-600 min-w-[80px] md:min-w-[100px]">
              <div className="text-4xl md:text-5xl font-black text-pink-700">{timeLeft.seconds}</div>
              <div className="text-xs md:text-sm font-bold text-gray-700 uppercase mt-1">Seg</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md space-y-4 mb-6">
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-cyan-700 flex items-center justify-center gap-2 text-base md:text-lg"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            <span className="text-2xl">📢</span>
            TRAE UNA MUDA DE ROPA
          </button>

          <div className="bg-white/98 backdrop-blur-sm p-5 rounded-2xl border-4 border-pink-600 shadow-2xl relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-pink-600 rounded-full"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-pink-600 rounded-full"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-pink-600 rounded-full"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-pink-600 rounded-full"></div>
            <p
              className="text-base md:text-lg font-black text-center text-gray-900"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              ¡¡LLEVAR ROPA CÓMODA!!
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50/95 backdrop-blur-sm border-l-4 border-yellow-500 p-4 mb-6 max-w-md w-full shadow-xl rounded-r-xl">
          <p className="text-sm md:text-base text-yellow-900 font-semibold text-center">
            Por favor confirma antes del <span className="font-black text-red-700">5 de Enero, 2026</span>
          </p>
        </div>
      </div>
    </div>
  )
}