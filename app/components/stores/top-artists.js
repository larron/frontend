'use strict';

import config from '../../configs';
import contentDeliveryActions from '../actions/content-delivery';

const request = superagent;
const topArtistsResourceUrl = `${config.apiUrl}/top_artists`;

export default Reflux.createStore({
    listenables: contentDeliveryActions,
    artists: [],
    searchArtists(params) {
        request.get(topArtistsResourceUrl)
        .query({
            limit: 25,
            min_date_range: params.min_date_range.format('YYYY-MM-DD'),
            max_date_range: params.max_date_range.format('YYYY-MM-DD'),
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
        this.artists = data.artists;
        this.trigger(null, this.artists);
    }
});
