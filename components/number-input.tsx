"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from 'lucide-react'

interface NumberInputProps {
  initialValue?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

export function NumberInput({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  onChange,
}: NumberInputProps) {
  const [value, setValue] = useState(initialValue)

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max)
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min)
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue)
      onChange?.(newValue)
    }
  }

  return (
    <div className="flex items-center">
      <Button
        variant="default"
        size="icon"
        onClick={handleDecrement}
        className="rounded-r-none bg-black hover:bg-gray-800"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="w-20 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        style={{ backgroundColor: "white", borderColor: "black" }}
      />
      <Button
        variant="default"
        size="icon"
        onClick={handleIncrement}
        className="rounded-l-none bg-black hover:bg-gray-800"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
