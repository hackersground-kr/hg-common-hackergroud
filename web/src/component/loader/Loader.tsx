import './Loader.style.css';

export default function Loader() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8
        }} className={"lds-ellipsis"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}