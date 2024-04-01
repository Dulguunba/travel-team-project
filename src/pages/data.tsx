import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
    name: string
    stargazers_count: number
}

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('http://localhost:8800/travel/get')
    const repo: Repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>

export default function Page({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main>
            <p>{repo.stargazers_count}</p>
        </main>
    )
}