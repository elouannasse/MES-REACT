import { forwardRef, useImperativeHandle, useState, useRef } from "react";


export interface VideoPlayerHandle {
  play: () => void;
  pause: () => void;
  reset: () => void;
  getTime: () => number;
  setTime: (time: number) => void;
}

interface VideoPlayerProps {
  onStatusChange?: (status: string) => void;
}


const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  ({ onStatusChange }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const intervalRef = useRef<number | null>(null);

    
    useImperativeHandle(ref, () => ({
      play: () => {
        console.log("▶ VideoPlayer: play()");
        setIsPlaying(true);
        onStatusChange?.("Lecture en cours...");

        
        intervalRef.current = window.setInterval(() => {
          setCurrentTime((prev) => prev + 1);
        }, 1000);
      },

      pause: () => {
        console.log("⏸️ VideoPlayer: pause()");
        setIsPlaying(false);
        onStatusChange?.("En pause");
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      },

      reset: () => {
        console.log("🔄 VideoPlayer: reset()");
        setIsPlaying(false);
        setCurrentTime(0);
        onStatusChange?.("Réinitialisé");
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      },

      getTime: () => {
        return currentTime;
      },

      setTime: (time: number) => {
        console.log(`⏩ VideoPlayer: setTime(${time})`);
        setCurrentTime(time);
      },
    }));

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
      <div
        style={{
          border: "2px solid #d1d5db",
          borderRadius: 8,
          padding: 20,
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{
            backgroundColor: "#1f2937",
            height: 200,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <div style={{ textAlign: "center", color: "white" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>
              {isPlaying ? "▶️" : "⏸️"}
            </div>
            <div style={{ fontSize: 24 }}>{formatTime(currentTime)}</div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ margin: 0, color: "#6b7280" }}>
            {isPlaying ? "Lecture en cours..." : "En pause"}
          </p>
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
