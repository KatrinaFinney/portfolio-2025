"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRouter } from "next/navigation";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

export default function GitHubParticles() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.github.com/users/katrinafinney/repos")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("Unexpected API response:", data);
          setRepos([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        setRepos([]);
      });
  }, []);

  const colors = ["#9b5de5", "#00c9a7", "#ff9f43", "#6a0dad", "#1a1b41"];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      {repos.length > 0 &&
        repos.map((repo, index) => (
          <mesh
            key={repo.id}
            position={[Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3]}
            onClick={() => router.push(repo.html_url)}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
          >
            <Sphere args={[0.3, 32, 32]}>
              <MeshDistortMaterial
                color={colors[index % colors.length]}
                emissive={colors[index % colors.length]}
                emissiveIntensity={4}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </mesh>
        ))}
    </Canvas>
  );
}
