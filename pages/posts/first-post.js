import Head from "next/head";
import Link from "next/link";
import Alert from "../../components/alert";
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Alert type='success'>Successfully created first post</Alert>
            <h2>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}
