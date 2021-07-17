class myClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "hello" }
    }
    render() {
        return React.createElement(
            'h1',
            {
                onClick: () => {
                    this.setState({ name: "hello world" });
                }
            },
            `${this.state.name}`
        )
    }
}

ReactDOM.render(
    React.createElement(myClass),
    document.getElementById("root")
);
