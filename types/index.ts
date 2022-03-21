import { ReactElement } from "react";
import { NextPage } from "next";

type GetLayoutFunc = (page: ReactElement) => ReactElement;

export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
};
export type Message = {
  name: string;
  email: string;
  message: string;
};

export type Experience = {
  id: string;
  name_of_company: string;
  role: string;
  start_date: string;
  end_date: string;
  content: { document: any };
};

export type ProjectsSchema = {
  id: string;
  name: string;
  description: string;
  projectUrl: string;
  badges: any[];
}
