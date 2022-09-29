import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./sidebar.css";
import BreakTime from "../BreakTime/BreakTime";
import ExerciseDetail from "../ExerciseDetail/ExerciseDetail";
import Button from "../Button/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = (props) => {
    const { onUpdateBreakTime, currentBreakTime, totalExerciseTime, isOpenMobileSidebar, onToggleMobileSidebar } =
        props;

    const notify = () => toast("Yay! You are done", { type: "success", autoClose: 2000 });

    return (
        <>
            <ToastContainer />

            {isOpenMobileSidebar && <div onClick={onToggleMobileSidebar} className="sidebar-backdrop-overlay"></div>}

            <div className={`sidebar ${isOpenMobileSidebar ? "mobile-sidebar" : ""}`}>
                <UserInfo />
                <BreakTime currentBreakTime={currentBreakTime} onClickItem={onUpdateBreakTime} />
                <ExerciseDetail currentBreakTime={currentBreakTime} totalExerciseTime={totalExerciseTime} />

                <Button onClick={notify} className="btn-primary btn-block submit-btn">
                    Activity Completed
                </Button>
            </div>
        </>
    );
};

export default Sidebar;
