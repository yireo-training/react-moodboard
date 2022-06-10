import Step1 from "./Sidebar/Step1";
import Step2 from "./Sidebar/Step2";

const Sidebar = props => {

    if (!props.activeBranch) {
        return <Step1 />
    }

    return <Step2 activeBranch={props.activeBranch} />
};
export default Sidebar;
