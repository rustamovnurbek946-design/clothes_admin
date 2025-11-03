import React from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  PhoneIcon,
  CakeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1c2230] via-[#202a3c] to-[#2b3447] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-[#2f3b52]/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-gray-200"
      >
        {/* Avatar + Status */}
        <div className="flex items-center mb-8">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekwF2hwS0mhsB9r-eZvCxz4ItrI0xyN-DZg&s"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#2f3b52]" />
          </div>
          <div className="ml-5">
            <h2 className="text-xl font-bold text-white">Nurbek Styles</h2>
            <p className="text-sm text-blue-400 font-medium">🐱 В сети</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5 text-sm">
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">+998 90 689 12 34</span>
          </div>

          <div className="flex items-center gap-3">
            <UserIcon className="h-5 w-5 text-blue-400" />
            <p className="text-gray-400 leading-relaxed">
              “Men moda orqali o‘z fikrimni ifoda etaman.
              Har bir kiyim — bu mening xarakterimning bir bo‘lagi.”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CakeIcon className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">4-iyun, Gemini ♊</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">Toshkent, O‘zbekiston</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-xl font-bold text-white">120</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Followers
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">89</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Following
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">24</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Outfits
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-md">
            Follow
          </button>
          <button className="flex-1 py-2.5 rounded-lg border border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-300 font-medium transition-all">
            Message
          </button>
        </div>

        {/* Bio */}
        <div className="mt-10 text-sm leading-relaxed text-gray-400">
          <p>
            🌟 <span className="text-blue-400 font-semibold">Fashion is identity</span> —
            biz kiyimni faqat kiyish uchun emas, o‘zligimizni ifoda etish uchun tanlaymiz.
            Har bir libos — bu sizning kayfiyatingiz, kuchingiz va hikoyangiz.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} <span className="text-blue-400">StyleWave</span> | Designed with 💙
        </div>
      </motion.div>
    </div>
  );
}
