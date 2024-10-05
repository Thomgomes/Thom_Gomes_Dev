/* eslint-disable react/prop-types */
export default function Section({ children, id }) {
  return <section className="h-screen" id={id}>{children}</section>;
}
