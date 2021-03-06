import axios from "axios"

const getLatestRepos = async (data) => {
    let userName, repos

    try {
        userName = data.githubUsername

        const res = await axios.get(`https://api.github.com/search/repositories?q=user:${userName}+sort:updated`)
        repos = res.data.items;

        } catch (err) {
            console.log(err)
        }

    return repos.splice(0, 6)
}

export default getLatestRepos