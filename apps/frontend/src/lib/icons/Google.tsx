import React from "react"

const Google = (): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_173_305)" />
      <defs>
        <pattern
          id="pattern0_173_305"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_173_305" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_173_305"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default Google
