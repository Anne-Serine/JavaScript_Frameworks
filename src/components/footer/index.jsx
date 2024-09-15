function Footer() {
  return (
    <footer className="Footer">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-2">
          <p className="font-bold text-center mb-2">NuYuu</p>
          <p className="font-light">42 Trendsetter Avenue</p>
          <p className="font-light">Futureland 12345</p>
          <p className="font-light">Planet Earth</p>
        </div>
        <div className="p-2 flex flex-col items-center">
          <a href="#" className="font-bold mb-3">
            Contact us
          </a>
          <a href="#"><img src="/assets/contact-email.svg" alt="" className="h-10" /></a>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-2">
            <p className="font-bold">Payment</p>
          </div>
          <div className="flex gap-2">
            <img src="/assets/klarna-color.svg" alt="klarna logo" className="h-10" />
            <img src="/assets/mastercard-color.svg" alt="mastercard logo" className="h-10" />
            <img src="/assets/visa-color.svg" alt="visa logo" className="h-10" />
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-xs">
        <p>2024 &copy; Anne-Serine</p>
      </div>
    </footer>
  );
}

export default Footer;
