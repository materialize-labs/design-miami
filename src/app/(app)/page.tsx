import { IData } from '@pages/api/home'
import styles from '@app/styles/page.module.scss'
import { More, VideoItems } from '@app/components'

async function getHome() {
  const res = await fetch(`${process.env.SITE_URL}/api/home`, {
    cache: 'force-cache',
    next: { revalidate: 60 },
  })
  return res.json()
}

const Home = async () => {
  const home: IData[] = await getHome()
  const data = home[0]

  // Return
  return (
    <section className={styles.section} id='modal-parent'>
      {data?.items?.length && <VideoItems items={data.items} />}

      <div className={styles.more}>
        <More img={data.qr} />
      </div>
    </section>
  )
}

export default Home
