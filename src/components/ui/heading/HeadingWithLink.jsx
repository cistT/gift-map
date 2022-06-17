//適切なコンポーネント名がわからない
//見出しとリンクを表示するコンポーネント

const TitleWithLink = ({ Heading = "", href = "" }) => {
    return (
        <div
            style={{
                width: "40vw",
                border: "0.5px dashed black",
                margin: "10px",
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
            <a href={href} target="new">
                {Heading} へ
            </a>
        </div>
    );
};

export default TitleWithLink;
