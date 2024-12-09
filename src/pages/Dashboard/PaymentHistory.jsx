import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useAuth from "../../hooks/useAuth";
import useSecureAxios from "../../hooks/useSecureAxios";


const PaymentHistory = () => {
    const secureAxios = useSecureAxios()
    const { user } = useAuth()

    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ["paymentHistory", user.email],
        queryFn: async () => {

            const resData = await secureAxios.get(`/payment-history?email=${user.email}`)
            return resData.data;
        }
    })

    console.log(paymentHistory);


    return (
        <div>
            <SectionHeader title={`Payment History`} subtitle={`At a Glancel`}></SectionHeader>
            <div className="w-5/6 mx-auto bg-white">
                <div className="overflow-x-auto mt-6 rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white bg-[#D1A054] uppercase font-cinzel ">
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>TnxId</th>
                                <th>Total Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((payment, idx) => <tr key={payment._id}>
                                    <th>
                                        {idx + 1}

                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            {payment.email}
                                        </div>
                                    </td>
                                    <td>
                                        {payment.tnxId}

                                    </td>
                                    <td>
                                        ${payment.amount}
                                    </td>
                                    <td>
                                        {payment.date}

                                    </td>
                                    <td>
                                        {payment.status}

                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    );
};

export default PaymentHistory;