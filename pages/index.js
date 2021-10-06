import Head from 'next/head'
import NewsItem from '../components/news-item';

// data structure here confirming to the data model
const NEWSITEMS = [{
  userName: "Sondra Ameperosa",
  group: "Reno/Sparks Lost and Found Pets",
  postedDate: "September 10 at 7:20 AM ",
  body: "This handsome guy just walked into my house on Rocky Mountain Street in the Pevine Estates off of Stead blvd",
  image: "dog.png",
  comments: ["This is Great News.", "So happy he is safe and at home with family.❤🐕"]
},
{
  userName: "Mlindo The Vocalist",
  group: "",
  postedDate: "1h",
  body: "OMG...Look at how impressive this female truck driver is👸",
  image: "truckdriver.png",
  comments: ["Wow ❤", "Very cool.🐕"]
}];



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://www.facebook.com">
            Facebook feed
          </a>
        </h1>

        <div className="flex flex-col gap-4 bg-black p-10">
          {NEWSITEMS.map((newsItem, idx) => <NewsItem key={idx} newsItem={newsItem} />)} 
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        Demo app.
      </footer>
    </div>
  )
}
