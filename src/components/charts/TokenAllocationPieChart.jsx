import React from 'react'

export function TokenAllocationPieChart({ data }) {
  const colors = [
    '#06b6d4', // cyan
    '#8b5cf6', // purple
    '#3b82f6', // blue
    '#10b981', // emerald
    '#f59e0b', // amber
    '#f43f5e'  // rose
  ]

  let cumulativePercentage = 0
  const segments = data.map((item, index) => {
    const percentage = parseFloat(item.percentage)
    const startAngle = (cumulativePercentage / 100) * 360
    const endAngle = ((cumulativePercentage + percentage) / 100) * 360
    
    cumulativePercentage += percentage
    
    return {
      ...item,
      startAngle,
      endAngle,
      color: colors[index % colors.length]
    }
  })

  const radius = 60
  const centerX = 80
  const centerY = 80

  const createArcPath = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle)
    const end = polarToCartesian(centerX, centerY, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ")
  }

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="160" viewBox="0 0 160 160" className="mb-4">
        {segments.map((segment, index) => (
          <path
            key={index}
            d={createArcPath(segment.startAngle, segment.endAngle, radius)}
            fill={segment.color}
            stroke="#1f2937"
            strokeWidth="2"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          />
        ))}
        <circle
          cx={centerX}
          cy={centerY}
          r="20"
          fill="#1f2937"
          stroke="#374151"
          strokeWidth="2"
        />
        <text
          x={centerX}
          y={centerY + 5}
          textAnchor="middle"
          className="fill-gray-300 text-sm font-bold"
        >
          1B
        </text>
      </svg>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {segments.slice(0, 4).map((segment, index) => (
          <div key={index} className="flex items-center space-x-1">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: segment.color }}
            ></div>
            <span className="text-gray-300">{segment.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
