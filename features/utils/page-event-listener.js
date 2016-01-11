// Module 
// This listens for events on the page. 
// For use with jQuery only.
// 
// This script updates a dom element to signal to the
// webdriver when it has got something back.
// It can then be requested for the data that is returned.
//
// When registering an event provide in this format
//   var eventObj = {
//     name: 'ajaxCompleteAll', // (req)
//     selector: '', //listen to document (req)
//     eventToTrack: 'ajaxComplete', // (req)
//     customHandler: false,
//		 wish: false // listen once? // (req)
//   }

module.exports = {
	// Look for the event.
	watchForEvent: function(eventObj) {
		return client.execute(function(event) {
			return eventToDom.register(event);
		}, eventObj);
	},

	// Fetch the event (based on the object).
	fetchEvent: function(eventObj) {
		return client.execute(function(trackName, trackId) {
			return eventToDom.pullEvent(trackName, trackId);
		}, eventObj.name, eventObj.trackId);
	},

	// Supply with event object to track.
	waitForEvent: function(eventObj) {
		var liveEvent = this.watchForEvent(eventObj);
		client.waitForExist(liveEvent.value.selector);
		var resultEvent = this.fetchEvent(liveEvent.value);
		console.log(resultEvent);
		
		return resultEvent;
	},

	// Startup injection prob.
	injectProbe: function() {
		client.execute(function() {
			var $_c = jQuery;
			window.eventToDom = { 
			  $bucket: false,
			  listen: false,
			  target: 'dom-event-listener-readout',
			  events: {},
			  count: 0,
			  
			  // Start probe.
			  start: function(uniqueKeySelector) {
			    this.listen = true;
			    this.target = (typeof uniqueKeySelector !== 'undefined') ? uniqueKeySelector : this.target;
			    this.buildDom();
			  },
			  
			  // Stop listening for events.
			  stop: function() {
			    this.listen = false;
			  },
			  
			  // Register an event for tracking outcome.
			  registerList: function(eventData) {
			    var self = this;
			    $.each(eventData, function(index, track) {
			      eventData[index] = self.register(track);
			    });
			    return eventData;
			  },
			  
			  // Register a trackable event.
			  register: function(track) {
			    var selectorTarget = (track.selector !== '') ? track.selector : document,
			        self = this;
			    
			    this.count ++;
			    track.trackId = this.count;
			    
			    if (track.wish) {
			      // Allows for re-wishing.
			      track.wished = false;
			    }
			    
			    track.selector = ['.' + this.target, '.track-id-' + track.trackId].join(' ');
			    
			    // Hand back to events object.
			    this.events[track.name] = track;
			    switch (track.eventToTrack) {
			      case 'ajaxComplete':
			        $_c(selectorTarget).ajaxComplete(function(event, xhr, settings) {
			          var outcome = {
			            url: settings.url,
			            response: xhr.responseText,
			            status: xhr.status,
			          }
			         	var endpoint = settings.url.split('?')[0];
			          if (track.targetUrl === endpoint) {
			            self.triggerEventSignal(track, outcome);  
			          }
			        });
			        break;

			      default:
			      	// Using bind here to support legacy jquery versions.
			        $_c(selectorTarget).bind(track.eventToTrack, function(e) {
			          var outcome = {
			            hello: 'world'
			          }
			          self.triggerEventSignal(track, outcome);
			          //self.createEventDom([track.eventToTrack, track.name], JSON.stringify(e));
			        });
			        break;
			    }
			    return track;
			  },
			  
			  triggerEventSignal: function(track, outcome) {
			    track.data = outcome;
			   
			    if (track.wish && !this.events[track.name].wished) {
			      track.$elem = this.createEventDom(track);
			      track.wished = true;
			    }

			    if (!track.wish) {
			      track.$elem = this.createEventDom(track);
			    }
			    
			    // Push updated track back to the events object.
			    this.events[track.name] = track;
			  },
			  
			  pullEvent: function(name, trackId) {			    
			    // Tracke event does not exists or Track id has expired.
			    if (typeof this.events[name] === 'undefined' || this.events[name].trackId !==  trackId) {
			      return false
			    }
			    
			    // Track item was not found.
			    if (typeof this.events[name].$elem === 'undefined') {
			      return false;
			    }
			      
			    // If data exists pass it on.
			    if (typeof this.events[name].data !== 'undefined') {
			      if (this.events[name].wish) {
			        this.events[name].$elem.remove();
			      }
			      
			      return this.events[name].data
			    }
			    else {
			      return false;
			    }
			  },

			  createEventDom: function(track) {
			    var $eDom = $_c(document.createElement('div'));
			    
			    // Add identifiers and content.
			    $eDom
			     .addClass([track.eventToTrack, track.name, 'track-id-' + track.trackId].join(' '))
			     .attr('data-track-id', track.trackId)
			     .text(track.trackId);
			    
			    this.$bucket.append($eDom);
			    return $eDom;
			  },
			  
			  buildDom: function() {
			    if (this.$bucket) {
			      return;
			    }
			    
			    this.$bucket = $_c(document.createElement('div'));
			    this.$bucket
			    	.addClass(this.target)
			    	.hide();
			    $_c('body').append(this.$bucket);
			  }
			}

			// Start the probe.
			eventToDom.start();			
		});
	}
}