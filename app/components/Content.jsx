import BooksList from '@components/Books/List';

export default class Content extends React.Component {
    render() {
        var content = this.props.children || BooksList;
        return (
            <article>
                {content}
            </article>
        );
    }
}