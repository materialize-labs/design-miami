// Seo
export default function Head() {
  return (
    <>
      <title>Design miami</title>
      <link rel='icon' href={`${process.env.SITE_URL}/favicon.ico`} />

      <meta name='robots' content='index,follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='display' content='standalone' />
      <meta charSet='utf-8' />
      <meta property='og:type' content='website' />

      <meta name='locale' content={'en-US'} />
      <meta name='keywords' content={'Audi'} />
      <meta name='description' content={'Buy Audi'} />
      <meta name='theme-color' content={'#a8acb8'} />
      <meta name='background-color' content={'#a8acb8'} />

      <meta property='og:site_name' content={'Design miami'} />
      <meta property='og:title' content={'Design miami'} />
      <meta property='og:locale' content={'en-US'} />
      <meta property='og:description' content={'Audi'} />
      <meta property='og:image' content={`${process.env.SITE_URL}/images/logo.png`} />
    </>
  )
}
