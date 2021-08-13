import api from "./api"
export default async function getAllRepos() {
    try {
        const response = await api.get("/search/repositories", {
            params: {
                q: "created:>2021-01-01",
                sort: "stars",
                order: "desc",
                page: 1,
            },
        });
        if (response) {
            return response.data.items;
        } else {
            return [];
        }
    } catch (error) {
        console.log("GET REPOS ERR", error);
    }
}