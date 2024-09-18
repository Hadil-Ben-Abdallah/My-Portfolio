const Home = () => {
  return (
    <div className="m-12">
      <button class="group relative inline-block overflow-hidden border border-gray-100 bg-gray-200  px-12 py-3 text-sm font-medium text-black hover:text-primary focus:outline-none ">
        <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary transition-all duration-300 group-hover:w-full"></span>
        <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary transition-all duration-500 group-hover:h-full"></span>
        <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full"></span>
        <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary transition-all duration-500 group-hover:h-full"></span>
        Signup
      </button>
    </div>
  );
};

export default Home;
