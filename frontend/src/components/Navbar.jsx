const Navbar = () => {
  return (
    <nav className="bg-teal-400 border-b border-teal-600">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between">
      <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
        <a className="flex flex-shrink-0 items-center mr-4" href="/">
          <span className="hidden md:block text-white text-2xl font-bold ml-2">
            Family Tree
          </span>
        </a>
        <div className="md:ml-auto">
          <div className="flex space-x-2">
            <a
              href="/settings"
              className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >
              Settings
            </a>
            <a
              href="/"
              className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
