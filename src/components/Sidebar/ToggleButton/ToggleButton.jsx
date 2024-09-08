/* eslint-disable react/prop-types */
export default function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-16 h-16 rounded-full fixed top-[1.2em] right-4"
    >
      {/* Icon or text for the button */}
      <span className="text-xl">☰</span>
    </button>
  )
}
