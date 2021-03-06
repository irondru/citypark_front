import React from 'react'
import { Helmet } from 'react-helmet'

import * as images from './images'
import { SocShare, PhotoGallery, Breadcrumbs } from 'components'
import { RESTAURANT, REST_MAIN } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

export default () =>
  <div className="light">
    <Helmet title={TITLE_PREFIX + RESTAURANT.TITLE} />
    { Breadcrumbs({links:  [ REST_MAIN, RESTAURANT ]}) }
    <SocShare
      link={baseUrl() + RESTAURANT.URL}
      title={TITLE_PREFIX + RESTAURANT.TITLE}
      image={baseUrl() + images.restaurant}
    />
    <h1>{RESTAURANT.TITLE}</h1>
    <h2>
      <span
        style={{
          fontSize: "1.17em",
          fontWeight: "normal",
          lineHeight: "1.5em"}}
        >Комфортный зал ресторана с самым&nbsp;современным музыкальным оборудованием.
      </span>
    </h2>
    <h3 className="justifyleft">&nbsp;&nbsp;</h3>
    <p className="justifyleft">
      <img
        src={images.restaurant2}
        alt="12345"
        width="393"
        height="262"
      />
      &nbsp;
    </p>
    <p className="justifyleft">
      <span>
        Вы приятно проведете время в компании друзей на уютных диванах под&nbsp;
        сияющим звездным небом.&nbsp;
        <br/>
      </span>
      <span>
        Здесь в любое время суток царит&nbsp;романтическая вечерняя атмосфера&nbsp;
        City Park.
      </span>
    </p>
    <p className="justifyleft">
      <span>
        <span>
          В ресторане City Park вы можете провести свадьбу, банкет и корпоратив.&nbsp;
        </span>
        <br/>
        <br/>
        <span>
          Наш уютный зал вместимостью 50-60
        </span>
        <span>
          &nbsp;
          человек приглашает вас с комфортом отдохнуть и весело провести ваш праздник.&nbsp;
        </span>
        <br/>
        <span>
          Веселитесь на танцполе, наслаждайтесь отличной европейской и японской кухней и общением с близкими людьми в самой располагающей для этого обстановке.
        </span>
      </span>
    </p>
    <p className="justifyleft">
      Настоящая джазовая и классическая музыка, chill-out и танцевальные направления.
    </p>
    <p className="justifyleft">
      <strong>
        На всей территории РГК City Park доступен бесплатный&nbsp;
        Wi-fi&nbsp;
      </strong>
      <span>
        &nbsp;
      </span>
    </p>
    <h4>
      Забронировать столик или заказать доставку еды в Белореченске можно по телефону: +7-918-311-97-91 или на сайте РГК City Park <a title="City Park Белореченск" href="https://cityparkvip.ru/" target="_blank" rel="noopener noreferrer">www.cityparkvip.ru</a> в разделе "Меню".
    </h4>
    <PhotoGallery
      items={[
        {
          thumb: images.thumb1,
          image: images.image1
        },
        {
          thumb: images.thumb2,
          image: images.image2
        },
        {
          thumb: images.thumb3,
          image: images.image3
        }
      ]}
    />
    <a href="/tour/restaurant.html" target="_blank" rel="noopener noreferrer" className="tur_btn" style={{top: "80px", right: "30px"}}><div /></a>
  </div>
