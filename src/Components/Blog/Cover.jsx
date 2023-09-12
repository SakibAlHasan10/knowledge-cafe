const Cover = ({blog}) => {
    return (
        <div>
            <img src={blog.cover} 
                className="mb-5 h-[400px] w-[800px]" alt=""/>
        </div>
    );
};

export default Cover;