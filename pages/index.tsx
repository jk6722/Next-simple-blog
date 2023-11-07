import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";

interface postDataType {
  date: string;
  title: string;
  id: string;
}

const Home: NextPage = ({ allPostsData }: { allPostsData: postDataType[] }) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Jaeguk</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Jaeguk Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
