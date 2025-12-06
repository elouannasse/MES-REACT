import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";

interface FocusInputProps {
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
}

/**
 * Interface exposée via useImperativeHandle
 * Permet au parent de contrôler l'input
 */
export interface FocusInputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

/**
 * Composant Input avec useRef et useImperativeHandle
 * Expose des méthodes au composant parent via ref
 */
const FocusInput = forwardRef<FocusInputHandle, FocusInputProps>(
  ({ label, placeholder, autoFocus = false, defaultValue = "" }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus automatique au montage si autoFocus est true
    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    // Expose des méthodes au parent via useImperativeHandle
    useImperativeHandle(ref, () => ({
      focus: () => {
        console.log("📍 FocusInput: focus() appelé");
        inputRef.current?.focus();
      },
      clear: () => {
        console.log("🧹 FocusInput: clear() appelé");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
      getValue: () => {
        return inputRef.current?.value || "";
      },
      setValue: (value: string) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
    }));

    return (
      <div style={{ marginBottom: 16 }}>
        {label && (
          <label style={{ display: "block", marginBottom: 4, fontWeight: 500 }}>
            {label}
          </label>
        )}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: "1px solid #d1d5db",
            fontSize: 14,
          }}
        />
      </div>
    );
  }
);

FocusInput.displayName = "FocusInput";

export default FocusInput;
