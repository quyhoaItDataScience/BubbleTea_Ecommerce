import React from "react";
import "./news.scss";

const News = () => {
  return (
    <section className="news container">
      <div className="news__left">
        <div className="news__left__post">
          <div className="news__left__post__img">
            <img
              src="http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/18.jpg"
              alt="post"
            />
          </div>
          <div className="news__left__post__content">
            <h4 className="news__left__post__title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, ab.
            </h4>
            <p className="news__left__post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              inventore.
            </p>
          </div>
        </div>
        <div className="news__left__post">
          <div className="news__left__post__img">
            <img
              src="http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/18.jpg"
              alt="post"
            />
          </div>
          <h4 className="news__left__post__title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ab.
          </h4>
          <p className="news__left__post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            inventore.
          </p>
        </div>
        <div className="news__left__post">
          <div className="news__left__post__img">
            <img
              src="http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/18.jpg"
              alt="post"
            />
          </div>
          <h4 className="news__left__post__title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ab.
          </h4>
          <p className="news__left__post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            inventore.
          </p>
        </div>
      </div>
      <div className="news__right">
        <div className="news__right__post">
          <div className="news__right__post__img">
            <img
              src="http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/18.jpg"
              alt="post"
            />
          </div>
          <div className="news__right__post__content">
            <h4 className="news__right__post__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id.
            </h4>
            <p className="news__right__post__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              error.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
