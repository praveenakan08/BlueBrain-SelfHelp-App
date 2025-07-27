interface EmotionButtonType {
    emotion: string,
    handleEmotion: any,
    emojiUrl: any;
}

const EmotionButton = ({emotion, handleEmotion, emojiUrl}: EmotionButtonType): JSX.Element => {
    const handleClick = (emotion: string) => {
        handleEmotion(emotion);
    }

    return (
        <div>
            <button className={"btn flex flex-col gap-3 justify-center items-center"}
                    onClick={() => handleClick(emotion)}> 
                <img src={emojiUrl} className="h-10 w-10"></img>
                <p className="font-bold">{emotion}</p>
            </button>
        </div>
    );
}

export default EmotionButton;
