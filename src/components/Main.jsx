import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../assets/styles/main.css"

const Main = () => {
    useEffect(() => {
        // Geri sayım taymeri üçün kod
        const targetDate = new Date('April 20, 2025 00:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;

            // Vaxtı həftə, gün, saat, dəqiqə və saniyəyə çeviririk
            const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // HTML-dəki elementləri yeniləyirik
            const countdownElement = document.getElementById('date-countdown');
            countdownElement.querySelectorAll('.countdown-block')[0].querySelector('.label').textContent = weeks < 10 ? '0' + weeks : weeks;
            countdownElement.querySelectorAll('.countdown-block')[1].querySelector('.label').textContent = days < 10 ? '0' + days : days;
            countdownElement.querySelectorAll('.countdown-block')[2].querySelector('.label').textContent = hours < 10 ? '0' + hours : hours;
            countdownElement.querySelectorAll('.countdown-block')[3].querySelector('.label').textContent = minutes < 10 ? '0' + minutes : minutes;
            countdownElement.querySelectorAll('.countdown-block')[4].querySelector('.label').textContent = seconds < 10 ? '0' + seconds : seconds;

            // Əgər vaxt bitibsə, taymeri sıfırlayaq
            if (timeDifference < 0) {
                clearInterval(countdownInterval);
                countdownElement.querySelectorAll('.countdown-block .label').forEach(label => label.textContent = '00');
            }
        }

        // Hər saniyədən bir yeniləyirik
        const countdownInterval = setInterval(updateCountdown, 1000);

        // İlk dəfə dərhal yeniləyirik
        updateCountdown();

        // Kontakt forması üçün kod
        const form = document.getElementById('form');

        form.onsubmit = function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Fill all fields!');
                return;
            }

            const data = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(function(res) {
                    return res.json();
                })
                .then(function() {
                    alert('Sent!');
                    form.reset();
                });
        };

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(countdownInterval);
    }, []);
    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <div className="hero" id="home">
                    <div className="container">
                        <h1>Shop With Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <div>
                            <a href="#" className="btn">Shop Now</a>
                            <a href="#" className="btn btn2">Club Membership</a>
                        </div>
                    </div>
                </div>

                <div className="products" id="products">
                    <div className="container">
                        <h3>Popular Products</h3>
                        <h2>Our Products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <div className="product-list">
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                                     alt="product1"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_2_bg.jpg"
                                     alt="product2"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_3_bg.jpg"
                                     alt="product3"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_4_bg.jpg"
                                     alt="product4"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg"
                                     alt="product5"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                                     alt="product6"/>
                                <h3>Wild West Hoodie</h3>
                                <div className="rating">
                                    <span>★ 5.0</span>
                                    <span>♥ 29</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <div>
                                    <a href="#" className="btn">Cart</a>
                                    <a href="#" className="btn btn2">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notification">
                    <div className="container">
                        <h2>Get notified on each updates.</h2>
                        <div className="form">
                            <input type="text" placeholder="Enter your email address"/>
                            <button>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="featured-products">
                    <div className="container">
                        <h3>Awesome Products</h3>
                        <h2>Featured Products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <div className="product-item">
                            <div className="product-image">
                                <div className="vertical-text">GET THE LATEST</div>
                                <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                                     alt="featured1"/>
                            </div>
                            <div className="product-info">
                                <h3>About This Product</h3>
                                <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                                    asperiores quasi accusantium voluptatum dolorem que sapiente voluptatem ratione odio
                                    iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ducimus soluta assumenda sed
                                    optio, error at?</p>
                                <h4>Price:</h4>
                                <p>
                                    <del>$269.00</del>
                                    $69.00
                                </p>
                                <div className="button-group">
                                    <a href="#" className="btn btn2">View Details</a>
                                    <a href="#" className="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <div className="vertical-text">GET THE LATEST</div>
                                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                                     alt="featured2"/>
                            </div>
                            <div className="product-info">
                                <h3>About This Product</h3>
                                <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                                    asperiores quasi accusantium voluptatum dolorem que sapiente voluptatem ratione odio
                                    iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ducimus soluta assumenda sed
                                    optio, error at?</p>
                                <h4>Price:</h4>
                                <p>
                                    <del>$269.00</del>
                                    $69.00
                                </p>
                                <div className="button-group">
                                    <a href="#" className="btn btn2">View Details</a>
                                    <a href="#" className="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="container">
                        <div className="about-image">
                            <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="about"/>
                            <div className="experience">
                                <span>Trusted Merchant</span>
                                <span>for 50 years</span>
                            </div>
                        </div>
                        <div className="about-info">
                            <h3>Merchant Company</h3>
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui fuga ipsa, repellat
                                blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi
                                ipsam libero ratione adipisci alias eius vero vel!</p>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="leadership">
                    <div className="container">
                        <h2>Leadership</h2>
                        <div className="team-list">
                            <div className="team-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
                                     alt="person1"/>
                                <h3>John Rooster</h3>
                                <p className="position">CO-FOUNDER, PRESIDENT</p>
                                <p>Nisi at consequuntur unde molestiae quidem provident voluptatum deleniti quo iste
                                    error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt
                                    tenetur.</p>
                                <div className="social">
                                    <a href="#"><span className="social-icon">f</span></a>
                                    <a href="#"><span className="social-icon">t</span></a>
                                    <a href="#"><span className="social-icon">in</span></a>
                                    <a href="#"><span className="social-icon">i</span></a>
                                </div>
                            </div>
                            <div className="team-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
                                     alt="person2"/>
                                <h3>Tom Sharp</h3>
                                <p className="position">CO-FOUNDER, COO</p>
                                <p>Nisi at consequuntur unde molestiae quidem provident voluptatum deleniti quo iste
                                    error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt
                                    tenetur.</p>
                                <div className="social">
                                    <a href="#"><span className="social-icon">f</span></a>
                                    <a href="#"><span className="social-icon">t</span></a>
                                    <a href="#"><span className="social-icon">in</span></a>
                                    <a href="#"><span className="social-icon">i</span></a>
                                </div>
                            </div>
                            <div className="team-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
                                     alt="person3"/>
                                <h3>Winston Hodson</h3>
                                <p className="position">MARKETING</p>
                                <p>Nisi at consequuntur unde molestiae quidem provident voluptatum deleniti quo iste
                                    error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt
                                    tenetur.</p>
                                <div className="social">
                                    <a href="#"><span className="social-icon">f</span></a>
                                    <a href="#"><span className="social-icon">t</span></a>
                                    <a href="#"><span className="social-icon">in</span></a>
                                    <a href="#"><span className="social-icon">i</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="special" id="special">
                    <div className="special-overlay"></div>
                    <div className="container">
                        <div className="col-md-7 text-center mx-auto">
                            <h3 className="section-sub-title">Special Promo</h3>
                            <h3 className="section-title text-white mb-4">Summer Sale</h3>
                            <p className="mb-5 lead">Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
                                eveniet aut consequatur laboriosam ipsam.</p>
                            <div id="date-countdown" className="mb-5">
                                <span className="countdown-block"><span className="label">00</span> weeks </span>
                                <span className="countdown-block"><span className="label">00</span> days </span>
                                <span className="countdown-block"><span className="label">00</span> hr </span>
                                <span className="countdown-block"><span className="label">00</span> min </span>
                                <span className="countdown-block"><span className="label">00</span> sec</span>
                            </div>
                            <p><a href="#"
                                  className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop
                                Now</a></p>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="container">
                        <h3>Our Services</h3>
                        <h2>We Offer Services</h2>
                        <div className="service-list">
                            <div className="service-item">
                                <span className="icon">📊</span>
                                <h3>Business Consulting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div className="service-item">
                                <span className="icon">🔍</span>
                                <h3>Market Analysis</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div className="service-item">
                                <span className="icon">⏰</span>
                                <h3>User Monitoring</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div className="service-item">
                                <span className="icon">✅</span>
                                <h3>Seller Consulting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div className="service-item">
                                <span className="icon">💼</span>
                                <h3>Financial Investment</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div className="service-item">
                                <span className="icon">☁️</span>
                                <h3>Financial Management</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials" id="testimonials-section">
                    <div className="container">
                        <h3>People Say</h3>
                        <h2>Testimonials</h2>
                        <div id="testimonials-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-item">
                                        <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
                                             alt="person1"/>
                                        <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur unde
                                            reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga
                                            beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum
                                            unde iusto.”</p>
                                        <h4>John Smith</h4>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-item">
                                        <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
                                             alt="person2"/>
                                        <p>“Nisi at consequuntur unde molestiae quidem provident voluptatum deleniti quo
                                            iste error eos est praesentium distinctio cupiditate tempore suscipit
                                            inventore deserunt tenetur.”</p>
                                        <h4>Tom Sharp</h4>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-item">
                                        <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
                                             alt="person3"/>
                                        <p>“Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet
                                            aut consequatur laboriosam ipsam.”</p>
                                        <h4>Winston Hodson</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#testimonials-carousel" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#testimonials-carousel" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#testimonials-carousel" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-posts" id="blog">
                    <div className="container">
                        <h3>Blog</h3>
                        <h2>Blog Posts</h2>
                        <div className="blog-list">
                            <div className="blog-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg"
                                     alt="blog1"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="blog-meta">
                                    <span>Ham Brook</span> • <span>Jan 18, 2019</span> • <a href="#">News</a>
                                </div>
                            </div>
                            <div className="blog-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                                     alt="blog2"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="blog-meta">
                                    <span>James Phelps</span> • <span>Jan 18, 2019</span> • <a href="#">News</a>
                                </div>
                            </div>
                            <div className="blog-item">
                                <img src="https://preview.colorlib.com/theme/selling/images/model_4_bg.jpg"
                                     alt="blog3"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="blog-meta">
                                    <span>James Phelps</span> • <span>Jan 18, 2019</span> • <a href="#">News</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact" id="contact">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <form id="form">
                            <input type="text" id="name" placeholder="Your Name"/>
                            <input type="email" id="email" placeholder="Your Email"/>
                            <input type="text" id="subject" placeholder="Subject"/>
                            <textarea id="message" placeholder="Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
