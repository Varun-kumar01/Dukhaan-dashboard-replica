
export const RevenueCard = ({
    title,
    amount,
    orderCount
}) =>{
    return <div className="shadow-md rounded-md p-4">
        <div className="text-grey-900 flex justify-center flex-col">
           <div className="flex">
            {title}
                <div className="pl-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
           </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="text-xl">
               <b>₹ {amount}</b>
            </div>
                {orderCount ? <div className="flex  cursor-pointer underline justify-center">
                    <div className="text-blue-700">
                        {orderCount} 
                    </div>
                    <div className="text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>: null}
        </div>
    </div>
}




