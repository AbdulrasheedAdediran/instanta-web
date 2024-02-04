import { ButtonVariants, Sizes } from "@/utils/types";
import { Button } from "@/widgets";

export default function DashboardFooter({ className }: any) {


  return (
    <footer className={`text-center md:text-left max-width mt-4 bg-chineseSilver min-h-12 flex items-center justify-between ${className}`}>
      <p className="text-black"><span>&copy;</span> <span>{ new Date().getFullYear()}</span> <span className="text-red">Instanta</span></p>

      <p className="text-black">V 1.1</p>
    </footer>
  );
}



