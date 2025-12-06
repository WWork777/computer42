
import { Metadata } from "next";
import NotFound from "./components/not-found";

export const metadata: Metadata = {
    title: "404 Страница | Computer42",
};

const ErrorPage = () => {
    return (
        <NotFound />
    );
};

export default ErrorPage;
