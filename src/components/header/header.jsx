// styles and hooks
import { useState } from "react";
import './_header.scss';

// components
import Logo from "./logo";
import ThemeButton from "./theme-button";

export default function Header() {
    return(
        <div className="header">
            <Logo />
            <ThemeButton />
        </div>
    )
}