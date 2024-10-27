const Header = () => (
  <header className="sticky top-0 left-0 bg-primary text-white h-auto min-h-[5.875rem] px-6 py-3">
    <figure className="h-full flex items-center">
      <div className="w-[3.59375rem] h-[3.59375rem] mr-3 rounded-full bg-gray-300 overflow-hidden">
        <img
          src="https://picsum.photos/200"
          alt="Nicole"
          className="w-full h-full object-cover"
        />
      </div>
      <figcaption className="text-neutrals-white">
        <p className="text-sm">Welcome to e-commerce!</p>
        <h1 className="text-lg font-bold">Good Morning, Nicole</h1>
      </figcaption>
    </figure>
  </header>
);

export default Header;
