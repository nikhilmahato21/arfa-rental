import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className={`flex items-start gap-3 px-5 py-4 shadow-2xl max-w-sm border-l-4 ${
          type === 'success'
            ? 'bg-white border-green-500'
            : 'bg-white border-red-500'
        }`}
      >
        {type === 'success'
          ? <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
          : <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
        }
        <p className="font-body text-sm text-steel-800 flex-1">{message}</p>
        <button onClick={onClose} className="text-steel-400 hover:text-steel-700 ml-2 focus:outline-none" aria-label="Close">
          <X size={16} />
        </button>
      </motion.div>
    </div>
  )
}
