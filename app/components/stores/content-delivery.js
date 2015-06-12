'use strict';

import topArtistsStore from './top-artists';
import topTracksStore from './top-tracks';
import contentDeliveryActions from '../actions/content-delivery';

// TODO: refactor showArtist stuff to be in it's own store
// in the case we do not have the currentArtist in our array of artists
// we should fetch it, but we need an api to fetch 1 artist

export default Reflux.createStore({
    listenables: contentDeliveryActions,
    artists: [],
    tracks: [],
    currentArtist: null,
    init() {
        this.listenTo(topArtistsStore, this.topArtistsChange);
        this.listenTo(topTracksStore, this.topTracksChange);
    },
    topArtistsChange(err, artists) {
        this.artists = artists || [];
        this.trig(err);
    },
    topTracksChange(err, tracks) {
        this.tracks = tracks || [];
        this.trig(err);
    },
    showArtist(artist) {
        const id = artist.artist_id;

        this.currentArtist = _.find(this.artists, (artist) => {
            return String(id) === String(artist.artist_id);
        });
        this.trig(null);
    },
    trig(err) {
        this.trigger(err, {
            artists: this.artists,
            tracks: this.tracks,
            currentArtist: this.currentArtist,
        });
    }
});
