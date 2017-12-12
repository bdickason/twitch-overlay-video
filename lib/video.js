/* video.js - Re-usable module to  */

var path = require('path');

var eventbus;	// Global event bus attached to VideoOverlay object - used for passing events

module.exports = VideoOverlay;

function VideoOverlay(name, file) {
	// this.name;
	// this.video;
	// this.file;

	var self;			// Used for scope when passing around events
	self = this;

	if(!name) {
		throw new Error("You must specify a name for this overlay")
	}
	if(!file) {
		throw new Error("You must specify a Video URL");
	}

	// Required options
	this.name = name;											// Unique identifier for event listeners

	this.type = 'video';
	this.video = {												// absolute path to video. Will include 'filename' and 'directory' parameters.
		filename: path.basename(file),
		directory: path.join(path.dirname(file))
	};

	this.directory = this.video.directory;

	this.payload = {											// What data do we deliver when the overlay is shown?
		video: '/' + this.name + '/' + this.video.filename
	}
};
