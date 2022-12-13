import paperImg from "../images/icon-paper.svg"
import scissorImg from "../images/icon-scissors.svg"
import rockImg from "../images/icon-rock.svg"

export const rpsArray = [
    {
        id: "paper",
        image: paperImg,
        color: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 84%, 53%))",
        shadow: "hsl(230, 75%, 45%)"
    },
    {
        id: "scissor",
        image: scissorImg,
        color: "linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))",
        shadow: "hsl(40, 75%, 45%)"
    },
    {
        id: "rock",
        image: rockImg,
        color: "linear-gradient(hsl(349, 89%, 49%),hsl(349, 84%, 53%))",
        shadow: "hsl(349, 75%, 45%)"
    }
]