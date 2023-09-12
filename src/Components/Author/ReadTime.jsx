
const ReadTime = ({blog}) => {
    return (
        <div>
            <p className="text-lg font-medium">{blog.reading_time_minutes} min read</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
        </div>
    );
};

export default ReadTime;