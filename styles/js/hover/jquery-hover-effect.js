(function( $, undefined ) {
		
	/*
	 * HoverDir object.
	 */
	$.HoverDir 				= function( options, element ) {
	
		this.$el	= $( element );
		
		this._init( options );
		
	};
	
	$.HoverDir.defaults 	= {
		hoverDelay	: 0,
		reverse		: false
	};
	
	$.HoverDir.prototype 	= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.HoverDir.defaults, options );
			
			// load the events
			this._loadEvents();
			
		},
		_loadEvents			: function() {
			
			var _self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el			= $(this),
					evType		= event.type,
					$hoverElem	= $el.find( 'article' ),
					direction	= _self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					hoverclasses= _self._getclasses( direction );
				
				$hoverElem.removeclass();
				
				if( evType === 'mouseenter' ) {
					
					$hoverElem.hide().addclass( hoverclasses.from );
					
					clearTimeout( _self.tmhover );
					
					_self.tmhover	= setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							$(this).addclass( 'da-animate' ).addclass( hoverclasses.to );
						} );
						
					
					}, _self.options.hoverDelay );
					
				}
				else {
				
					$hoverElem.addclass( 'da-animate' );
					
					clearTimeout( _self.tmhover );
					
					$hoverElem.addclass( hoverclasses.from );
					
				}
					
			} );
			
		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir				: function( $el, coordinates ) {
			
				/** the width and height of the current div **/
			var w = $el.width(),
				h = $el.height(),

				/** calculate the x and y to get an angle to the center of the div from that x and y. **/
				/** gets the x value relative to the center of the DIV and "normalize" it **/
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				/** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
				/** first calculate the angle of the point, 
				add 180 deg to get rid of the negative values
				divide by 90 to get the quadrant
				add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
			
			return direction;
			
		},
		_getclasses			: function( direction ) {
			
			var fromclass, toclass;
			
			switch( direction ) {
				case 0:
					// from top
					( !this.options.reverse ) ? fromclass = 'da-slideFromTop' : fromclass = 'da-slideFromBottom';
					toclass		= 'da-slideTop';
					break;
				case 1:
					// from right
					( !this.options.reverse ) ? fromclass = 'da-slideFromRight' : fromclass = 'da-slideFromLeft';
					toclass		= 'da-slideLeft';
					break;
				case 2:
					// from bottom
					( !this.options.reverse ) ? fromclass = 'da-slideFromBottom' : fromclass = 'da-slideFromTop';
					toclass		= 'da-slideTop';
					break;
				case 3:
					// from left
					( !this.options.reverse ) ? fromclass = 'da-slideFromLeft' : fromclass = 'da-slideFromRight';
					toclass		= 'da-slideLeft';
					break;
			};
			
			return { from : fromclass, to: toclass };
					
		}
	};
	
	var logError 			= function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};
	
	$.fn.hoverdir			= function( options ) {
	
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				var instance = $.data( this, 'hoverdir' );
				
				if ( !instance ) {
					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
			
				var instance = $.data( this, 'hoverdir' );
				if ( !instance ) {
					$.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				}
			});
		
		}
		
		return this;
		
	};
	
})( jQuery );