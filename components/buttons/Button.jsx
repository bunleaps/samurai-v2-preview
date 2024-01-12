function Button({ children, onClick }) {
  return (
    <button
      className="bg-cyan-500 py-2 px-5 rounded-full"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
