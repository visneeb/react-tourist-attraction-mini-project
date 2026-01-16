function SearchBox({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 w-[80%] ">
      <h3 className=" py-1 ">ค้นหาที่เที่ยว</h3>

      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-center border-b border-gray-500"
      />
    </form>
  );
}

export default SearchBox;
