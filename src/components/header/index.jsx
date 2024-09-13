function Header() {
  return (
    <header className="flex justify-between p-5">
      <div className="flex flex-wrap w-full">
        <div className="container mx-auto flex justify-between items-center mb-3 md:mb-0">
          <a href="/" className="hidden">
            <img src="/assets/logo.svg" className="h-10" alt="logo" />
          </a>
          <button className="flex md:hidden">
            <img src="/assets/menu.svg" className="size-7" alt="menu icon" />
          </button>

          <a href="/" className="md:flex x-auto">
            <img src="/assets/logo.svg" className="h-10" alt="logo" />
          </a>
          <div className="hidden md:flex gap-10 items-center">
            <nav>
              <ul className="flex justify-between gap-3">
                <li>
                  <a href="">Link1</a>
                </li>
                <li>
                  <a href="">Link2</a>
                </li>
                <li>
                  <a href="">Link3</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex gap-2 items-center relative" id="searchContainer">
            <img src="/assets/search-svgrepo-com.svg" className="h-4" alt="search-icon" />
            <input type="search" placeholder="Search..." className="max-w-28 sm:max-w-52 w-full p-1 border border-solid border-ecom-dark rounded-sm" id="searchInput" aria-label="search-input" />
            {/* <div>
              <ul id="searchResults"></ul>
              <div className="hidden">
                alert message
              </div>
            </div> */}
          </div>

          <div>
            <a href="#">
              <img src="/assets/shopping-bag.svg" className="size-5" alt="shopping cart icon" />
            </a>
          </div>
        </div>
        <div className="flex mx-auto w-full md:hidden gap-2 items-center" id="searchContainer">
          <img src="/assets/search-svgrepo-com.svg" className="h-4" alt="search-icon" />
          <input type="search" placeholder="Search..." className="w-full p-1 border border-solid border-ecom-dark rounded-sm" id="searchInput" aria-label="search-input" />
          {/* <div>
            <ul id="searchResults"></ul>
            <div className="hidden">
              alert message
            </div>
          </div> */}
        </div>
      </div>



    </header>
  );
}

export default Header;
