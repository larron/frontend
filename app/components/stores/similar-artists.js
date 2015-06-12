'use strict';

import config from '../../configs';
import contentDeliveryActions from '../actions/content-delivery';

const request = superagent;
const similarArtistsResourceUrl = `${config.apiUrl}/similar_artists`;

export default Reflux.createStore({
    listenables: contentDeliveryActions,
    artists: [],
    similarArtists: [],
    showArtist(artist) {
        request.get(similarArtistsResourceUrl)
        .query({
            limit: 25,
            artist_name: artist.artist_name
        })
        .end((err, response) => {
            if (err) return this.failure(err);
            return this.completed(response.body);
        });
    },
    failure(err) {
        this.trigger(err);
    },
    completed(data) {
        console.log(data);
        //this.tracks = data;
        /*
         * TODO: remove this when data present
         */
        this.similarArtists = [
            {artist_name: '50 Cent'},
            {artist_name: 'Young Buck'},
            {artist_name: 'Tony Yayo'},
            {artist_name: 'Lloyd Banks'},
            {artist_name: 'The Game'}
        ];
        this.trigger(null, this.similarArtists);
    }

});
