"use client"

import { Bar, BarChart, XAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { label: "Negative", desktop: 186, mobile: 80 },
  { label: "Neutral", desktop: 305, mobile: 200 },
  { label: "Positive", desktop: 237, mobile: 120 }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} 

export function Graph() {
  return (
    <div className="rounded-xl p-5 bg-neutral-900 col-span-4 print:col-span-6">
        <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800">Overall Sentiment</div>
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full mt-4">
      <BarChart accessibilityLayer data={chartData}>
      <XAxis
      dataKey="label"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 8)}
    />
        <Bar dataKey="desktop" fill="white" radius={4} />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
    </div>
  )
}
