export function TitleLine({ children }) {
  return (
    <div className="flex items-center">
      <div className="w-[60px] h-[5px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mr-2"></div>
      <p>{children}</p>
    </div>
  );
}

export function TitleLineWhite({ children }) {
  return (
    <div className="flex items-center">
      <div className="w-[60px] h-[5px] rounded-full bg-white mr-2"></div>
      <p>{children}</p>
    </div>
  );
}
