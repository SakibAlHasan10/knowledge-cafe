import AddReadTime from "./AddReadTime";

const SideBar = ({blog}) => {
    return (
        <div className="w-40 bg-slate-500">
            <AddReadTime blog={blog}></AddReadTime>
            <h2>my name</h2>
        </div>
    );
};

export default SideBar;