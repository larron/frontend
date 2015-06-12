'use strict';

import config from '../../configs';
import contentDeliveryActions from '../actions/content-delivery';

const request = superagent;
const topTracksResourceUrl = `${config.apiUrl}/top_tracks`;

export default Reflux.createStore({
    listenables: contentDeliveryActions,
    tracks: [],
    showArtist(id) {
        request.get(topTracksResourceUrl)
        .query({
            limit: 25,
            artist_id: id
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
        //this.tracks = data;
        /*
         * TODO: remove this when data present
         */
        this.tracks = [
            {track_name: 'hustlas ambition'},
            {track_name: 'gangstas'},
            {track_name: 'gangstas pt II'},
            {track_name: 'thug holiday'},
            {track_name: 'wanksta'}
        ];
        this.trigger(null, this.tracks);
    }

});
