import { HeadFC, PageProps } from "gatsby";
import React, { useState } from "react";
import BlogMainComponent from "../components/BlogMainComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";




const IndexPage: React.FC<PageProps> = () => {
    const [backgroundColor, setBackgroundColor] = useState("#000");
    const [textColor, setTextColor] = useState("#fff");


    return (
        <div style={{ backgroundColor: backgroundColor, color: textColor, height: "100vh" }}>
            <div className="container">
                <HeaderComponent></HeaderComponent>
                <BlogMainComponent></BlogMainComponent>
                <FooterComponent></FooterComponent>
            </div>
        </div>

    )

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>