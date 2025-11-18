import React, { useRef, useState } from 'react'

type RecordingPreviewProps = {
  src: string | null
}

export const RecordingPreview: React.FC<RecordingPreviewProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  if (!src) return null

  const handlePlayClick = () => {
    if (!videoRef.current) return
    videoRef.current.play()
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleEnded = () => setIsPlaying(false)

  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
          <span className="text-sm font-semibold text-emerald-700">▶</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-slate-800">
            Recording Preview
          </p>
          <p className="text-xs text-slate-500">Review your captured video</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-black/90">
        <video
          ref={videoRef}
          src={src}
          controls
          className="block h-full w-full outline-none focus:outline-none focus:ring-0"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm shadow-lg">
              <svg
                className="h-7 w-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
