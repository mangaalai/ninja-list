import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Aute fugiat mollit id sit qui tempor do cillum nulla ullamco consequat elit occaecat. Pariatur esse tempor est Lorem adipisicing irure. Cillum qui dolore eu do dolore reprehenderit proident incididunt anim laboris mollit ut. Anim consectetur in minim tempor adipisicing laborum culpa ullamco elit ipsum adipisicing culpa. Laborum laboris cupidatat esse et do deserunt ea incididunt ad in id. Lorem irure culpa id fugiat aliquip cillum voluptate minim dolore sit Lorem irure. Ut excepteur ea nulla excepteur voluptate eiusmod sunt duis sit elit minim.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
