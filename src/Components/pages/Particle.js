import React from 'react';
import Particles from 'react-particles-js';

export default function Particle() {
    return (
        <div>
             <Particles
                    height="600px"
                    params={{
                    "particles": {
                        "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 1000
                        }
                        },
                        "color": {
                        "value": "#ffffff"
                        },
                        "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                        },
                        "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                        },
                        "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                        },
                        "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.7,
                        "width": 1
                        },
                        "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 400,
                            "rotateY": 1000
                        }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                        },
                        "modes": {
                        "grab": {
                            "distance": 250,
                            "line_linked": {
                            "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 20,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                        }
                }}
                } />
        </div>
    )
}
