import { useState, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDebounce } from "../hooks/useDebounce";
import { useToggle } from "../hooks/index";
import FocusInput from "../components/FocusInput";
import type { FocusInputHandle } from "../components/FocusInput";
import Modal from "../components/Modal";
import VideoPlayer from "../components/VideoPlayer";
import type { VideoPlayerHandle } from "../components/VideoPlayer";


export default function AdvancedHooks() {
  
  const [name, setName] = useLocalStorage("user-name", "");
  const [count, setCount] = useLocalStorage("counter", 0);

 
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  
  const modal = useToggle(false);

  
  const inputRef1 = useRef<FocusInputHandle>(null);
  const inputRef2 = useRef<FocusInputHandle>(null);

  const handleFocusInput1 = () => {
    inputRef1.current?.focus();
  };

  const handleClearInput1 = () => {
    inputRef1.current?.clear();
  };

  const handleGetValue = () => {
    const value = inputRef1.current?.getValue();
    alert(`Valeur de l'input 1: "${value}"`);
  };

 
  const videoRef = useRef<VideoPlayerHandle>(null);
  const [videoStatus, setVideoStatus] = useState("Prêt");

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  const handleReset = () => {
    videoRef.current?.reset();
  };

  const handleSkip = () => {
    const currentTime = videoRef.current?.getTime() || 0;
    videoRef.current?.setTime(currentTime + 10);
  };

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
      <h1> React Hooks Avancés</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>
        useRef, useImperativeHandle, forwardRef et Custom Hooks
      </p>

      <div style={{ display: "grid", gap: 24 }}>
        {/* Section 1: useLocalStorage */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <h2> Custom Hook: useLocalStorage</h2>
          <p style={{ color: "#6b7280" }}>
            Synchronisation automatique avec localStorage. Rafraîchissez la
            page, les données persistent!
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <div>
              <label
                style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
              >
                Nom (persisté):
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrez votre nom"
                style={{
                  width: "100%",
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                }}
              />
              <p style={{ fontSize: 14, color: "#6b7280", marginTop: 8 }}>
                Valeur: {name || "(vide)"}
              </p>
            </div>

            <div>
              <label
                style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
              >
                Compteur (persisté):
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setCount(count - 1)}
                  style={{ padding: "8px 16px", borderRadius: 4 }}
                >
                  -
                </button>
                <span
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  style={{ padding: "8px 16px", borderRadius: 4 }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: useDebounce */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <h2> Custom Hook: useDebounce</h2>
          <p style={{ color: "#6b7280" }}>
            Retarde la mise à jour de la valeur. Utile pour les recherches.
          </p>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tapez quelque chose..."
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 4,
              border: "1px solid #d1d5db",
              marginBottom: 12,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              backgroundColor: "white",
              padding: 16,
              borderRadius: 4,
            }}
          >
            <div>
              <strong>Valeur immédiate:</strong>
              <p style={{ color: "#2563eb", fontSize: 18 }}>
                {searchTerm || "(vide)"}
              </p>
            </div>
            <div>
              <strong>Valeur debouncée (500ms):</strong>
              <p style={{ color: "#16a34a", fontSize: 18 }}>
                {debouncedSearch || "(vide)"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: useRef + useImperativeHandle (FocusInput) */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <h2> useRef + useImperativeHandle: FocusInput</h2>
          <p style={{ color: "#6b7280" }}>
            Le parent contrôle l'input via des méthodes exposées (focus, clear,
            getValue, setValue)
          </p>

          <FocusInput
            ref={inputRef1}
            label="Input 1 (controllé par le parent)"
            placeholder="Tapez quelque chose..."
          />

          <FocusInput
            ref={inputRef2}
            label="Input 2 (avec autoFocus)"
            placeholder="Focus automatique"
            autoFocus
          />

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              onClick={handleFocusInput1}
              style={{
                padding: "8px 16px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Focus Input 1
            </button>
            <button
              onClick={handleClearInput1}
              style={{
                padding: "8px 16px",
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Clear Input 1
            </button>
            <button
              onClick={handleGetValue}
              style={{
                padding: "8px 16px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Get Value
            </button>
            <button
              onClick={() => inputRef1.current?.setValue("Valeur modifiée!")}
              style={{
                padding: "8px 16px",
                backgroundColor: "#9333ea",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Set Value
            </button>
          </div>
        </section>

        {/* Section 4: Modal avec focus trap */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <h2> Modal avec Focus Trap</h2>
          <p style={{ color: "#6b7280" }}>
            - Focus piégé dans le modal (Tab/Shift+Tab)
            <br />
            - Ferme avec Escape
            <br />- Ferme en cliquant à l'extérieur (useOnClickOutside)
          </p>

          <button
            onClick={modal.toggle}
            style={{
              padding: "12px 24px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Ouvrir le Modal
          </button>

          <Modal
            isOpen={modal.value}
            onClose={modal.setFalse}
            title="Modal Exemple"
          >
            <p>Ceci est un modal avec focus trap.</p>
            <p>Essayez de:</p>
            <ul>
              <li>Appuyer sur Tab/Shift+Tab (le focus reste dans le modal)</li>
              <li>Appuyer sur Escape (ferme le modal)</li>
              <li>Cliquer à l'extérieur (ferme le modal)</li>
            </ul>

            <input
              type="text"
              placeholder="Premier input"
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 8,
                borderRadius: 4,
                border: "1px solid #d1d5db",
              }}
            />
            <input
              type="text"
              placeholder="Deuxième input"
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 16,
                borderRadius: 4,
                border: "1px solid #d1d5db",
              }}
            />

            <button
              onClick={modal.setFalse}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Fermer
            </button>
          </Modal>
        </section>

        {/* Section 5: VideoPlayer avec useImperativeHandle */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <h2> VideoPlayer avec useImperativeHandle</h2>
          <p style={{ color: "#6b7280" }}>
            Le parent contrôle le lecteur via des méthodes exposées (play,
            pause, reset, etc.)
          </p>

          <p style={{ marginBottom: 16 }}>
            <strong>Statut:</strong> {videoStatus}
          </p>

          <VideoPlayer ref={videoRef} onStatusChange={setVideoStatus} />

          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handlePlay}
              style={{
                padding: "10px 20px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
               Play
            </button>
            <button
              onClick={handlePause}
              style={{
                padding: "10px 20px",
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
               Pause
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
               Reset
            </button>
            <button
              onClick={handleSkip}
              style={{
                padding: "10px 20px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
               +10s
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
