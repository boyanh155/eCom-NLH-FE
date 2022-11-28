import {
    apiSlice
} from "../../apis/apiSlice";
export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get History Order
        getHistoryOrder: builder.query({
            query: (inputData) => {
                let {
                    page,
                    size
                } = inputData;
                return {
                    url: `http://localhost:5000/api/orders/myorders`,
                    params: {
                        page,
                        size
                    },
                };
            }
        }),
        // get Order Info
        getOrderInfo: builder.query({
            query: ({
                orderId
            }) => `http://localhost:5000/api/orders/${orderId}`,
        }),
        // get Order Status (pending,processing,complete,cancel,delivery,paid,unpaid)
        filterOrderStatus: builder.query({
            query: (inputData) => {
                let {
                    page,
                    size,
                    status
                } = inputData;
                return {
                    url: `/order/search-status`,
                    params: {
                        page,
                        size,
                        status
                    },
                };
            },
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // User
        // Make a order
        placeOrder: builder.query({
            query: (inputData) => ({
                url: `http://localhost:5000/api/orders`,
                method: "POST",
                body: {
                    ...inputData
                },
            })
        }),
        // Cancel cod order
        cancelCodOrder: builder.query({
            query: ({
                orderId
            }) => ({
                url: `/cod/cancel/${orderId}`,
                method: "PUT",
            }),
        }),
    }),
});