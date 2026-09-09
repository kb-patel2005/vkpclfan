// "use client"

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function SelectBox({
//   items,
//   initial,
//   classes,
//   onChange,
//   value,
// }: {
//   items: string[]
//   initial: string
//   classes?: string
//   onChange?: (val: string) => void
//   value: string
// }) {
//   return (
//     <div className="relative">
//       <Select value={value} onValueChange={onChange}>
//         <SelectTrigger
//           className={`appearance-none w-full  text-left rounded-[0px] border-0 focus:outline-none focus:ring-0 ${classes}`}
//         >
//           <SelectValue placeholder={initial} className="text-[16px]" />
//         </SelectTrigger>

//         <SelectContent>
//           {items.map((item) => (
//             <SelectItem key={item} value={item} className="py-2.5 text-lg">
//               {item}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function SelectBox({
  items,
  placeholder,
  onChange,
  value,
  classes,
}: {
  items: string[]
  placeholder?: string
  onChange?: (val: string) => void
  value?: string
  classes?: string
}) {
  const [open, setOpen] = useState(false)

  const handleSelect = (item: string) => {
    onChange?.(item)
    setOpen(false)
  }

  return (
    <div className={`relative ${classes || ""}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full py-3 pl-4 pr-10 text-left rounded-[0px] focus:outline-none"
      >
        {value || placeholder || "Select option"}
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute mt-1 w-full border border-[#C3C5D980] bg-white shadow-lg z-10">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
