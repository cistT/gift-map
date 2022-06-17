//適切なコンポーネント名がわからない
//見出しと見出しの説明を表示するコンポーネント

const HeadingWithText = ({ Heading = "", text = "" }) => {
    return (
        <div
            style={{
                width: "40vw",
                border: "0.5px dashed black",
                margin: "0 10px 10px 10px",
                padding: "5px",
            }}
        >
            <div
                style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: "5px",
                }}
            >
                {Heading}
            </div>
            <div style={{ fontSize: "16px", color: "black" }}>{text}</div>
        </div>
    );
};

export default HeadingWithText;
