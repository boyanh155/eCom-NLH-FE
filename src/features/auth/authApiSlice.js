import { apiSlice } from "../../apis/apiSlice";

const base_url = "http://localhost:5000/api"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (inputData) => ({
                url: `http://localhost:5000/api/auth/login`,
                method: "POST",
                body: {...inputData },
            }),
        }),
        register: builder.mutation({
            query: (inputData) => ({
                url: `http://localhost:5000/api/auth/register`,
                method: "POST",
                body: {...inputData },
            }),
        }),
        // verify: builder.mutation({
        //     query: (inputData) => ({
        //         url: "/verifyRegistration",
        //         method: 'GET',
        //         params: {...inputData },
        //     }),

        // }),
        verify: builder.mutation({
            query: (inputData) => {
                const { email, token } = inputData;
                return {
                    url: "/verifyRegistration",
                    method: "GET",
                    params: { email, token },
                };
            },
            transformResponse: (res, meta) => ({ res, meta }),
        })

    }),
});
// Hook useMutation
export const { useLoginMutation, useRegisterMutation, useVerifyMutation } =
authApiSlice;