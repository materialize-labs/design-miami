import { IData } from '@pages/api/home'
import { Fragment } from 'react'
import Link from 'next/link'
import styles from '@app/styles/page.module.scss'
import Image from 'next/image'

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
              <Image src={item.image} alt={'image'} width={450} height={250} />
            ) : (
              <div>Not Video and Image yet</div>
            )
          ) : (
            <div>Video</div>
          )}

          <Link href={item.href.replace(/ /gi, '-').toLowerCase()} className={styles.link}>
            {item.name}
          </Link>
        </Fragment>
      ))}
    </section>
  )
}

export default Home
