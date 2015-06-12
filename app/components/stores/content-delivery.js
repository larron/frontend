'use strict';

import topArtistsStore from './top-artists';

export default Reflux.createStore({
    artists: [],
    init() {
        this.listenTo(topArtistsStore, this.topArtistsChange);
    },
    topArtistsChange(err, artists) {
        this.artists = artists || [];
        this.trig(err);
    },
    trig(err) {
        this.trigger(err, {
            artists: this.artists
        });
    }
});
