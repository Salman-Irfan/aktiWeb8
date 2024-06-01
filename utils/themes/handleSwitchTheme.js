export const handleSwitchTheme = () => {
    if (theme.style.backgroundColor === "red") {
        theme.style.backgroundColor = "yellow";
        theme.style.color = "green";
    } else if (theme.style.backgroundColor === "yellow") {
        theme.style.backgroundColor = "red";
        theme.style.color = "white";
    }
}