

const SectionHeader = ({subtitle,title}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-16">
            <p className="text-[#D99904] italic my-2">---{subtitle}---</p>
            <h2 className="text-4xl border-y-4 py-4">{title}</h2>
        </div>
    );
};

export default SectionHeader;