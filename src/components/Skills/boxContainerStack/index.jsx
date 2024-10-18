/* eslint-disable react/prop-types */


export default function BoxContainerStack({children}) {
  return (
    <div className="p-6 sm:p-8 text-6xl border border-1 rounded-md flex justify-center hover:scale-110 transition-all duration-300 ease-in-out">{children}</div>
  )
}
