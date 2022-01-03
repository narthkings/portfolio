import { ReactElement } from 'react';
import { NextPage } from "next";

type GetLayoutFunc = (page: ReactElement) => ReactElement;

export type NextPageWithLayout = NextPage & {
    getLayout?: GetLayoutFunc;
}