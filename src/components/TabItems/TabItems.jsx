import TabItem from "../TabItem/TabItem";


const TabItems = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4 mb-20">
            {
                items.map(item => <TabItem key={item._id} item={item}></TabItem>)
            }
        </div>
    );
};

export default TabItems;