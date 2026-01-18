import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";


const paymentList = [
    {
        bank_name: "BCA",
        account_number: 123456789,
        account_holder: "SportsOn Indonesia",
    },
    {
        bank_name: "Mandiri",
        account_number: 987654321,
        account_holder: "SportsOn Indonesia",
    },
    {
        bank_name: "BRI",
        account_number: 192837465,
        account_holder: "SportsOn Indonesia",
    },
    {
        bank_name: "BNI",
        account_number: 1011121314,
        account_holder: "SportsOn Indonesia",
    },
    {
        bank_name: "BANK JAGO",
        account_number: 516171819,
        account_holder: "SportsOn Indonesia",
    },
]

const PaymentOptions = () => {
    return (
        <CardWithHeader title="Payment Options">
            <div className="overflow-auto max-h-[400px] scrollbar-hide">
                {paymentList.map((payment, index) => (
                <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                    <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                        <FiCreditCard size={24} />
                    </div>
                    <div className="flex flex-1 justify-between items-center">
                        <div className="flex flex-col">
                            <div className="font-bold">
                                {payment.bank_name}
                            </div>
                            <div className="text-sm">
                                {payment.account_number}
                            </div>
                            <div className="text-sm opacity-70">
                                {payment.account_holder}
                            </div>
                        </div>
                            <div className="bg-blue-50 text-gray-800 text-xs px-2 py-1 rounded h-fit">
                                Bank Transfer
                            </div>
                    </div>

                </div>
                
            ))}
            </div>
            
                
        </CardWithHeader>
    )
}

export default PaymentOptions;