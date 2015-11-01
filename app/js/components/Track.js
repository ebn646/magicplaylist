'use strict';

import React, {Component} from 'react';
import PlaylistActions from '../actions/PlaylistActions';
import Player from './Player';

class Track extends Component {

  constructor(props) {
    super(props);
  }

  _remove() {
    PlaylistActions.removeTrack(this.props.index);
    ga('send', 'event', 'button', 'click', 'playlist-remove-track');
  }

  render() {
    let track = this.props.track;
    return <li>
              <div className='track-name'>{track.name}, {track.artists.first().name}</div>
              <div className='remove tooltip center'
                onClick={this._remove.bind(this)}
                data-tooltip='Remove this track'
              >
                <img src='img/remove.svg'/>
              </div>
              <div className='play tooltip center' data-tooltip='Preview this track'>
                <Player
                  source={track.preview_url}
                  ptag={this.props.ptag.bind(this)}
                  stopAll={this.props.stopAll.bind(this)}/>
              </div>
            </li>;
  }
}

export default Track;
