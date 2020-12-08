import '../css/style.scss';

import Head from 'next/head';

import Footer from './footer';
import Header from './header';

const GA_CODE = `
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-70971437-1', 'auto');
ga('send', 'pageview');
`;

const Page = ({ title, children }) => (
  <div>
    <Head>
      <title>{title ? `${title} - Buttercup` : 'Buttercup'}</title>
      <link rel="icon" href="/static/img/buttercup.ico" />
      <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
      <link
        rel="chrome-webstore-item"
        href="https://chrome.google.com/webstore/detail/heflipieckodmcppbnembejjmabajjjj"
      />
      <script dangerouslySetInnerHTML={{ __html: GA_CODE }} />
    </Head>
    <Header />
    {children}
    <Footer />
    <script async src="//cdn.changelog.com/embed.js" />
  </div>
);

export default Page;
