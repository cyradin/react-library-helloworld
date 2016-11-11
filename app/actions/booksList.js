import store from '@app/store';
import { BOOKS_LIST } from '@actiontypes';

export default function () {
    setTimeout(function() {
        store.dispatch({
            type: BOOKS_LIST,
            data: [
                {id: 1, name: 'Seven', author: 'John Doe', readDate: '2016-01-15', file: '/img/1.jpg', cover: '/img/1_cover.jpg', allowDownload: true},
                {id: 2, name: 'Hello', author: 'John Doe', readDate: '2016-02-15', cover: '/img/2_cover.jpg', allowDownload: true},
                {id: 3, name: 'World', author: 'John Doe', readDate: '2016-03-15', file: '/img/3.jpg', allowDownload: false},
                {id: 4, name: 'Harry Potter', author: 'John Doe', readDate: '2016-04-15', file: '/img/4.jpg', cover: '/img/4_cover.jpg', allowDownload: false},
            ]
        })
    }, 1000);
}