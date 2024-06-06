import ButtonList from "./ButtonList";

export default function Header() {
    return (
        <div>
            <div className="header-container">
                <p className="header-first-name">Benjamin <span className="header-last-name">Stewart</span></p>
                <ButtonList />
            </div>
            <p className="header-occupation">Software Engineer</p>
        </div>
    )
}
