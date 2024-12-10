import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useSecureAxios from "../../hooks/useSecureAxios";
import { FaDollarSign } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdLocalShipping, MdProductionQuantityLimits } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const AdminHome = () => {
    const { user } = useAuth()
    const secureAxios = useSecureAxios()
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const { data: adminStates = {} } = useQuery({
        queryKey: ["adminStates"],
        queryFn: async () => {
            const res = await secureAxios.get("/admin-states")

            return res.data
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ["orderStates"],
        queryFn: async () => {
            const res = await secureAxios.get("/orders-states")

            return res.data
        }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = chartData.map(piData =>{
        return {
            name: piData.category,
            value: piData.revenue
        }
    })
    return (
        <div className="space-y-4 p-4">
            <h2 className="font-cinzel text-3xl">Hi! Welcome {user?.displayName ? user.displayName : "Back"}</h2>
            <div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="flex gap-4 justify-center items-center p-6 bg-[#FECDE9] bg-gradient-to-r from-[#BB34F5] shadow-lg rounded-lg ">
                        <div>
                            <p className="text-6xl text-white"><FaDollarSign /></p>
                        </div>
                        <div className="text-white">
                            <h3 className="text-4xl font-bold">{adminStates.revenue}</h3>
                            <h4 className="text-2xl font-bold">Revenue</h4>
                        </div>

                    </div>
                    <div className="flex gap-4 justify-center items-center p-6 bg-[#FDE8C0] bg-gradient-to-r from-[#D3A256] shadow-lg rounded-lg ">
                        <div>
                            <p className="text-6xl text-white"><FaUsers /></p>
                        </div>
                        <div className="text-white">
                            <h3 className="text-4xl font-bold">{adminStates.users}</h3>
                            <h4 className="text-2xl font-bold">Customers</h4>
                        </div>

                    </div>
                    <div className="flex gap-4 justify-center items-center p-6 bg-[#FECDE9] bg-gradient-to-r from-[#FE4880] shadow-lg rounded-lg ">
                        <div>
                            <p className="text-6xl text-white"><MdProductionQuantityLimits /></p>
                        </div>
                        <div className="text-white">
                            <h3 className="text-4xl font-bold">{adminStates.menuItems}</h3>
                            <h4 className="text-2xl font-bold">Items</h4>
                        </div>

                    </div>
                    <div className="flex gap-4 justify-center items-center p-6 bg-[#B6F7FF] bg-gradient-to-r from-[#6AAEFF] shadow-lg rounded-lg ">
                        <div>
                            <p className="text-6xl text-white"><MdLocalShipping /></p>
                        </div>
                        <div className="text-white">
                            <h3 className="text-4xl font-bold">{adminStates.orders}</h3>
                            <h4 className="text-2xl font-bold">Orders</h4>
                        </div>

                    </div>

                </div>
                <div className="flex gap-4 mt-20 justify-center items-center">
                    <div className="w-1/2">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                            <Legend></Legend>
                        </BarChart>
                    </div>
                    <div className="w-1/2">
                        <PieChart width={400} height={300}>
                        <Legend></Legend>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;