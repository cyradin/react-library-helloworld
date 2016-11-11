import BEMHelper from 'react-bem-helper';

var classes = new BEMHelper({
  name: 'book'
});

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var book = this.props.book;
        var cover = <img src={book.cover || 'http://placehold.it/500x500'}/>
        var file = book.file
            ? <div {...classes('file')}>
                <a href={book.file}></a>
              </div>
            : '';
        return (
            <div {...classes()}>
                <div {...classes('cover')}>
                    {cover}
                </div>
                <div {...classes('info')}>
                    {book.author} - {book.name}
                </div>
                <div {...classes('date')}>
                    Was read {book.readDate}
                </div>
                {file}
            </div>
        );
    }
}
