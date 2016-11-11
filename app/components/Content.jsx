export default class Content extends React.Component {
    render() {
        return (
            <article>
                { this.props.children}
            </article>
        );
    }
}