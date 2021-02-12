function Message(props) {
    return (
        <div className="--message">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}
export default Message;