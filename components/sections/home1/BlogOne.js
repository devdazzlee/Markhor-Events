import Link from 'next/link';

// Mock data for demonstration purposes
const blogPosts = [
  {
    id: 1,
    title: "Neon Beach Rave Recap: Karachi's Glow Party",
    image: 'assets/images/blog/neon-beach-rave.jpg',
    date: 'June 5, 2025',
    author: 'Markhor Team',
    link: '/blog-details/neon-beach-rave',
    animationDelay: '100ms',
    animationClass: 'fadeInLeft'
  },
  {
    id: 2,
    title: 'Top 5 Hidden Rooftop Venues for Nightouts',
    image: 'assets/images/blog/rooftop-venues.jpg',
    date: 'June 10, 2025',
    author: 'Markhor Team',
    link: '/blog-details/rooftop-venues',
    animationDelay: '200ms',
    animationClass: 'fadeInUp'
  },
  {
    id: 3,
    title: "Girls' Night Out Essentials: What to Wear & Bring",
    image: 'assets/images/blog/girls-night-essentials.jpg',
    date: 'June 15, 2025',
    author: 'Markhor Team',
    link: '/blog-details/girls-night-essentials',
    animationDelay: '300ms',
    animationClass: 'fadeInRight'
  }
];

export default function BlogOne() {
  return (
    <section className="blog-one">
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Event Buzz & Vibes</span>
            </div>
            <h2 className="section-title__title">What's Poppin' in Karachi</h2>
          </div>
          <div className="blog-one__btn-box">
            <Link href="/blog" className="blog-one__btn thm-btn">
              Explore More Stories<span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="blog-one__bottom">
          <div className="row">
            {blogPosts.map(post => (
              <div
                key={post.id}
                className={`col-xl-4 col-lg-4 col-md-6 wow ${post.animationClass}`}
                data-wow-delay={post.animationDelay}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-one__hover">
                      <Link href={post.link}>
                        <span className="blog-one__hover-icon-1">
                          <span className="blog-one__hover-icon-2"></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <span className="icon-user"></span>By {post.author}
                      </li>
                      <li>
                        <span className="icon-calendar"></span>{post.date}
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href={post.link}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="blog-one__btn-box-two">
                      <Link href={post.link} className="blog-one__btn thm-btn">
                        Read More<span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
