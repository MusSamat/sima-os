import { observer } from 'mobx-react-lite';
import React, {useEffect, useContext} from 'react';
import { Context } from '../../index';

const Single = observer(({match}) => {
    const {product} = useContext(Context)
    const id = match.params.id
    useEffect(() => {
        product.getBlogData(id)
        console.log(id)
    }, [])
    return (
        <div>
            <main className="main">
                <div className="page-header text-center" style={{backgroundImage: "url('assets/images/page-header-bg.jpg')"}}>
                    <div className="container">
                        <h1 className="page-title">Default With Sidebar<span>Single Post</span></h1>
                    </div>
                </div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Blog</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Default With Sidebar</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <article className="entry single-entry">
                                    <figure className="entry-media">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${product.blogItem?.images[0]}`} alt="image desc"/>
                                    </figure>

                                    <div className="entry-body">
                                        <div className="entry-meta">
                                            <span className="entry-author">
                                                by <a href="#">John Doe</a>
                                            </span>
                                            <span className="meta-separator">|</span>
                                            <a href="#">Nov 22, 2018</a>
                                            <span className="meta-separator">|</span>
                                            <a href="#">2 Comments</a>
                                        </div>

                                        <h2 className="entry-title">
                                            {product.blogItem.title}
                                        </h2>

                                        <div className="entry-cats">
                                            in <a href="#">Lifestyle</a>,
                                            <a href="#">Shopping</a>
                                        </div>

                                        <div className="entry-content editor-content">
                                            <p>{product.blogItem.description}</p>

                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <a href="#">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                            <div className="pb-1"></div>

                                            <img src="" alt="image" className="float-left"/>

                                            

                                            
                                        </div>

                                        
                                    </div>

                                    
                                </article>

                                
                                <div className="related-posts">
                                    <h3 className="title">Related Posts</h3>

                                    <div className="owl-carousel owl-simple" data-toggle="owl" 
                                        data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                }
                                            }
                                        }'>
                                        <article className="entry entry-grid">
                                            <figure className="entry-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                                </a>
                                            </figure>

                                            <div className="entry-body">
                                                <div className="entry-meta">
                                                    <a href="#">Nov 22, 2018</a>
                                                    <span className="meta-separator">|</span>
                                                    <a href="#">2 Comments</a>
                                                </div>

                                                <h2 className="entry-title">
                                                    <a href="single.html">Cras ornare tristique elit.</a>
                                                </h2>

                                                <div className="entry-cats">
                                                    in <a href="#">Lifestyle</a>,
                                                    <a href="#">Shopping</a>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="entry entry-grid">
                                            <figure className="entry-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                                </a>
                                            </figure>

                                            <div className="entry-body">
                                                <div className="entry-meta">
                                                    <a href="#">Nov 21, 2018</a>
                                                    <span className="meta-separator">|</span>
                                                    <a href="#">0 Comments</a>
                                                </div>

                                                <h2 className="entry-title">
                                                    <a href="single.html">Vivamus ntulla necante.</a>
                                                </h2>

                                                <div className="entry-cats">
                                                    in <a href="#">Lifestyle</a>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="entry entry-grid">
                                            <figure className="entry-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc"/>
                                                </a>
                                            </figure>

                                            <div className="entry-body">
                                                <div className="entry-meta">
                                                    <a href="#">Nov 18, 2018</a>
                                                    <span className="meta-separator">|</span>
                                                    <a href="#">3 Comments</a>
                                                </div>

                                                <h2 className="entry-title">
                                                    <a href="single.html">Utaliquam sollicitudin leo.</a>
                                                </h2>

                                                <div className="entry-cats">
                                                    in <a href="#">Fashion</a>,
                                                    <a href="#">Lifestyle</a>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="entry entry-grid">
                                            <figure className="entry-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc"/>
                                                </a>
                                            </figure>

                                            <div className="entry-body">
                                                <div className="entry-meta">
                                                    <a href="#">Nov 15, 2018</a>
                                                    <span className="meta-separator">|</span>
                                                    <a href="#">4 Comments</a>
                                                </div>

                                                <h2 className="entry-title">
                                                    <a href="single.html">Fusce pellentesque suscipit.</a>
                                                </h2>

                                                <div className="entry-cats">
                                                    in <a href="#">Travel</a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>

                                <div className="comments">
                                    <h3 className="title">3 Comments</h3>

                                    <ul>
                                        <li>
                                            <div className="comment">
                                                <figure className="comment-media">
                                                    <a href="#">
                                                        <img src="assets/images/blog/comments/1.jpg" alt="User name"/>
                                                    </a>
                                                </figure>

                                                <div className="comment-body">
                                                    <a href="#" className="comment-reply">Reply</a>
                                                    <div className="comment-user">
                                                        <h4><a href="#">Jimmy Pearson</a></h4>
                                                        <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul>
                                                <li>
                                                    <div className="comment">
                                                        <figure className="comment-media">
                                                            <a href="#">
                                                                <img src="assets/images/blog/comments/2.jpg" alt="User name"/>
                                                            </a>
                                                        </figure>

                                                        <div className="comment-body">
                                                            <a href="#" className="comment-reply">Reply</a>
                                                            <div className="comment-user">
                                                                <h4><a href="#">Lena  Knight</a></h4>
                                                                <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                            </div>

                                                            <div className="comment-content">
                                                                <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="comment">
                                                <figure className="comment-media">
                                                    <a href="#">
                                                        <img src="assets/images/blog/comments/3.jpg" alt="User name"/>
                                                    </a>
                                                </figure>

                                                <div className="comment-body">
                                                    <a href="#" className="comment-reply">Reply</a>
                                                    <div className="comment-user">
                                                        <h4><a href="#">Johnathan Castillo</a></h4>
                                                        <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="reply">
                                    <div className="heading">
                                        <h3 className="title">Leave A Reply</h3>
                                        <p className="title-desc">Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form action="#">
                                        <label for="reply-message" className="sr-only">Comment</label>
                                        <textarea name="reply-message" id="reply-message" cols="30" rows="4" className="form-control" required placeholder="Comment *"></textarea>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label for="reply-name" className="sr-only">Name</label>
                                                <input type="text" className="form-control" id="reply-name" name="reply-name" required placeholder="Name *"/>
                                            </div>

                                            <div className="col-md-6">
                                                <label for="reply-email" className="sr-only">Email</label>
                                                <input type="email" className="form-control" id="reply-email" name="reply-email" required placeholder="Email *"/>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-outline-primary-2">
                                            <span>POST COMMENT</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
})

export default  Single;
