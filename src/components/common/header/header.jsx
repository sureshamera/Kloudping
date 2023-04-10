import React , { Component }from 'react'
import $ from "jquery";
import '../header/header.css'


class header extends Component {
  componentDidMount()
  {
    
    function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 180) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
    //Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}
    //Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}
	$(window).on('scroll', function() {
		headerStyle();
	});
   
	
    if($('#search-popup').length){
		
      //Show Popup
      $('.search-toggler').on('click', function() {
        $('#search-popup').addClass('popup-visible');
        $('body').addClass('search-visible');
      });
      $(document).keydown(function(e){
            if(e.keyCode === 27) {
                $('#search-popup').removeClass('popup-visible');
                $('body').removeClass('search-visible');
            }
        });
      //Hide Popup
      $('.close-search,.search-popup .overlay-layer').on('click', function() {
        $('#search-popup').removeClass('popup-visible');
        $('body').removeClass('search-visible');
      });
    }

    var a = document.querySelectorAll(".navigation a");
    for (var i = 0, length = a.length; i < length; i++) {
      a[i].onclick = function() {
        var b = document.querySelector(".navigation li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add('active');
      };
    }
     
  }

  render() {
  return (
    
      <>
     
     
      <header className="main-header header-style-one">
      
      <div className="header-top header-top-one">
          <div className="auto-container">
      <div className="inner clearfix">
                  <div className="top-left clearfix">
                      <div className="top-text">IT solutions that are designed to integrate multiple sectors</div>
                  </div>
  
                  <div className="top-right clearfix">
                   
                      <div className="info">
                          <ul className="clearfix">
                              <li className="phone"><a href="tel:+91 89035 00142"><span className="icon sl-icon-call-in"></span>Phone <strong>+91 89035 00142</strong></a></li>
                              <li className="email"><a href="mailto:info@Kloudping.com"><span className="icon sl-icon-envelope-open"></span>info@Kloudping.com</a></li>
                          </ul>
                      </div>
                     
                      <div className="language">
                          <div className="lang-btn">
                              <span className="flag"><img src={require('../../../images/icons/OIP.jfif')} alt="" title="English"/></span>
                              <span className="txt">En</span>
                              <span className="arrow fa fa-angle-down"></span>
                          </div>
                          <div className="lang-dropdown">
                              <ul>
                                  <li><a href="#">German</a></li>
                                  <li><a href="#">Italian</a></li>
                                  <li><a href="#">Chinese</a></li>
                                  <li><a href="#">Russian</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    
      <div className="header-upper">
          <div className="auto-container">
              <div className="inner-container clearfix">
                
                  <div className="logo-box">
                      <div className="logo"><a href='/' title="Kloudping - Business and Consulting HTML Template"><img src={require('../../../images/logo.png.jpg')} alt="Kloudping - Business and Consulting HTML Template" title="Kloudping - Business and Consulting HTML Template"/></a></div>
                  </div>
                  <div className="right-nav clearfix">
                      <div className="nav-outer clearfix">
                        
                          <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                        
                          <nav className="main-menu navbar-expand-md navbar-light">
                              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                  <ul className="navigation clearfix">
                                      <li className="dropdown active"><a href='/'>Home</a>
                                         
                                      </li>
                                      <li  className="dropdown "><a href='#about'>About Us</a>
                                          <ul>
                                              <li><a href='#about'>About Us</a></li>
                                              <li><a href='/#Casestudies'>Case Studies</a></li>
                                              <li><a href='/#FAQ'>FAQ's</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown"><a  href='/#Services'>IT Solutions</a>
                                          <ul>
                                              <li><a href='/#Services'>All Services</a></li><li><a href='/#Datainfrastructure'>Data Infrastructure</a></li>
                                              <li><a href='/#Cloudintegration'>IT Cloud Integration</a></li>
                                              <li><a href='/#Itstartup'>IT Startup Projects</a></li>
                                              <li><a href='/#Productengineering'>Product Engineering</a></li>
                                              <li><a href='/#BusinessSecurity'>Business Security</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown"><a href='/#Casestudies'>Case Studies</a>
                                          <ul>
                                              <li><a href='/#Casestudies'>Case Studies</a></li>
                                              <li><a href='/#ProjectDetails'>Project Details</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown"><a href='/#News'>News</a>
                                          <ul>
                                              <li><a href='/#News'>Blog Grid Style</a></li>
                                              <li><a href='/#BlogNews'>Blog Fullwidth</a></li>
                                              <li><a href='/#BlogFullPost'>Blog Post Details</a></li>
                                          </ul>
                                      </li>
                                      <li><a href='/#contact'>Contact</a></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>

                     
                      <div className="search-btn">
                          <button type="button" className="theme-btn search-toggler"><span className="fa fa-search"></span></button>
                      </div>

                  </div>
              </div>
          </div>
      </div>
      
      <div className="sticky-header">
          <div className="auto-container clearfix">
              
              <div className="logo pull-left">
                  <a href='/' title=""><img src={require('../../../images/sticky-logo.png')} alt="" title=""/></a>
              </div>
             
              <div className="pull-right">
                  
                  <nav className="main-menu clearfix">
                    
                  </nav>
              </div>
          </div>
      </div>
      <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn"><span className="icon flaticon-targeting-cross"></span></div>
          
          <nav className="menu-box">
              <div className="nav-logo"><a href='/'><img src={require('../../../images/nav-logo.png')}alt="" title=""/></a></div>
              <div className="menu-outer"></div>
    
      <div className="social-links">
        <ul className="clearfix">
          <li><a href="#"><span className="fab fa-twitter"></span></a></li>
          <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
          <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
          <li><a href="#"><span className="fab fa-instagram"></span></a></li>
          <li><a href="#"><span className="fab fa-youtube"></span></a></li>
        </ul>
              </div>
          </nav>
      </div>
  </header>

  <div id="search-popup" className="search-popup">
        <div className="close-search theme-btn"><span className="flaticon-targeting-cross"></span></div>
        <div className="popup-inner">
            <div className="overlay-layer"></div>
            <div className="search-form">
                <form method="post" action="http://t.commonsupport.xyz/Kloudping//">
                    <div className="form-group">
                        <fieldset>
                            <input type="search" className="form-control" name="search-input" defaultValue="" placeholder="Search Here" required />
                            <input type="submit" defaultValue="Search Now!" className="theme-btn"/>
                        </fieldset>
                    </div>
                </form>
                
                <br/>
                <h3>Recent Search Keywords</h3>
                <ul className="recent-searches">
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Idea</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Growth</a></li>
                    <li><a href="#">Plan</a></li>
                </ul>
            
            </div>
            
        </div>
    </div>

      </>
   
  )
}
}

export default header
