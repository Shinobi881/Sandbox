const Rx = require('rxjs/Rx');
const axios = require('axios');
const reader = require('./reader/reader');

const url = 'https://www.eventbriteapi.com/v3/events/search/?expand=venue.region&sort_by=date&venue.city=Oakland&venue.region=CA&categories=103&token=MD33DX7LJOIGAGCBYRF7'

let eventbrite = axios.get(url);

// let readMyFile = Rx.Observable.bindCallback(reader);
// let result = readMyFile();
// result
// .subscribe(x => console.log(x), e => console.error(e));


// const subject = new Rx.AsyncSubject().schedule();
const fetcher = new Rx.Observable.fromPromise(eventbrite).interval(1000).take(9);

fetcher.subscribe(v => console.log(v), e => console.log(e));

// subject.next(reader());


// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);
// subject.complete();
