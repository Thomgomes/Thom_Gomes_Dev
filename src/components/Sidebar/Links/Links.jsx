import ThemeToggle from "../../../ThemeToggle";

export default function Links() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const items = ["Início", "Sobre Mim", "Projetos", "Contato"];

  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-center gap-6">
      {items.map((item) => (
        <a 
          key={item} 
          href={`#${item}`} 
          className="text-2xl"
          onClick={(e) => handleClick(e, item)}
        >
          {item}
        </a>
      ))}
      <ThemeToggle/>
    </div>
  );
}
