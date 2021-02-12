function PopOver(props) {
    return (
        <div className="--popover-wrapper">
            <div className="--popover-trigger">
                {props.trigger}
            </div>
            {props.content ?
                <div className="--popover-content">
                    {props.content}
                </div>
                : ""
            }
        </div>
    );
}
export default PopOver;