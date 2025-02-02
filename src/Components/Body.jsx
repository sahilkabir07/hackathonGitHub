
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/baseUrl";
import UserCard from "./UserCard";
import Modal from "./Modal";

const GitHubUsersByStars = () => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRes = await fetch(`${BASE_URL}/users`, {
                    headers: { Authorization: `token ${GITHUB_TOKEN}` },
                });
                const usersData = await usersRes.json();

                const usersWithStars = await Promise.all(
                    usersData.map(async (user) => {
                        const reposRes = await fetch(user.repos_url, {
                            headers: { Authorization: `token ${GITHUB_TOKEN}` },
                        });
                        const reposData = await reposRes.json();

                        const topRepo = reposData.reduce(
                            (max, repo) => (repo.stargazers_count > max.stargazers_count ? repo : max),
                            { stargazers_count: 0 }
                        );

                        return { ...user, topStars: topRepo.stargazers_count };
                    })
                );

                const sortedUsers = usersWithStars.sort((a, b) => b.topStars - a.topStars);

                setUsers(sortedUsers);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleApi = (username) => {
        fetch("https://api.github.com/users/mojombo", {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error fetching user:", error));
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>

            <div className="container flex flex-wrap mx-auto">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.login}
                        img={user.avatar_url}
                        handleApi={() => handleApi(user.login)}
                        description={user.topStars}
                    />
                ))}
            </div>
        </div>
    );
};

export default GitHubUsersByStars;