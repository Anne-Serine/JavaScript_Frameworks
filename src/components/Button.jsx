function Button({text, type}) {

  const base = "border border-ecom-dark min-w-20 w-max max-h-10 rounded-sm p-2 px-3 transition duration-200 ease-out hover:ease-in"
  const primary = "hover:bg-ecom-dark hover:text-ecom-light"
  const secondary = "bg-ecom-dark text-ecom-light"

  const style = type === "primary" ? primary : type === 'secondary' ? secondary : primary;

  return (
    <button className={base + ' ' + style}>
      {text}
    </button>
  )
}

export default Button;