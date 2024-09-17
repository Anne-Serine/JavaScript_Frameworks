import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-2">
          <h2 className="font-bold text-center mb-2">NuYuu</h2>
          <p className="">
          42 Trendsetter Avenue <br />
          Futureland 12345 <br />
          Planet Earth
          </p>
        </div>
        <div className="p-2 flex flex-col items-center">
          <h2 className="font-bold mb-3">
            Contact us
          </h2>
          <Link to="/contact" title="to contact page">
            <img src="/assets/contact-email.svg" alt="" className="h-8" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-2">
            <h2 className="font-bold">Payment</h2>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/klarna-color.svg"
              alt="klarna logo"
              className="h-10"
            />
            <img
              src="/assets/mastercard-color.svg"
              alt="mastercard logo"
              className="h-10"
            />
            <img
              src="/assets/visa-color.svg"
              alt="visa logo"
              className="h-10"
            />
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
