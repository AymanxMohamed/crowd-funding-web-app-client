
const Line = ({label} : any) => {
  return (
    <div className="flex items-center my-6">
      <div
        className="border-t border-gray-300 flex-grow mr-3"
        aria-hidden="true"
      />
      <div className="text-gray-600 italic">{label}</div>
      <div
        className="border-t border-gray-300 flex-grow ml-3"
        aria-hidden="true"
      />
    </div>
  );
}
export default Line;