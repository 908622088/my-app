interface TodoFilterProps {
    setFilter: (filter: string) => void;
}
function TodoFilter({setFilter}:TodoFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
      <button 
        onClick={() => setFilter('all')} 
        className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-500 text-white rounded hover:bg-gray-600 flex-1 sm:flex-none max-w-[30%] sm:max-w-none"
      >
        全部
      </button>
      <button 
        onClick={() => setFilter('active')}
        className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-yellow-500 text-white rounded hover:bg-yellow-600 flex-1 sm:flex-none max-w-[30%] sm:max-w-none"
      >
        进行中
      </button>
      <button 
        onClick={() => setFilter('completed')}
        className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-green-500 text-white rounded hover:bg-green-600 flex-1 sm:flex-none max-w-[30%] sm:max-w-none"
      >
        完成
      </button>
    </div>
    
  );
}
export default TodoFilter;