import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | João Pedro - WebDev',
  defaultTitle: 'João Pedro - WebDev',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jpdrsanchez.vercel.app/',
    site_name: 'João Pedro - WebDev',
    title: 'João Pedro - WebDev',
    images: [
      {
        url: 'https://ik.imagekit.io/mbzuqhe9asg/og_wlLP9QNfNR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646075076327',
        width: 1200,
        height: 630,
        alt: 'João Pedro - WebDev'
      }
    ]
  },
  twitter: {
    handle: '@jpdrsanchez',
    site: '@site',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8'
    }
  ]
}

export default SEO
