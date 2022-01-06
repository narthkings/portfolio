import { ReactElement } from 'react';
import { NextPage } from "next";

type GetLayoutFunc = (page: ReactElement) => ReactElement;

export type NextPageWithLayout = NextPage & {
    getLayout?: GetLayoutFunc;
}
export type Message = {
    name: string;
    email: string;
    message: string;
}