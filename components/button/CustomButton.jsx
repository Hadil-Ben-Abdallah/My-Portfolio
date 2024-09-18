
import styles from './button.module.css';
const CustomButton = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      class="group relative inline-block overflow-hidden border-2 border-gray-100 bg-main  px-12 py-3 text-xl font-medium text-white hover:text-primary focus:outline-none hover:border-transparent "
    >
      <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary transition-all duration-300 group-hover:w-full"></span>
      <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary transition-all duration-500 group-hover:h-full"></span>
      <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full"></span>
      <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary transition-all duration-500 group-hover:h-full"></span>
      {text}
    </button>
  );
};

export default CustomButton;
