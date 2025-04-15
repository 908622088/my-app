import { useState } from "react";

interface TodoFilterProps {
    setFilter: (filter: string) => void;
}
function TodoFilter({setFilter}:TodoFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const handleFilter = (filter:string) => {
    setActiveFilter(filter)
    setFilter(filter);
  }
  return (
    <div className="flex flex-wrap gap-2 mt-4 sm:justify-center md:justify-start">
      <button 
        onClick={() => handleFilter('all')} 
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base ${activeFilter === 'all' ? 'bg-[#323131]' : 'bg-[#858181]'}  text-white rounded hover:bg-[#323131] flex-1 sm:flex-none max-w-[30%] sm:max-w-none`}
      >
        全部
      </button>
      <button 
        onClick={() => handleFilter('active')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base ${activeFilter === 'active' ? 'bg-[#d46a0d]' : 'bg-[#f59931]'}  text-white rounded hover:bg-[#d46a0d] flex-1 sm:flex-none max-w-[30%] sm:max-w-none`}
      >
        进行中
      </button>
      <button 
        onClick={() => handleFilter('completed')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base ${activeFilter === 'completed' ? 'bg-[#0ca148]' : 'bg-[#57ee3c]'} text-white rounded hover:bg-[#0ca148] flex-1 sm:flex-none max-w-[30%] sm:max-w-none`}
      >
        完成
      </button>
    </div>
    
  );
}
export default TodoFilter;