import './Music.css';
import React from "react";

const playlist = "6S6swgB4wHSyudr7PT0HnU";

function Music() {
    return (
        <div className="Music container-fluid text-center">
            <div id="title" className="row">
                <div className="col-12">
                    <h2>Nossa Playlist</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <iframe
                        id="spotify-iframe"
                        title="Nossa Playlist"
                        src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=0&autoplay=true`}
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
  
export default Music;