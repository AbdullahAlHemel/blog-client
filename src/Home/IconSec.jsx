import { AiFillFund ,AiOutlineAppstore ,AiOutlineGlobal, AiOutlineSchedule} from "react-icons/ai";

const IconSec = () => {
    return (
        <div className="flex  justify-evenly mt-4 md:mt-12 bg-base-300 py-8 md:py-16 rounded">
            <div className="text-[70px] md:text-[100px]"><AiFillFund></AiFillFund></div>
            <div className="text-[70px] md:text-[100px]"><AiOutlineAppstore></AiOutlineAppstore></div>
            <div className="text-[70px] md:text-[100px]"><AiOutlineGlobal></AiOutlineGlobal></div>
            <div className="text-[70px] md:text-[100px]"><AiOutlineSchedule></AiOutlineSchedule></div>
        </div>
    );
};

export default IconSec;