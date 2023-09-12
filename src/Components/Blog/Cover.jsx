const Cover = ({blog}) => {
    return (
        <div className="">
            <img src={blog.cover} 
                className="mb-5 h-[300px] lg:h-[400px] w-full" alt=""/>
        </div>
    );
};

export default Cover;