// Seo
export default function Head() {
  return (
    <>
      <title>Antenna - Design Miami</title>
      <link rel='icon' href={`${process.env.SITE_URL}/favicon.ico`} />

      <meta name='robots' content='index,follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='display' content='standalone' />
      <meta charSet='utf-8' />
      <meta property='og:type' content='website' />

      <meta name='locale' content={'en-US'} />
      <meta name='keywords' content={'Audi, Antenna, Design Miami'} />
      <meta name='description' content={'Antenna - Design Miami'} />
      <meta name='theme-color' content={'#a8acb8'} />
      <meta name='background-color' content={'#a8acb8'} />
      <meta name='apple-mobile-web-app-capable' content={'yes'} />

      <meta property='og:site_name' content={'Antenna - Design Miami'} />
      <meta property='og:title' content={'Antenna - Design Miami'} />
      <meta property='og:locale' content={'en-US'} />
      <meta property='og:description' content={'Antenna - Design Miami'} />
      <meta property='og:image' content={`${process.env.SITE_URL}/images/logo.png`} />
    </>
  )
}
