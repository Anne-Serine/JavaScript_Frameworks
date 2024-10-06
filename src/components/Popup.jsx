function Popup({ show, message }) {
  if (!show) return null;

  return (
    <div className="bg-ecom-bg font-medium border border-ecom-dark rounded-sm p-3 max-w-[18rem]">
      <p className="">{message}</p>
    </div>
  )
}

export default Popup;