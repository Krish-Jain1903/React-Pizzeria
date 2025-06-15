function Loader() {
  return(
    // THIS IS HOW YOU MAKE ANY ELEMENT TO ABSOLUTE POSITION IN TAILWIND
  <div className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm flex items-center justify-center">
    <div className="loader"></div>;
  </div>
  );
}

export default Loader;
