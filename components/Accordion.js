import { Content } from "next/font/google"
import { useRef, useState } from "react"

const Accordion = ({ title, content, isComponents }) => {
    const [isOpened, setOpened] = useState(false)
    const [height, setHeight] = useState("0px")
    const contentElement = useRef(null)

    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
    }
    return (
        <div onClick={HandleOpening} className="border border-black-400">
            <div className={"bg-white-300 p-4 flex justify-between text-black"}>
                <h4 className="font-semibold">{title}</h4>

            </div>
            <div
                ref={contentElement}
                style={{ height: height }}
                className="bg-gray-50 overflow-hidden transition-all duration-200"
            >
                {isComponents ? content : <p className="p-4">{content}</p>}

            </div>
        </div>
    )
}

export default Accordion