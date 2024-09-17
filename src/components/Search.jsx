function Search() {
  return (
    <div
      className="flex gap-2 items-center relative order-5 md:order-4 w-full md:w-auto"
      id="searchContainer"
    >
      <img
        src="/assets/search-svgrepo-com.svg"
        className="h-4"
        alt="search-icon"
      />
      <input
        type="search"
        placeholder="Search..."
        className="w-full p-1 border border-solid border-ecom-dark rounded-sm"
        id="searchInput"
        aria-label="search-input"
      />
      {/* <div>
        <ul id="searchResults"></ul>
        <div className="hidden">
          alert message
        </div>
      </div> */}
    </div>
  )
}

export default Search;