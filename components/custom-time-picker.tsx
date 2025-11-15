// 'use client'

// // import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { useState } from "react"
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
// import { Button } from "./ui/button"

// export function CustomTimePicker() {
//   const [time, setTime] = useState({ hour: 10, minute: 0, period: 'PM' })
//   const [open, setOpen] = useState(false)

//   const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
//   const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button variant="outline" className="rounded-2xl w-[140px] justify-start">
//           {`${time.hour}:${time.minute.toString().padStart(2, '0')} ${time.period}`}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <div className="flex gap-2 p-2">
//           {/* Hours */}
//           <div className="h-48 overflow-y-auto">
//             {hours.map(h => (
//               <button
//                 key={h}
//                 onClick={() => setTime({...time, hour: parseInt(h)})}
//                 className={`w-12 h-8 rounded ${
//                   time.hour === parseInt(h) 
//                     ? 'bg-purple-600 text-white'  // Your custom color
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {h}
//               </button>
//             ))}
//           </div>
//           {/* Minutes */}
//           <div className="h-48 overflow-y-auto">
//             {minutes.map(m => (
//               <button
//                 key={m}
//                 onClick={() => setTime({...time, minute: parseInt(m)})}
//                 className={`w-12 h-8 rounded ${
//                   time.minute === parseInt(m)
//                     ? 'bg-purple-600 text-white'  // Your custom color
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {m}
//               </button>
//             ))}
//           </div>
//           {/* AM/PM */}
//           <div>
//             {['AM', 'PM'].map(p => (
//               <button
//                 key={p}
//                 onClick={() => setTime({...time, period: p})}
//                 className={`w-12 h-8 rounded ${
//                   time.period === p
//                     ? 'bg-purple-600 text-white'  // Your custom color
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   )
// }
'use client'

import { useState, useRef, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Clock } from "lucide-react"

export function CustomTimePicker() {
  const [time, setTime] = useState({ hour: 9, minute: 49, period: 'AM' })
  const [open, setOpen] = useState(false)
  
  const hourRef = useRef(null)
  const minuteRef = useRef(null)

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

  useEffect(() => {
    if (open && hourRef.current && minuteRef.current) {
      const hourIndex = hours.findIndex(h => parseInt(h) === time.hour)
      const minuteIndex = minutes.findIndex(m => parseInt(m) === time.minute)
      
      if (hourIndex !== -1) {
        hourRef.current.scrollTop = hourIndex * 40
      }
      if (minuteIndex !== -1) {
        minuteRef.current.scrollTop = minuteIndex * 40
      }
    }
  }, [open])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-full bg-transparent hover:bg-transparent text-black w-[150px] justify-between gap-2 border-gray-200">
          {`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')} ${time.period}`}
          <Clock className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white border border-gray-200" align="start">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')} ${time.period}`}
          </span>
        </div>
        
        <div className="flex gap-0 p-3">
          {/* Hours Column */}
          <div className="flex flex-col items-center">
            <div 
              ref={hourRef}
              className="h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              style={{ scrollbarWidth: 'thin' }}
            >
              {hours.map(h => (
                <button
                  key={h}
                  onClick={() => setTime({...time, hour: parseInt(h)})}
                  className={`w-14 h-10 flex items-center justify-center text-sm transition-colors ${
                    time.hour === parseInt(h) 
                      ? 'bg-primary text-primary-foreground font-medium rounded-md'
                      : 'text-gray-700 hover:bg-gray-100 rounded-md'
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Minutes Column */}
          <div className="flex flex-col items-center">
            <div 
              ref={minuteRef}
              className="h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              style={{ scrollbarWidth: 'thin' }}
            >
              {minutes.map(m => (
                <button
                  key={m}
                  onClick={() => setTime({...time, minute: parseInt(m)})}
                  className={`w-14 h-10 flex items-center justify-center text-sm transition-colors ${
                    time.minute === parseInt(m)
                      ? 'bg-primary text-primary-foreground font-medium rounded-md'
                      : 'text-gray-700 hover:bg-gray-100 rounded-md'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* AM/PM Column */}
          <div className="flex flex-col items-center justify-start pt-0">
            <div className="flex flex-col gap-1">
              {['AM', 'PM'].map(p => (
                <button
                  key={p}
                  onClick={() => setTime({...time, period: p})}
                  className={`w-14 h-10 flex items-center justify-center text-sm transition-colors ${
                    time.period === p
                      ? 'bg-primary text-primary-foreground font-medium rounded-md'
                      : 'text-gray-700 hover:bg-gray-100 rounded-md'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
