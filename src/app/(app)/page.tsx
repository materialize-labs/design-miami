import { IData } from '@pages/api/home'
import { Fragment } from 'react'
import styles from '@app/styles/page.module.scss'
import { LazyImage } from '@app/components'

async function getHome() {
  const res = await fetch(`${process.env.SITE_URL}/api/home`, {
    cache: 'force-cache',
    next: { revalidate: 60 },
  })
  return res.json()
}

const Home = async () => {
  const home: IData = await getHome()
  const data = home[0]

  // Return
  return (
    <section className={styles.section}>
      {data?.blogs?.map((item) => (
        <Fragment key={item.href}>
          {!item.video ? (
            item.image ? (
              <LazyImage src={item.image} alt={'image'} width={450} height={250} />
            ) : (
              <div>Not Video and Image yet</div>
            )
          ) : (
            <div>Video</div>
          )}

          <p className={styles.link}>{item.name}</p>
        </Fragment>
      ))}
    </section>
  )
}

export default Home
