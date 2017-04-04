import React, {Component} from 'react';


                    var Home = React.createClass({render: function() {
                        var feature_style_bg = {
                            backgroundImage: 'url(assets/images/camera_2.jpg)'
                        };
                        var video_style_bg_1 = {
                            backgroundImage: 'url(https://i.vimeocdn.com/video/619622533.webp?mw=960&mh=540)'
                        };
                        var video_style_bg_2 = {
                            backgroundImage: 'url(https://i.vimeocdn.com/video/610492311.webp?mw=960&mh=540)'
                        };
                        var video_style_bg_3 = {
                            backgroundImage: 'url(https://i.vimeocdn.com/video/614040634.webp?mw=960&mh=540)'
                        };
                        var video_style_bg_4 = {
                            backgroundImage: 'url(https://i.vimeocdn.com/video/617024704.webp?mw=960&mh=540)'
                        };
                        var video_style_bg_5 = {
                            backgroundImage: 'url(https://i.vimeocdn.com/video/622535312.webp?mw=960&mh=540)'
                        };
                        var connect_style_bg = {
                            backgroundImage: 'url(assets/images/cameras.jpg)'
                        };

                        return (
                            <div className="Home">

                                <header role="banner" id="fh5co-header">
                                    <div className="fluid-container">
                                        <nav className="navbar navbar-default navbar-fixed-top js-fullheight">
                                            <div id="navbar" className="navbar-collapse js-fullheight">
                                                <ul className="nav navbar-nav navbar-left">
                                                    <li className="active">
                                                        <a href="#" data-nav-section="home">
                                                            <span>Home</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-nav-section="services">
                                                            <span>About</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-nav-section="explore">
                                                            <span>Work</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-nav-section="pricing">
                                                            <span>Pricing</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-nav-section="team">
                                                            <span>Team</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </header>

                                <section id="fh5co-home" data-section="home" data-stellar-background-ratio="0.5">
                                    <div className="gradient"></div>
                                    <div className="container">
                                        <div className="text-wrap">
                                            <div className="text-inner">
                                                <div className="row">
                                                    <div className="col-md-8 col-md-offset-2 text-center">
                                                        <h1 className="to-animate">Jud Nichols</h1>
                                                        <h2 className="to-animate">Portfolio</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="fh5co-services" data-section="services">
                                    <div className="fh5co-services">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 section-heading text-center">
                                                    <h2 className="to-animate">About Jud</h2>
                                                    <div className="row">
                                                        <div className="col-md-8 col-md-offset-2 subtext">
                                                            <h3 className="to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="core-features">
                                                    <div className="grid2 to-animate" style={feature_style_bg}></div>
                                                    <div className="grid2">
                                                        <div className="core-f">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="core">
                                                                        <i className="icon-cloud-download to-animate-2"></i>
                                                                        <div className="fh5co-post to-animate">
                                                                            <h3>Some service youd offer</h3>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="core">
                                                                        <i className="icon-laptop to-animate-2"></i>
                                                                        <div className="fh5co-post to-animate">
                                                                            <h3>Another service youd offer</h3>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="core">
                                                                        <i className="icon-gear to-animate-2"></i>
                                                                        <div className="fh5co-post to-animate">
                                                                            <h3>More service</h3>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="core">
                                                                        <i className="icon-columns to-animate-2"></i>
                                                                        <div className="fh5co-post to-animate">
                                                                            <h3>So many services</h3>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fh5co-counter-section" className="fh5co-counters">
                                                <div className="container">
                                                    <div className="row to-animate">
                                                        <div className="col-md-3 text-center">
                                                            <span className="fh5co-counter js-counter" data-from="0" data-to="3452" data-speed="5000" data-refresh-interval="50"></span>
                                                            <span className="fh5co-counter-label">Cups of Coffee</span>
                                                        </div>
                                                        <div className="col-md-3 text-center">
                                                            <span className="fh5co-counter js-counter" data-from="0" data-to="234" data-speed="5000" data-refresh-interval="50"></span>
                                                            <span className="fh5co-counter-label">Client</span>
                                                        </div>
                                                        <div className="col-md-3 text-center">
                                                            <span className="fh5co-counter js-counter" data-from="0" data-to="6542" data-speed="5000" data-refresh-interval="50"></span>
                                                            <span className="fh5co-counter-label">Projects</span>
                                                        </div>
                                                        <div className="col-md-3 text-center">
                                                            <span className="fh5co-counter js-counter" data-from="0" data-to="8687" data-speed="5000" data-refresh-interval="50"></span>
                                                            <span className="fh5co-counter-label">Finished Projects</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="work">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="fh5co-grid animate-box" style={video_style_bg_1}>
                                                    <a className="image-popup text-center" href="#">
                                                        <div className="work-title">
                                                            <h3>Skahan Marriage</h3>
                                                            <span>Wedding, Demo</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="fh5co-grid animate-box" style={video_style_bg_2}>
                                                    <a className="image-popup text-center" href="#">
                                                        <div className="work-title">
                                                            <h3>Clifton Mansion</h3>
                                                            <span>NYE</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="fh5co-grid animate-box" style={video_style_bg_3}>
                                                    <a className="image-popup text-center" href="#">
                                                        <div className="work-title">
                                                            <h3>Mexico</h3>
                                                            <span>2017</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="fh5co-grid animate-box" style={video_style_bg_4}>
                                                    <a className="image-popup text-center" href="#">
                                                        <div className="work-title">
                                                            <h3>LA All Day</h3>
                                                            <span>A day in the life</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="fh5co-grid animate-box" style={video_style_bg_5}>
                                                    <a className="image-popup text-center" href="#">
                                                        <div className="work-title">
                                                            <h3>To Never Be Lost</h3>
                                                            <span>Music by Salomon Lighthelm. Licensed through MusicBed.</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                                <div className="getting-started getting-started-1">
                                    <div className="getting-grid" style={connect_style_bg}>
                                        <div className="desc text-center">
                                            <h2>Connect with me</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                            </p>
                                            <p>
                                                <a href="#" className="btn btn-primary">Get in touch</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div id="fh5co-footer" role="contentinfo">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-4 to-animate">
                                                <h3 className="section-title">Legal</h3>
                                                <p className="copy-right">&copy; 2017 Jud Nichols
                                                    <br/>All Rights Reserved.
                                                    <br/>
                                                    Designed by
                                                    <a href="http://wwww.aestheke.com/" target="_blank">Aestheke.com</a>

                                                </p>
                                            </div>

                                            <div className="col-md-4 to-animate">
                                                <h3 className="section-title">Follow me on social</h3>
                                                <ul className="social-media">
                                                    <li>
                                                        <a href="#" className="facebook">
                                                            <i className="icon-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dribbble">
                                                            <i className="icon-dribbble"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="github">
                                                            <i className="icon-github-alt"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 to-animate">
                                                <h3 className="section-title">Drop me a line</h3>
                                                <form className="contact-form">
                                                    <div className="form-group">
                                                        <label for="name" className="sr-only">Name</label>
                                                        <input type="name" className="form-control" id="name" placeholder="Name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="email" className="sr-only">Email</label>
                                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="message" className="sr-only">Message</label>
                                                        <textarea className="form-control" id="message" rows="7" placeholder="Message"></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="submit" id="btn-submit" className="btn btn-send-message btn-md" value="Send Message"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    }
});

export default Home;
