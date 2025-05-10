import { ChangeEvent } from 'react'

interface SearchBarProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  )
} 